import { atom, selector, selectorFamily } from "recoil";
import User from "@/types/user";
import LoginData from "@/types/loginData";
import Api from "@/api/.";

export const login = atom<boolean>({
    key: "login",
    default: false,
});

export const userAtom = atom<User>({
    key: "userAtom",
    default: {
        accessToken: "",
        nickname: "",
        introduce: "",
    },
});
