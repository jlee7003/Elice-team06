import { PrismaClient } from "@prisma/client";
import bcrypt, { hash } from "bcrypt";
import Token from "../services/tokenService";
import { generateToken } from "../authentication/jwt-util";
import generator from "generate-password";

const prisma = new PrismaClient();

const isInvalidEmail = (email) => {
    const reg = /^[\w-\.]+@([\w-]+\.)+com$/;

    if (!reg.test(email)) {
        return true;
    }

    return false;
};

class userService {
    static async addUser({ userData }) {
        //이메일 형식 확인
        if (isInvalidEmail(userData.email)) {
            const message = "이메일 형식이 올바르지 않습니다.";
            return { result: false, message };
        }
        //아이디 중복 확인
        const id = userData.id;
        const searchId = await prisma.User.findUnique({ where: { id } });
        if (searchId) {
            const message = "이미 존재하는 id입니다.";
            return { result: false, message };
        }

        //이메일 중복 확인
        const email = userData.email;
        const searchUser = await prisma.User.findUnique({ where: { email } });

        if (searchUser) {
            const message = "이미 존재하는 이메일입니다.";
            return { result: false, message };
        }

        //닉네임 중복 확인
        const nickname = userData.nickname;
        const searchNickname = await prisma.User.findUnique({ where: { nickname } });
        if (searchNickname) {
            const message = "이미 존재하는 닉네임입니다.";
            return { result: false, message };
        }

        //비밀번호 hash 처리
        const password = userData.password;
        const hash = await bcrypt.hash(password, 10);
        userData.password = hash;

        const { age, region, gender, profile_image, introduce } = userData;

        const newUser = await prisma.User.create({
            data: {
                id,
                email,
                nickname,
                password: hash,
                Profile: { create: { age, region, gender, profile_image, introduce } },
            },
        });
        await prisma.$disconnect();
        return newUser;
    }

    static async loginUser({ id, password }) {
        //유저 존재 확인
        const userData = await prisma.User.findUnique({
            where: {
                id,
            },
            include: {
                Profile: { select: { introduce: true, nickname: true } },
            },
        });
        if (userData === null) {
            const message = "존재하지 않는 유저입니다.";
            return { result: false, message };
        }
        //유저 밴, 탈퇴 확인
        if (userData.ban === true || userData.withdrawal === true) {
            const message = "유효하지 않은 유저입니다.";
            return { result: false, message };
        }
        //비밀번호 일치 확인
        const result = await bcrypt.compare(password, userData.password);
        if (!result) {
            const message = "비밀번호가 틀렸습니다.";
            return { result: false, message };
        }
        const introduce = userData.Profile.introduce;
        const nickname = userData.nickname;

        const accessToken = generateToken({ nickname: userData.nickname }, "accessToken");
        let refreshToken = generateToken({}, "refreshToken");

        await prisma.User.update({ where: { nickname }, data: { token: refreshToken } });

        await prisma.$disconnect();
        return { nickname, introduce, accessToken, refreshToken };
    }
    static async logoutUser(token) {
        const value = Token.removeToken(token);
        return value;
    }

    static async changePassword({ nickname, password, new_password }) {
        const userData = await prisma.User.findUnique({
            where: {
                nickname,
            },
        });

        const result = await bcrypt.compare(password, userData.password);
        if (!result) {
            const message = "비밀번호가 틀렸습니다.";
            return { result: false, message };
        }
        const hashedPassword = await bcrypt.hash(new_password, 10);

        await prisma.user.update({
            where: {
                nickname,
            },
            data: {
                password: hashedPassword,
            },
        });
        await prisma.$disconnect();
        return { result: true };
    }
    static async getUser({ refreshtoken }) {
        const userData = await prisma.User.findUnique({
            where: {
                token: refreshtoken,
            },
            select: {
                nickname: true,
                Profile: { select: { introduce: true } },
            },
        });
        await prisma.$disconnect();
        return userData;
    }

