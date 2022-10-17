import { Challenge } from "@/types/challenge";
import API from "./index";

export const getAllChallenges = async () => {
    const result = await API.get(["api", "challenges"]);

    return result;
};

export const getMyChallenges = async () => {
    const result = await API.get(["api", "mychallenges"]);

    return result;
};

export const getChallenge = async (ID: string) => {
    const result = await API.get(["api", "challenge", ID]);

    return result;
};

// todo: add parameter
export const addChallenge = async (input: Challenge) => {
    const result = await API.post(["api", "challenge"], input);

    return result;
};

export const editChallenge = async (ID: string, input: Challenge) => {
    const result = await API.put(["api", "challenge", ID], input);

    return result;
};

export const removeChallenge = async (ID: string) => {
    const result = await API.delete(["api", "challenge", ID]);

    return result;
};

export const joinChallenge = async (ID: string) => {
    const result = await API.post(["api", "challenge", ID, "join"], "");

    return result;
};

export const getMyCommentsInChallenge = async () => {
    const result = await API.get(["api", "mycomments"]);

    return result;
};

export const getCommentsInChallenge = async (ID: string) => {
    const result = await API.get(["api", ID, "comment"]);

    return result;
};

export const addCommentInChallenge = async (ID: string, comment: string) => {
    const result = await API.post(["api", "challenge", ID, "comment"], comment);

    return result;
};

export const editCommentInChallenge = async (ID: string, comment: string) => {
    const result = await API.put(["api", "challenge", ID, "comment"], comment);

    return result;
};

export const removeCommentInChallenge = async (ID: string) => {
    const result = await API.delete(["api", "challenge", ID, "comment"]);

    return result;
};
