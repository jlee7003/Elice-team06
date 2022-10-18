import API from "./index";
import {
    challengeData,
    challengeResult,
    addCommentData,
    addCommentResult,
    getCommentResult,
} from "@/types/challengesData";
import { Comments } from "@/recoil/commentState";

export const challenge = async (challengeData: challengeData) => {
    const result = await API.post<challengeResult>(["challenge"], challengeData);
    return result;
};
export const addComment = async (challengeData: addCommentData, challengeId: number) => {
    // challenge
    const result = await API.post<addCommentResult>(
        ["challenge", challengeId.toString(), "comment"],
        challengeData
    );
    return result;
};

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
