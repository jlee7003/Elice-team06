import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class votePostService {
    static async getVotes({ postId }) {
        const voteData = await prisma.VotePost.aggregate({
            where: { post_id: Number(postId) },
            _count: true,
        });
        const result = { count: voteData._count };
        return result;
    }
    static async vote({ postId, nickname }) {
        const voteData = await prisma.VotePost.findMany({
            where: { AND: [{ voter: nickname }, { post_id: Number(postId) }] },
        });

        if (voteData.length !== 0) {
            await prisma.VotePost.deleteMany({
                where: { voter: nickname, post_id: Number(postId) },
            });
            return "투표 취소";
        }

        const result = await prisma.VotePost.create({
            data: {
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

export default votePostService;
