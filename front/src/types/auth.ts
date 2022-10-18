import { User } from "./user";

interface token {
    accessToken: string;
    refreshToken: string;
}

export interface LoginData {
    id: string;
    password: string;
}

export type LoginResult = token & User;

export interface SignupData {
    email: string;
    nickname: string;
    introduce: string;
    password: string;
    id: string;
    age: string;
    region: string;
    gender: string;
}

export type SignupResult = token & User;

export interface RefreshResult {
    accessToken: string;
    nickname: string;
    Profile: [
        {
            introduce: string;
        }
    ];
}

export interface ChangePasswordData {
    nickname: string;
    password: string;
    id: string;
}

export interface ChangeMyInfoData {
    nickname: string;
    updateData: {
        age?: string;
        region?: string;
        gender?: string;
        profile_image?: string;
        introduce?: string;
    };
}
