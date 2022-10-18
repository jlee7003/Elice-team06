import API from "./index";
import { challengeData, challengeResult } from "@/types/challengesData";

export const challenge = async (challengeData: challengeData) => {
    const result = await API.post<challengeResult>(["challenge"], challengeData);
    return result;
};
