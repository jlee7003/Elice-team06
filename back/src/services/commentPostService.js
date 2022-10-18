import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function pagination(data = [], start, end, count) {
    const item = [...data];
    const result = {};
    for (var i = start; i < end - start + 2; i++) {
        result[`${i}`] = item.slice(0, count);
        item.splice(0, count);
        if (item.length === 0) {
            break;
        }
    }
    return result;
}

class commentPostService {
    static async addComment({ boardId, nickname, description }) {
        const result = await prisma.CommentPost.create({
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
    static async getComments({ boardId, start, end, count }) {
        const allComments = await prisma.CommentPost.findMany({
            where: { post_id: Number(boardId) },
            take: count * (end - start + 1),
            skip: (start - 1) * count,
        });
        const result = pagination(allComments, start, end, count);
        return result;
    }
    static async getMyComments({ nickname }) {
        const result = await prisma.CommentPost.findMany({
            where: { author: nickname },
        });
        return result;
    }
    static async updateComment({ commentId, description }) {
        const result = await prisma.CommentPost.update({
            where: {
                id: Number(commentId),
            },
            data: { description },
        });
        return result;
    }
    static async removeComment({ commentId }) {
        await prisma.CommentPost.delete({
            where: { id: Number(commentId) },
        });
        return "댓글 삭제";
    }
}
export default commentPostService;
