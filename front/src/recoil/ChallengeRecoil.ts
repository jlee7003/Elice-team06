import { atom } from "recoil";
import { ChallengeCardList } from "@/types/challenge";
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

export const ChallengeList = atom<ChallengeCardList>({
    key: "ChallengeList",
    default: [],
});

export interface Comments {
    [key: number]: { author: string; description: string; id: string };
}

export const commentState = atom<Comments>({
    key: "commentState",
    default: [],
});
