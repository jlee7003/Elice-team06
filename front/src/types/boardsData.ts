export interface writeBoardData {
    title: string;
    description: string;
}

export type writeBoardResult = {
    id: number;
    title: string;
    description: string;
    author: string;
    view: string;
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
