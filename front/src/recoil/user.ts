import { atom, selector, selectorFamily } from "recoil";
import { User } from "@/types/user";
import { LoginForm, LoginResult } from "@/types/login";
import Api from "@/api/.";

// export const loginState = atom<LoginForm | null>({
//     key: "sample",
//     default: null,
// });

// export const userState = selector<Promise<User | null> | LoginForm>({
//     key: "loginState",
//     get: async ({ get }) => {
//         const loginData = get(loginState);

//         if (loginData === null) {
//             return;
//         }

//         const API = Api.getInstance();

//         const res = await API.post<LoginForm, LoginResult>(["api", "login"], loginData);

//         if (res.status !== 200) {
//             return null;
//         }

//         const result = res.data;

//         sessionStorage.setItem("refresh", result.refreshToken);
//         API.setToken(result.accessToken);

//         const user: User = {
//             nickname: result.nickname,
//             introduce: result.introduce,
//         };

//         return user;
//     },
// });

const userState = atom<User | null>({
    key: "userState",
    default: null,
});

export default userState;
