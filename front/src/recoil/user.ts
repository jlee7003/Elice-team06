import { atom } from "recoil";
import { User } from "@/types/user";

const userState = atom<User | null>({
    key: "userState",
    default: null,
});

export interface Info {
    age: string | null;
    gender: string | null;
    introduce: string;
    nickname: string;
    profile_image: null;
    region: string;
}
export const userInfo = atom<Info | null>({
    key: "userInfo",
    default: null,
});

export default userState;
