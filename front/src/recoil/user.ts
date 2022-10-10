import { atom, selector, selectorFamily } from "recoil";
import User from "@/types/user";
import LoginData from "@/types/loginData";
import Api from "@/api/.";

const login = atom<boolean>({
    key: "login",
    default: false,
});

const userAtom = atom<User>({
    key: "userAtom",
    default: {
        accessToken: "",
        nickname: "",
        introduce: "",
    },
});

// const userSelector = selectorFamily<User | null, LoginData>({
//     key: "userSelector",
//     get: (formData) => async () => {
//         const API = Api.getInstance();

//         if (formData.email === "" && formData.password === "") {
//             return null;
//         }

//         const res = await API.post<User>(["api", "login"], formData);
//         return res.data;
//     },
// });

const userSelector = selectorFamily<User | null, LoginData>({
    key: "userSelector",
    get:
        () =>
        ({ get }) => {
            return get(userAtom);
        },
    set:
        (formData) =>
        async ({ set, get }) => {
            const API = Api.getInstance();

            if (formData.email === "" && formData.password === "") {
                return null;
            }

            const res = await API.post<User>(["api", "login"], formData);

            set(userAtom, res.data);
            set(login, true);
        },
});
export default userSelector;
