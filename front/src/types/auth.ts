import { User } from "./user";

export interface LoginFormData {
    email: string;
    password: string;
    [key: string]: any;
}

export interface LoginResult extends User {
    accessToken: string;
    refreshToken: string;
}

export interface SignupFormData {
    user_email: string;
    nickname: string;
    password: string;
    password_hint: string;
    // token: string;
    age: string;
    region: string;
    gender: string;

    // profile_image?: string;
    // introduce?: string;
    // ban?: boolean;
    // withdrawal?: boolean;
    // role?: string;
    // createdAt?: string;
    // updatedAt?: string;
    [key: string]: any;
}

export interface SignupResult extends User {
    accessToken: string;
    refreshToken: string;
}
