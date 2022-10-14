import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class boardService {
    static async addPost({ postData }) {
        const { nickname, title, description } = postData;

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

        return result;
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
            if (allPosts.length === 0) {
                break;
            }
        }
        return result;
    }
    static async getPost({ postId }) {
        const postData = await prisma.Board.findUnique({
            where: { id: postId },
        });
        return postData;
    }
    static async getMyPost({ nickname }) {
        const postData = await prisma.Board.findMany({
            where: { author: nickname },
        });
        return postData;
    }
    static async getLikePost({ nickname }) {
        const postData = await prisma.User.findUnique({
            where: { nickname },
            select: {
                VotePost: true,
            },
        });
        return postData;
    }
    static async updatePost({ postId, title, description }) {
        const postUpdate = await prisma.Board.update({
            where: { id: Number(postId) },
            data: { title, description },
        });
        return postUpdate;
    }
    static async deletePost({ postId }) {
        const postDelete = await prisma.Board.delete({ where: { id: Number(postId) } });
        return postDelete;
    }
}

export default boardService;
