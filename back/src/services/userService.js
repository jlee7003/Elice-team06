import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import Token from "../services/tokenService";
import { generateToken } from "../authentication/jwt-util";

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
            return "적합한 이메일이 아닙니다";
        }

        //이메일 중복 확인
        const email = userData.email;
        const searchUser = await prisma.User.findUnique({ where: { email } });

        if (searchUser) {
            return null;
        }

        //닉네임 중복 확인
        const nickname = userData.nickname;
        const searchNickname = await prisma.User.findUnique({ where: { nickname } });
        if (searchNickname) {
            return null;
        }

        //비밀번호 hash 처리
        const password = userData.password;
        const hash = await bcrypt.hash(password, 10);
        userData.password = hash;

        const { age, region, gender, profile_image } = userData;
        const { password_hint, introduce } = userData;

        const newUser = await prisma.User.create({
            data: {
                email,
                nickname,
                password: hash,
                password_hint,
                Profile: { create: { age, region, gender, profile_image, introduce } },
            },
        });

        return newUser;
    }

    static async loginUser({ email, password }) {
        //이메일 형식이 맞는지 검사
        if (isInvalidEmail(email)) {
            return null;
        }
        //유저 존재 확인
        console.log(email);
        const test = await prisma.User.findUnique({ where: email });
        console.log(test);
        const userData = await prisma.User.findUnique({
            where: {
                email,
            },
            include: {
                Profile: { select: { introduce: true, nickname: true } },
            },
        });

        if (userData === null) {
            return null;
        }
        //유저 밴, 탈퇴 확인
        if (userData.ban === true || userData.withdrawal === true) {
            return null;
        }

        //비밀번호 일치 확인
        const result = await bcrypt.compare(password, userData.password);

        if (!result) {
            return null;
        }
        const { introduce, nickname } = userData.Profile[0];

        const accessToken = generateToken({ nickname: userData.nickname }, "accessToken");
        let refreshToken = generateToken({}, "refreshToken");
        await prisma.User.update({ where: { nickname }, data: { token: null } });
        await prisma.User.update({ where: { nickname }, data: { token: refreshToken } });

        return { nickname, introduce, accessToken, refreshToken };
    }
    static async logoutUser(token) {
        const value = Token.removeToken(token);
        return value;
    }

    static async changePassword({ nickname, password, password_hint }) {
        const userData = await prisma.User.findUnique({
            where: {
                nickname,
            },
        });

        const result = await bcrypt.compare(password, userData.password);
        if (!result) {
            return "비밀번호가 일치하지 않습니다.";
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.update({
            where: {
                nickname,
            },
            data: {
                password: hashedPassword,
                password_hint,
            },
        });
    }
    static async getUser({ refreshtoken }) {
        const userData = await prisma.User.findUnique({
            where: {
                token: refreshtoken,
            },
            select: {
                nickname: true,
                introduce: true,
            },
        });
        return userData;
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
                return "이미 존재하는 닉네임입니다.";
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

            return [updateInfo, { accessToken: null }];
        }
        const { age, region, gender, profile_image, introduce } = updateData;
        const updateInfo = await prisma.Profile.update({
            where: {
                nickname,
            },
            data: { age, region, gender, profile_image, introduce },
        });
        return updateInfo;
    }

    static async comparePassword({ nickname, password }) {
        const userData = await prisma.User.findUnique({
            where: {
                nickname,
            },
        });
        const result = await bcrypt.compare(password, userData.password);

        if (!result) {
            return "비밀번호가 일치하지 않습니다.";
        }
        return "인증 성공!";
    }

    static async withdrawal({ nickname }) {
        await prisma.User.update({
            where: { nickname },
            data: { withdrawal: true },
        });
    }
}

export default userService;
