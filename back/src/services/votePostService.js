import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class votePostService {
    static async getVotes({ boardId }) {
        const voteData = await prisma.VotePost.aggregate({
            where: { post_id: Number(boardId) },
            _count: true,
        });
        const result = { count: voteData._count };
        await prisma.$disconnect();
        return result;
    }
    static async vote({ boardId, nickname }) {
        const voteData = await prisma.VotePost.findMany({
            where: { AND: [{ voter: nickname }, { post_id: Number(boardId) }] },
        });

        if (voteData.length !== 0) {
            await prisma.VotePost.deleteMany({
                where: { voter: nickname, post_id: Number(boardId) },
            });
            await prisma.$disconnect();
            return "투표 취소";
        }

        const result = await prisma.VotePost.create({
            data: {
                user: {
                    connect: { nickname },
                },
                post: {
                    connect: { id: Number(boardId) },
                },
            },
        });
        await prisma.$disconnect();
        return result;
    }
}

export default votePostService;
