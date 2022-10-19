import { atom, selector } from "recoil";
// import { ChallengeBoardModel } from "@/types/ChallengeBoardModel";
export interface ChallengeBoardModel {
    id: string | null;
    title: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    proposer: string | null;
    due_date: string | null;
    start_date: string | null;
    goal: string | null;
    level: string | null;
    description: string | null;
    Challenger: [nickname: string] | any;
}
export const ChallengeBoardWriter = atom<ChallengeBoardModel | null>({
    key: "ChallengeBoardWriter",
    default: null,
});
