import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class dataService {
    static async getdata(parameter) {
        let result;

        switch (parameter) {
            case "sealevel":
                result = await prisma.SeaLevelKorea.findMany();
                break;

            case "emission":
                BigInt.prototype.toJSON = function () {
                    const int = Number.parseInt(this.toString());
                    return int ?? this.toString();
                };
                result = await prisma.EmissionCO2.findMany();
                break;

            case "temperture":
                result = await prisma.Temperture.findMany();
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