    static async getAbout() {
        const userCount = await prisma.User.aggregate({
            _count: true,
        });

        const challenger = await prisma.Challenger.groupBy({
            by: ["nickname"],
        });

        const result = { users: userCount._count, challenger: challenger.length };
        await prisma.$disconnect();
        return result;
    }

    static async getInfo({ nickname }) {
        const userData = await prisma.Profile.findUnique({
            where: {
                nickname,
            },
            select: {
                nickname: true,
                introduce: true,
                age: true,
                region: true,
                gender: true,
                profile_image: true,
            },
        });
        await prisma.$disconnect();
        return userData;
    }

    static async updateUser({ nickname, updateData }) {
        if (updateData.nickname) {
            const newNickname = updateData.nickname;
            const searchNickname = await prisma.Profile.findUnique({
                where: { nickname: newNickname },
                select: { nickname: true },
            });
            //닉네임 중복 확인
            if (searchNickname && searchNickname.nickname !== nickname) {
                const message = "이미 존재하는 닉네임입니다.";
                await prisma.$disconnect();
                return { result: false, message };
            }
            const { age, region, gender, profile_image, introduce } = updateData;

            await prisma.User.update({
                where: { nickname },
                data: { nickname: updateData.nickname },
            });
            const updateInfo = await prisma.Profile.update({
                where: {
                    nickname: updateData.nickname,
                },
                data: { age, region, gender, profile_image, introduce },
            });
            await prisma.$disconnect();
            return [updateInfo, { accessToken: null }];
        }
        const { age, region, gender, profile_image, introduce } = updateData;
        const updateInfo = await prisma.Profile.update({
            where: {
                nickname,
            },
            data: { age, region, gender, profile_image, introduce },
        });
        await prisma.$disconnect();
        return updateInfo;
    }
    static async findId({ email }) {
        if (isInvalidEmail(email)) {
            const message = "이메일 형식이 올바르지 않습니다.";

            return { result: false, message };
        }
        const userData = await prisma.User.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
            },
        });
        await prisma.$disconnect();
        return userData;
    }

    static async authId({ id, email }) {
        if (isInvalidEmail(email)) {
            const message = "이메일 형식이 올바르지 않습니다.";

            return { result: false, message };
        }
        const userData = await prisma.User.findMany({
            where: { AND: [{ id }, { email }] },
            select: { password: true },
        });

        if (userData.length === 0) {
            const message = "존재하지 않는 유저입니다.";
            await prisma.$disconnect();
            return { result: false, message };
        }
        const pw = generator.generate({ length: 8, numbers: true });

        const hashPw = await bcrypt.hash(pw, 10);

        await prisma.User.update({
            where: { id },
            data: { password: hashPw },
        });
        await prisma.$disconnect();
        return { result: true, password: pw };
    }

    static async comparePassword({ nickname, password }) {
        const userData = await prisma.User.findUnique({
            where: {
                nickname,
            },
        });
        console.log(userData);
        const result = await bcrypt.compare(password, userData.password);

        if (!result) {
            await prisma.$disconnect();
            const message = "비밀번호가 일치하지 않습니다.";
            return { result: false, message };
        }
        await prisma.$disconnect();
        return "인증 성공!";
    }

    static async withdrawal({ nickname }) {
        await prisma.User.update({
            where: { nickname },
            data: { withdrawal: true },
        });
        await prisma.$disconnect();
        return "회원 탈퇴";
    }
    //유저 이미지 관련//
    static async getImage({ nickname }) {
        const image = await prisma.Profile.findUnique({
            where: { nickname },
            select: { profile_image: true },
        });
        await prisma.$disconnect();
        return image;
    }

    static async updateImage({ nickname, filename }) {
        const updatedImage = await prisma.Profile.update({
            where: { nickname },
            data: { profile_image: filename },
            select: { profile_image: true },
        });
        await prisma.$disconnect();
        return updatedImage;
    }

    static async deleteImage({ nickname }) {
        await prisma.Profile.update({
            where: { nickname },
            data: { profile_image: null },
        });
        await prisma.$disconnect();
        return { result: true, message: "삭제 됐습니다" };
    }
}

export default userService;
