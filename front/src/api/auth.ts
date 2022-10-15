import instance from "./index";
import { LoginFormData, LoginResult } from "@/types/auth";

export const login = async (loginData: LoginFormData) => {
    const response = await instance.post<LoginResult>("api/login", loginData);

    if (response.status !== 200) {
        return null;
    }

    return response.data;
};
