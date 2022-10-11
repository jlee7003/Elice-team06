import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class postVoteService {
    static async addVote({ postId, user_email }) {
        const voteData = await prisma.VotePost.create({
            data: {
                voter_id: user_email,
                post_id: postId,
            },
        });
        return voteData;
    }
}

export default postVoteService;
