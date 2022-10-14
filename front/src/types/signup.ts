import { User } from "@/types/user";

export interface SignupForm {
    user_email: string;
    nickname: string;
    password: string;
    password_hint: string;
    token: string;
    age: string;
    region: string;
    gender: string;
    profile_image: string;
    introduce: string;
    ban: Boolean;
    withdrawal: Boolean;
    role: string;
    createdAt: string;
    updatedAt: string;
    [key: string]: any;
}

export interface SignupResult extends User {
    accessToken: string;
    refreshToken: string;
}
