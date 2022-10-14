import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class reportPostService {
    static async getReports({ postId }) {
        const reportData = await prisma.ReportPost.aggregate({
            where: { post_id: Number(postId) },
            _count: true,
        });
        return reportData;
    }
    static async report({ postId, nickname, description }) {
        const reportData = await prisma.ReportPost.findMany({
            where: { AND: [{ reporter: nickname }, { post_id: Number(postId) }] },
        });

        if (reportData.length !== 0) {
            await prisma.ReportPost.deleteMany({
                where: { reporter: nickname, post_id: Number(postId) },
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
                    connect: { id: Number(postId) },
                },
            },
        });
        return result;
    }
}

export default reportPostService;
