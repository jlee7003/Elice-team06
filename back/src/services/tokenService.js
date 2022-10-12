import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class Token {
    static async addToken(user_email, token) {
        const newToken = await prisma.User.create({ where: { user_email }, data: { token } });
        return newToken;
    }
    static async removeToken(token) {
        const removed = await prisma.User.update({ where: { token }, token: null });
        return removed;
    }
    static async checkToken(token) {
        const checked = await prisma.User.findUnique({ where: { token } });
        return checked;
    }
}

export default Token;
