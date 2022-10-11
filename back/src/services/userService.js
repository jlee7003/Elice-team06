import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import Token from "../services/tokenService";
import { sign } from "../authentication/jwt-util";

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
        if (isInvalidEmail(userData.user_email)) {
            return "적합한 이메일이 아닙니다";
        }
        const user_email = userData.user_email;
        const searchUser = await prisma.User.findUnique({ where: { user_email } });

        if (searchUser) {
            return "이미 존재하는 이메일입니다.";
        }
        const nickname = userData.nickname;
        const searchNickname = await prisma.User.findUnique({ where: { nickname } });
        if (searchNickname) {
            return "이미 존재하는 닉네임입니다.";
        }
        const password = userData.password;
        const hash = await bcrypt.hash(password, 10);
        userData.password = hash;

        const newUser = await prisma.User.create({
            data: { ...userData },
        });

        return newUser;
    }

    static async loginUser({ user_email, password }) {
        if (isInvalidEmail(user_email)) {
            return "적합한 이메일이 아닙니다";
        }

        const userData = await prisma.User.findUnique({
            where: {
                user_email,
            },
        });
        if (userData === null) {
            return "user가 존재하지 않습니다.";
        }
        if (userData.ban === true || userData.withdrawal === true) {
            return "유효하지 않은 유저입니다.";
        }
        const { nickname, introduce } = userData;

        const result = await bcrypt.compare(password, userData.password);

        if (!result) {
            return "비밀번호가 일치하지 않습니다.";
        }

        const accessToken = sign({ userId: userData.user_email });
        let refreshToken = sign({}, "14d");

        await prisma.User.update({ where: { user_email }, data: { token: refreshToken } });

        return { nickname, introduce, accessToken, refreshToken };
    }
    static async logoutUser(token) {
        Token.removeToken(token);
        return "로그아웃";
    }

    static async changePassword({ user_email, password, password_hint }) {
        const userData = await prisma.User.findUnique({
            where: {
                user_email,
            },
        });

        const result = await bcrypt.compare(password, userData.password);
        if (!result) {
            return "비밀번호가 일치하지 않습니다.";
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.update({
            where: {
                user_email,
            },
            data: {
                password: hashedPassword,
                password_hint,
            },
        });
    }

    static async getUser({ user_email }) {
        const userData = await prisma.User.findUnique({
            where: {
                user_email,
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

    static async updateUser({
        user_email,
        nickname,
        introduce,
        age,
        region,
        gender,
        profile_image,
    }) {
        const searchNickname = await prisma.User.findUnique({ where: { nickname } });
        if (searchNickname) {
            return "이미 존재하는 닉네임입니다.";
        }
        await prisma.User.update({
            where: {
                user_email,
            },
            data: {
                nickname,
                introduce,
                age,
                region,
                gender,
                profile_image,
            },
        });
    }

    static async comparePassword({ user_email, password }) {
        const userData = await prisma.User.findUnique({
            where: {
                user_email,
            },
        });
        const result = await bcrypt.compare(password, userData.password);

        if (!result) {
            return "비밀번호가 일치하지 않습니다.";
        }
        return "인증 성공!";
    }

    static async withdrawal({ user_email }) {
        await prisma.User.update({
            where: { user_email },
            data: { withdrawal: true },
        });
    }
}

export default userService;
