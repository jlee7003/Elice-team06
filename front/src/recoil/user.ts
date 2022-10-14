import { atom, selector, selectorFamily, noWait, atomFamily } from "recoil";
import { User } from "@/types/user";
import { LoginForm, LoginResult } from "@/types/login";
import { AxiosResponse } from "axios";
import Api from "@/api/.";

const userState = atom<User | null>({
    key: "userState",
    default: null,
});

export default userState;

// export const loginState = atom<LoginForm | null>({
//     key: "sample",
//     default: null,
// });

// const sampleAtom = atomFamily<AxiosResponse<LoginResult, any>, LoginForm>({
//     key: "sampleAtom",
//     default: (loginData) => {
//         const API = Api.getInstance();

//         return API.post<LoginForm, LoginResult>(["api", "login"], loginData);
//     },
// });

// export const userStateSample = selector({
//     key: "loginState",
//     get: async ({ get }) => {
//         const loginData = get(loginState);

//         if (loginData === null) {
//             return;
//         }

//         const API = Api.getInstance();

//         // const res = await API.post<LoginForm, LoginResult>(["api", "login"], loginData);
//         const loadable = get(noWait<AxiosResponse<LoginResult, any>>(sampleAtom(loginData)));

//         if (loadable.state === "hasError") {
//             return null;
//         }

//         if (loadable.state === "hasValue") {
//             // const user: User = {
//             //         nickname: loadable.contents.nickname,
//             //         introduce: loadable.contents.introduce,
//             // };

//             return loadable.contents;
//         }
//         // if (res.status !== 200) {
//         //     return null;
//         // }

//         // const result = res.data;

//         // sessionStorage.setItem("refresh", result.refreshToken);
//         // API.setToken(result.accessToken);

//         // const user: User = {
//         //     nickname: result.nickname,
//         //     introduce: result.introduce,
//         // };

//         // return user;
//     },
// });
