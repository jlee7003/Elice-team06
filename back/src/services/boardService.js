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

class boardService {
    static async addPost({ nickname, postData }) {
        const { title, description } = postData;

        const result = await prisma.Board.create({
            data: {
                title,
                description,
                user: {
                    connect: {
                        nickname,
                    },
                },
            },
        });
        await prisma.$disconnect();
        return result;
    }
    static async viewCount({ postId }) {
        const addView = await prisma.Board.update({
            where: { id: Number(postId) },
            data: {
                view: {
                    increment: 1,
                },
            },
        });
        await prisma.$disconnect();
        return addView;
    }
    static async getPosts({ start, end, count }) {
        const allPosts = await prisma.Board.findMany({
            take: count * (end - start + 1),
            skip: (start - 1) * count,
        });
        const result = pagination(allPosts, start, end, count);
        await prisma.$disconnect();
        return result;
    }
    static async getPost({ postId }) {
        const postData = await prisma.Board.findUnique({
            where: { id: Number(postId) },
        });
        await prisma.$disconnect();
        return postData;
    }
    static async getMyPost({ nickname }) {
        const postData = await prisma.Board.findMany({
            where: { author: nickname },
        });
        await prisma.$disconnect();
        return postData;
    }
    static async getLikePost({ nickname, start, end, count }) {
        const postData = await prisma.User.findUnique({
            where: { nickname },
            select: {
                VotePost: true,
            },
        });
        const result = pagination(postData.VotePost, start, end, count);

        await prisma.$disconnect();
        return result;
    }
    static async updatePost({ postId, title, description }) {
        const postUpdate = await prisma.Board.update({
            where: { id: Number(postId) },
            data: { title, description },
        });
        await prisma.$disconnect();
        return postUpdate;
    }
    static async deletePost({ postId }) {
        await prisma.VotePost.deleteMany({
            where: { post_id: Number(postId) },
        });
        await prisma.ReportPost.deleteMany({
            where: { post_id: Number(postId) },
        });
        await prisma.commentPost.deleteMany({
            where: { post_id: Number(postId) },
        });
        await prisma.Board.delete({
            where: { id: Number(postId) },
        });
        await prisma.$disconnect();
        return "삭제되었습니다.";
    }
}

export default boardService;
