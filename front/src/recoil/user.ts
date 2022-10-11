import { atom, selector, selectorFamily } from "recoil";
import User from "@/types/user";
import LoginData from "@/types/loginData";
import Api from "@/api/.";

const userState = atom<User>({
    key: "userAtom",
    default: {
        accessToken: "",
        nickname: "",
        introduce: "",
    },
});

export default userState;
