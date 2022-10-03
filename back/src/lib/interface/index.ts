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

export interface PostInterface {
    postID: string;
    author: Types.ObjectId;
    anonymous: boolean;
    title: string;
    content: string;
    commemts?: Types.ObjectId;
    tags: Types.ObjectId;
    expiration: string;
}

export interface CommentInterface {
    author: Types.ObjectId;
    content: string;
}

export interface TagInterface {
    owner: Types.ObjectId;
    name: string;
}

export interface Token {
    token: string;
    userID: string;
}
