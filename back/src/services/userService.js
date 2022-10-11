import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import Token from "../models/token";
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
        try {
            if (isInvalidEmail(userData.user_email)) {
                return "적합한 이메일이 아닙니다";
            }
            const user_email = userData.user_email;
            const searchUser = await prisma.User.findUnique({ where: { user_email } });
            if (searchUser) {
                return "이미 존재하는 이메일입니다.";
            }
            const password = userData.password;
            const hash = await bcrypt.hash(password, 10);
            userData.password = hash;

            const newUser = await prisma.User.create({
                data: { ...userData },
            });

            return newUser;
        } catch (err) {
            throw new Error(err);
        }
    }

    static async loginUser({ user_email, password }) {
        if (isInvalidEmail(user_email)) {
            return "적합한 이메일이 아닙니다";
        }

        try {
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

            const result = await bcrypt.compare(password, userData.password);

            if (!result) {
                return "비밀번호가 일치하지 않습니다.";
            }

            const accessToken = sign({ userId: userData.user_email });
            let refreshToken = sign({}, "14d");

            Token.findOneAndDelete({ userId: userData.user_email }).exec(() => {
                Token.create({ userId: userData.user_email, token: refreshToken });
            });

            return { ok: true, accessToken, refreshToken };
        } catch (err) {
            throw new Error(err);
        }
    }

    static async logoutUser() {
        try {
            Token.removeToken();
        } catch (err) {
            throw new Error(err);
        }
    }

    static async changePassword({ user_email, password, password_hint }) {
        try {
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
        } catch (err) {
            throw new Error(err);
        }
    }

    static async getUser({ user_email }) {
        try {
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
                },
            });
            return userData;
        } catch (err) {
            throw new Error(err);
        }
    }

    static async updateUser({ user_email, nickname, introduce, age, region, gender }) {
        try {
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
                },
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    static async comparePassword({ user_email, password }) {
        try {
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
        } catch (err) {
            throw new Error(err);
        }
    }

    static async withdrawal({ user_email }) {
        try {
            await prisma.User.update({
                where: { user_email },
                data: { withdrawal: true },
            });
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default userService;
