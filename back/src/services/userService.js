import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

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
}

export default userService;
