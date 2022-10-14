import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class boardService {
    static async addPost({ postData }) {
        try {
            const { title, description, nickname } = postData;

            const result = await prisma.Board.create({
                data: {
                    title,
                    description,
                    author: {
                        connect: {
                            nickname,
                        },
                    },
                },
            });
            return result;
        } catch (err) {
            throw new Error(err);
        }
    }
    static async viewCount({ postId }) {
        const addView = await prisma.Board.update({
            where: { id: postId },
            data: {
                view: {
                    increment: 1,
                },
            },
        });
        return addView;
    }
    static async getPosts({ start, end, post }) {
        const allPosts = await prisma.Board.findMany({
            take: post * (end - start + 1),
            skip: (start - 1) * post,
        });
        const result = {};
        for (var i = start; i < end - start + 2; i++) {
            result[`${i}`] = allPosts.slice(0, post);
            allPosts.splice(0, post);
        }
        return result;
    }
    static async getPost({ postId }) {
        const postData = await prisma.Board.findUnique({
            where: { id: postId },
        });
        return postData;
    }
    static async getMyPost({ user_email }) {
        const postData = await prisma.Board.findMany({
            where: { author_email: user_email },
        });
        return postData;
    }
    static async getLikePost({ user_email }) {
        const postData = await prisma.User.findUnique({
            where: { user_email },
            select: {
                VotePost: true,
            },
        });
        return postData;
    }
    static async updatePost({ postId, title, description }) {
        const postUpdate = await prisma.Board.update({
            where: { id: postId },
            data: { title, description },
        });
        return postUpdate;
    }
    static async deletePost({ postId }) {
        const postDelete = await prisma.Board.delete({ where: { id: postId } });
        return postDelete;
    }
}

export default boardService;
