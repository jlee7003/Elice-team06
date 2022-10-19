import { atom, selector } from "recoil";
import { ChallengeCardList } from "@/types/challenge";

export const ChallengeList = atom<ChallengeCardList>({
    key: "ChallengeList",
    default: [],
});
