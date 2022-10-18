import { User } from "./user";

// interface token {
//     accessToken: string;
//     refreshToken: string;
// }

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

// export interface ChangePasswordData {
//     nickname: string;
//     password: string;
//     id: string;
// }

// export interface ChangeMyInfoData {
//     nickname: string;
//     updateData: {
//         age?: string;
//         region?: string;
//         gender?: string;
//         profile_image?: string;
//         introduce?: string;
//     };
// }
