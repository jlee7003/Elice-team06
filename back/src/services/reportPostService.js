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
    static async report({ postId, user_email, description }) {
        const reportData = await prisma.ReportPost.findMany({
            where: { AND: [{ reporter_id: user_email }, { post_id: Number(postId) }] },
        });

        if (reportData.length !== 0) {
            await prisma.ReportPost.deleteMany({
                where: { reporter_id: user_email, post_id: Number(postId) },
            });
            return "신고 취소";
        }

        const result = await prisma.ReportPost.create({
            data: {
                description,
                reporter: {
                    connect: { user_email },
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
