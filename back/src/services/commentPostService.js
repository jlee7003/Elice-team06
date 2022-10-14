import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class commentPostService {
    static async addComment({ postId, user_email, description }) {
        const result = await prisma.CommentPost.create({
            data: {
                description,
                author: {
                    connect: { user_email },
                },
                post: {
                    connect: { id: Number(postId) },
                },
            },
        });
        return result;
    }
    static async getComments({ postId }) {
        const result = await prisma.CommentPost.findMany({
            where: { post_id: postId },
            select: { author_email: true, description: true },
        });
        return result;
    }
    static async getMyComments({ user_email }) {
        const result = await prisma.CommentPost.findMany({
            where: { author_email: user_email },
        });
        return result;
    }
    static async updateComment({ commentId, updateData }) {
        const result = await prisma.CommentPost.update({
            where: {
                id: commentId,
            },
            data: { ...updateData },
        });
        return result;
    }
    static async removeComment({ commentId }) {
        const result = await prisma.CommentPost.delete({
            where: { id: commentId },
        });
        return result;
    }
}
export default commentPostService;
