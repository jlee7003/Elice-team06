import API from "./index";
import { Comments } from "@/recoil/ChallengeRecoil";
import { ChallengeCardList } from "@/types/challenge";

export const getComment = async (
    challengeId: number,
    start: number,
    end: number,
    count: number
) => {
    const result = await API.get<Comments>([
        "challenge",
        challengeId.toString(),
        `comment?start=${start}&end=${end}&count=${count}`,
    ]);
    return result;
};

export const getChallengeList = async (start: number, end: number, count: number) => {
    const result = await API.get<ChallengeCardList>([
        "challenge",
        `all?start=${start}&end=${end}&count=${count}`,
    ]);
    return result;
};
