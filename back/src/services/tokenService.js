import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class Token {
    static async addToken(user_email, token) {
        const newToken = await prisma.User.create({ where: { user_email }, data: { token } });
        return newToken;
    }
    static async removeToken(token) {
        const checkloging = await prisma.User.findUnique({ where: { token } });
        console.log(checkloging);

        if (checkloging) {
            const removed = await prisma.User.update({ where: { token }, data: { token: null } });
            return removed;
        }

        return "500";
    }
    static async checkToken(token) {
        const checked = await prisma.User.findUnique({ where: { token } });
        return checked;
    }
}

export default Token;
