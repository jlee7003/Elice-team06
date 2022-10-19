// import { atom, selector } from "recoil";
// // import { ChallengeBoardModel } from "@/types/ChallengeBoardModel";
// export interface ChallengeListModel {
//     id: string | null;
//     title: string | null;
//     due_date: string | number | Date | any;
//     start_date: string | number | Date | any;
//     level: string | null;
//     _count: [Challenger: number] | any;
// }
// export const ChallengeList = atom<ChallengeListModel | null>({
//     key: "ChallengeList",
//     default: null,
// });

import { atom, selector } from "recoil";
// import { ChallengeBoardModel } from "@/types/ChallengeBoardModel";
export interface ChallengeBoardModel {
    id: string | null;
    title: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    proposer: string | null;
    due_date: string | number | Date | any;
    start_date: string | number | Date | any;
    goal: string | null;
    level: string | null;
    description: string | null;
    Challenger: [nickname: string] | any;
}
export const ChallengeBoardWriter = atom<ChallengeBoardModel | null>({
    key: "ChallengeBoardWriter",
    default: null,
});
