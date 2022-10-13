import axios, { AxiosInstance } from "axios";
import { User } from "@/types/user";

class Api {
    private static instance: Api;
    private axiosInstance: AxiosInstance;

    private constructor() {
        this.axiosInstance = axios.create({
            baseURL: "http://" + window.location.hostname + ":" + "3001" + "/",
        });
    }

    public static getInstance() {
        if (Api.instance == null) {
            Api.instance = new Api();
        }

        return Api.instance;
    }

    setToken(accessToken: string) {
        this.axiosInstance.defaults.headers.common["Authorization"] = accessToken;
        this.axiosInstance.defaults.headers.common["refreshToken"] =
            sessionStorage.getItem("refresh") ?? "";
    }

    async getToken() {
        const API = Api.getInstance();

        this.setToken("Bearer refreshed");

        const result = await this.post<string, { accessToken: string } & User>(
            ["api", "refresh"],
            "refresh"
        );

        if (result.status !== 200) {
            return null;
        }

        this.setToken(result.data.accessToken);

        return {
            nickname: result.data.nickname,
            introduce: result.data.introduce,
        };
    }

    async resetToken() {
        sessionStorage.clear();

        this.axiosInstance.defaults.headers.common["Authorization"] = "";
        this.axiosInstance.defaults.headers.common["refresh"] = "";

        const res = await this.post<string, string>(["api", "logout"], "");
    }

    async get<T>(params: string[]) {
        const url = params.join("/");

        return this.axiosInstance.get<T>(url);
    }

    async post<P, T>(params: string[], data: P) {
        const url = params.join("/");

        return this.axiosInstance.post<T>(url, data);
    }

    async put<P, T>(params: string[], data: P) {
        const url = params.join("/");

        return this.axiosInstance.put<T>(url, data);
    }

    async delete<T>(params: string[]) {
        const url = params.join("/");

        return this.axiosInstance.delete<T>(url);
    }
}

export default Api;
