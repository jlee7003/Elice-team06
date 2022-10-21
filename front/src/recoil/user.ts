import { atom } from "recoil";
import { User } from "@/types/user";

export const userState = atom<User | null>({
    key: "userState",
    default: null,
});

export interface Info {
    age: string;
    gender: string;
    introduce: string;
    nickname: string;
    profile_image: null;
    region: string;
}

export const userInfoData = atom<Info | null>({
    key: "userInfo",
    default: null,
});
