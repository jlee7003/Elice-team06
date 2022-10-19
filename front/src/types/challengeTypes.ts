export interface challengeData {
    title: string;
    description: string;
    goal: string;
    start_date: string;
    due_date: string;
}

export type challengeResult = {
    id: number;
    title: string;
    description: string;
    goal: string;
    level: string;
    start_date: string;
    due_date: string;
    proposer: string;
    createdAt: string;
    updatedAt: string;
};
export interface addCommentData {
    description: string;
}

export type addCommentResult = {
    id: number;
    challenge_id: string;
    author: string;
    description: string;
    createdAt: string;
    updatedAt: string;
};
export type getCommentResult = {
    id: number;
    author: string;
    description: string;
};

export interface ChallengeJoinResult {
    challenge_id: string;
    nickname: string;
}
