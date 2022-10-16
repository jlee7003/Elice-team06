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

export const login = async (loginData: LoginData) => {
    const result = await API.post<LoginResult>(["api", "login"], loginData);

    return result;
};

export const signup = async (formData: SignupData) => {
    const result = await API.post<SignupResult>(["api", "signup"], formData);

    return result;
};

export const logout = async () => {
    const result = await API.post<any>(["api", "logout"], "");

    return result;
};

export const refresh = async () => {
    const result = await API.post<RefreshResult>(["api", "refresh"], "");

    return result;
};

export const changePassword = async (changePasswordData: ChangePasswordData) => {
    const result = await API.put<any>(["api", "changePassword"], changePasswordData);

    return result;
};

// todo: add response type

export const myInfo = async () => {
    const result = await API.get(["api", "myInfo"]);

    return result;
};

export const changeMyInfo = async (changeMyInfoData: ChangeMyInfoData) => {
    const result = await API.put(["api", "myInfo"], changeMyInfoData);

    return result;
};

export const authPassword = async (password: string) => {
    const result = await API.post(["api", "myInfo", "auth"], password);

    return result;
};

export const withdrawal = async () => {
    const result = await API.put(["api", "myInfo", "withdrawal"], "");

    return result;
};
