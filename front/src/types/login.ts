import { User } from "@/types/user";

export interface LoginForm {
    user_email: string;
    password: string;
    [key: string]: any;
}

export interface LoginResult extends User {
    accessToken: string;
    refreshToken: string;
}
