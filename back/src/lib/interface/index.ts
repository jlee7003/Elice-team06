import { Types } from "mongoose";

export interface UserInterface {
    userID: string;
    name: string;
    email: string;
    password: string;
    tags?: Types.ObjectId;
    posts?: Types.ObjectId;
    comments?: Types.ObjectId;
}

export interface Token {
    token: string;
    userID: string;
}
