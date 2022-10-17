import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function chunk(data = [], start = 1, size = 1) {
    const items = [...data];
    let i = Number(start);
    const map = {};

    while (items.length) {
        map[i] = items.splice(0, size);
        i += 1;
    }
    return map;
}

class challengeService {
    // Challenge API
    static async getChallenges(pagination = { start: 1, end: 5, count: 8 }) {
        const { start, end, count } = pagination;
        let challenges = await prisma.Challenge.findMany({
            where: { due_date: { gte: new Date() } },
            skip: Number((start - 1) * count),
            take: Number((end - start + 1) * count),
            select: {
                id: true,
                title: true,
                start_date: true,
                due_date: true,
                level: true,
                _count: { select: { Challenger: true } },
            },
        });
        challenges = chunk(challenges, start, Number(count));
        await prisma.$disconnect();
        return challenges;
    }

    static async findChallenge({ nickname, challengeId = null }) {
        let findChallenges;

        if (challengeId) {
            findChallenges = await prisma.Challenge.findUniqueOrThrow({
                where: { id: Number(challengeId) },
                include: {
                    Challenger: { select: { nickname: true } },
                },
            });
        } else {
            findChallenges = await prisma.Challenger.findMany({
                where: { nickname },
                select: {
                    challenge_id: true,
                    Challenge: {
                        select: {
                            title: true,
                            start_date: true,
                            due_date: true,
                            level: true,
                            _count: { select: { Challenger: true } },
                        },
                    },
                },
            });
        }
        await prisma.$disconnect();
        return findChallenges;
    }

    static async addChallenge(input) {
        input.start_date = new Date(input.start_date);
        input.due_date = new Date(input.due_date);

        const newChallenge = await prisma.Challenge.create({ data: { ...input } });
        await prisma.$disconnect();
        return newChallenge;
    }

    static async updateChallenge(challengeId = null, input) {
        input.start_date = new Date(input.start_date);
        input.due_date = new Date(input.due_date);

        const upChallenge = await prisma.Challenge.update({
            where: { id: Number(challengeId) },
            data: { ...input },
        });

        await prisma.$disconnect();
        return upChallenge;
    }

    static async deleteChallenge(challengeId) {
        await prisma.Challenger.deleteMany({ where: { challenge_id: Number(challengeId) } });
        await prisma.ChallengeComment.deleteMany({ where: { challenge_id: Number(challengeId) } });
        await prisma.Challenge.delete({
            where: { id: Number(challengeId) },
        });

        await prisma.$disconnect();
        return { result: true, message: "삭제 됐습니다" };
    }
    // Challenge Join API
    static async joinChallenge({ nickname, challengeId }) {
        let Challenge = await prisma.Challenger.findUnique({
            where: {
                challenge_id_nickname: {
                    challenge_id: Number(challengeId),
                    nickname,
                },
            },
        });

        if (!Challenge) {
            Challenge = await prisma.Challenger.create({
                data: { challenge_id: Number(challengeId), nickname },
            });
            await prisma.$disconnect();
            return Challenge;
        }

        await prisma.Challenger.delete({
            where: {
                challenge_id_nickname: {
                    challenge_id: Number(challengeId),
                    nickname,
                },
            },
        });

        await prisma.$disconnect();
        return { result: true, message: "취소 됐습니다" };
    }
    //Challenge Comment API
    static async findComments({
        nickname,
        challengeId = null,
        pagination = { start: 1, end: 5, count: 4 },
    }) {
        let comments;
        const { start, end, count } = pagination;

        if (nickname && !challengeId) {
            comments = await prisma.ChallengeComment.findMany({
                where: { author: nickname },
                select: { id: true, challenge_id: true, description: true },
            });
        } else {
            comments = await prisma.ChallengeComment.findMany({
                where: { challenge_id: Number(challengeId) },
                skip: Number((start - 1) * count),
                take: Number((end - start + 1) * count),
                select: { id: true, author: true, description: true },
            });

            comments = chunk(comments, start, Number(count));
        }

        await prisma.$disconnect();
        return comments;
    }

    static async postComment(input) {
        const newComment = await prisma.ChallengeComment.create({ data: { ...input } });
        await prisma.$disconnect();
        return newComment;
    }

    static async updateComment(commentId = null, input) {
        const upComment = await prisma.ChallengeComment.update({
            where: { id: Number(commentId) },
            data: { ...input },
        });
        await prisma.$disconnect();
        return upComment;
    }

    static async deleteComment(commentId) {
        await prisma.ChallengeComment.delete({ where: { id: Number(commentId) } });
        await prisma.$disconnect();
        return { result: true, message: "삭제 됐습니다" };
    }
}

export { challengeService };
