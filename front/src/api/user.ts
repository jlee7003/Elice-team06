import API from "./index";
import {
    ChangeMyInfoData,
    ChangePasswordData,
    LoginData,
    LoginResult,
    RefreshResult,
    SignupData,
    SignupResult,
} from "@/types/auth";
import { Info } from "@/recoil/user";

export const login = async (loginData: LoginData) => {
    const result = await API.post<LoginResult>(["user", "login"], loginData);

    return result;
};

export const signup = async (formData: SignupData) => {
    const result = await API.post<SignupResult>(["user", "signup"], formData);

    return result;
};

export const logout = async () => {
    const result = await API.put<any>(["user", "logout"], "");

    return result;
};

export const refresh = async () => {
    const result = await API.get<RefreshResult>(["user", "refresh"]);

    return result;
};

export const changePassword = async (changePasswordData: ChangePasswordData) => {
    const result = await API.put<any>(["user", "changePassword"], changePasswordData);

    return result;
};

// todo: add response type

export const myInfo = async () => {
    const result = await API.get<Info>(["user", "myInfo"]);

    return result;
};

export const changeMyInfo = async (changeMyInfoData: ChangeMyInfoData) => {
    const result = await API.put(["user", "myInfo"], changeMyInfoData);

    return result;
};

export const authPassword = async (password: string) => {
    const result = await API.post(["user", "myInfo", "auth"], password);

    return result;
};

export const withdrawal = async () => {
    const result = await API.put(["user", "withdrawal"], "");

    return result;
};
