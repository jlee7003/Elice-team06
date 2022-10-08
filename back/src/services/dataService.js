import { PrismaClient } from "@prisma/client";

class dataService {
    static async getdata(parameter) {
        const prisma = new PrismaClient();

        let result;
        switch (parameter) {
            case "sealevel":
                result = await prisma.sealevelkorea.findMany();
                break;
            case "emission":
                BigInt.prototype.toJSON = function () {
                    const int = Number.parseInt(this.toString());
                    return int ?? this.toString();
                };
                result = await prisma.emissionco2.findMany();
                break;
            case "temperture":
                result = await prisma.temperture.findMany();
                break;
            default:
                await prisma.$disconnect();
                throw new Error("잘못된 접근입니다.");
        }
        await prisma.$disconnect();
        return result;
    }
}

export { dataService };
