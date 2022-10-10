import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// the abbreviation for challenge: chl
class challengeService {
    static async getchls() {
        const challenges = await prisma.Challenge.findMany();
        await prisma.$disconnect();
        return challenges;
    }

    static async findchl({ user_email, challengeId = null }) {
        let findChallenge;

        if (challengeId) {
            findChallenge = await prisma.Challenge.findUniqueOrThrow({
                where: { id: Number(challengeId) },
            });
        } else {
            findChallenge = await prisma.Challenge.findMany({
                where: { proposer: user_email },
            });
        }
        await prisma.$disconnect();
        return findChallenge;
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

    static async deletechl(challengeId = null) {
        const deleteChallenge = await prisma.Challenge.delete({
            where: { id: Number(challengeId) },
        });

        await prisma.$disconnect();
        return deleteChallenge;
    }
}

export { challengeService };
