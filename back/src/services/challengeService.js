import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// the abbreviation for challenge: chl
class challengeService {
    static async getchls() {
        const challenges = await prisma.Challenge.findMany({
            select: {
                id: true,
                title: true,
                start_date: true,
                due_date: true,
                _count: { select: { Challenger: true } },
            },
        });
        await prisma.$disconnect();
        return challenges;
    }

    static async findchl({ nickname, challengeId = null }) {
        let findChallenge;

        if (challengeId) {
            findChallenge = await prisma.Challenge.findUniqueOrThrow({
                where: { id: Number(challengeId) },
                include: { Challenger: { select: { nickname: true } } },
            });
        } else {
            findChallenge = await prisma.Challenger.findMany({
                where: { nickname },
                select: {
                    challenge_id: true,
                    Challenge: {
                        select: {
                            title: true,
                            start_date: true,
                            due_date: true,
                            _count: { select: { Challenger: true } },
                        },
                    },
                },
            });
        }
        await prisma.$disconnect();
        return findChallenge;
    }

    static async joinchl({ nickname, challengeId }) {
        let joinChallenge = await prisma.Challenger.findUnique({
            where: {
                challenge_id_nickname: {
                    challenge_id: Number(challengeId),
                    nickname,
                },
            },
        });

        if (!joinChallenge) {
            joinChallenge = await prisma.Challenger.create({
                data: { challenge_id: Number(challengeId), nickname },
            });
            await prisma.$disconnect();
            return joinChallenge;
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
        return "cancel";
    }

    static async addchl(input) {
        input.start_date = new Date(input.start_date);
        input.due_date = new Date(input.due_date);

        const newChallenge = await prisma.Challenge.create({ data: { ...input } });
        await prisma.$disconnect();
        return newChallenge;
    }

    static async updatechl(challengeId = null, input) {
        let updateChallenge;

        input.start_date = new Date(input.start_date);
        input.due_date = new Date(input.due_date);

        updateChallenge = await prisma.Challenge.update({
            where: { id: Number(challengeId) },
            data: { ...input },
        });

        await prisma.$disconnect();
        return updateChallenge;
    }

    static async deletechl(challengeId) {
        await prisma.Challenger.deleteMany({ where: { challenge_id: Number(challengeId) } });
        const deleteChallenge = await prisma.Challenge.delete({
            where: { id: Number(challengeId) },
        });

        await prisma.$disconnect();
        return deleteChallenge;
    }
}

export { challengeService };
