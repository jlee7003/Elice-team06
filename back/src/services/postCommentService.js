import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class postCommentService {
    static async addComment({ postId, user_email, description }) {
        const result = await prisma.PostComment.create({
            data: {
                description,
                author: {
                    connect: { user_email },
                },
                post: {
                    connect: { id: postId },
                },
            },
        });
        return result;
    }
}
export default postCommentService;
