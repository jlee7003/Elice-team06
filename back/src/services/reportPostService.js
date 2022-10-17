import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class reportPostService {
    static async getReports({ boardId }) {
        const reportData = await prisma.ReportPost.aggregate({
            where: { post_id: Number(boardId) },
            _count: true,
        });
        return reportData;
    }
    static async report({ boardId, nickname, description }) {
        const reportData = await prisma.ReportPost.findMany({
            where: { AND: [{ reporter: nickname }, { post_id: Number(boardId) }] },
        });

        if (reportData.length !== 0) {
            await prisma.ReportPost.deleteMany({
                where: { reporter: nickname, post_id: Number(boardId) },
            });
            return "신고 취소";
        }

        const result = await prisma.ReportPost.create({
            data: {
                description,
                user: {
                    connect: { nickname },
                },
                post: {
                    connect: { id: Number(boardId) },
                },
            },
        });
        return result;
    }
}

export default reportPostService;
