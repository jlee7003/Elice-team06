import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class Token {
    static async addToken(nickname, token) {
        const newToken = await prisma.User.create({ where: { nickname }, data: { token } });
        await prisma.$disconnect();
        return newToken;
    }
    static async removeToken(token) {
        const checkloging = await prisma.User.findUnique({ where: { token } });

        if (checkloging) {
            const removed = await prisma.User.update({ where: { token }, data: { token: null } });
            await prisma.$disconnect();
            return removed;
        }
        const message = "중복 로그인";
        await prisma.$disconnect();
        return { result: false, message };
    }
    static async checkToken(token) {
        const checked = await prisma.User.findUnique({ where: { token } });
        await prisma.$disconnect();
        return checked;
    }
}

export default Token;
