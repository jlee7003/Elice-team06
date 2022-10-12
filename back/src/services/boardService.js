import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class boardService {
    static async addPost({ postData, user_email }) {
        try {
            const { title, description } = postData;

            const result = await prisma.Board.create({
                data: {
                    title,
                    description,
                    author: {
                        connect: {
                            user_email,
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
        return allPosts; //==>(보완 예정) 되긴되는데 post가 많아지면 아주 비효율적인 방법. skip하는 과정에서 앞에꺼 다 읽음
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
