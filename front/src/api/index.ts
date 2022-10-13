import axios, { AxiosInstance } from "axios";

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
        this.axiosInstance.defaults.headers.common["refresh"] =
            sessionStorage.getItem("refresh") ?? "";
    }

    async getToken() {
        const API = Api.getInstance();
        console.log(this.axiosInstance.defaults);
        this.setToken("bearer refreshed");

        const result = await this.post<string, { accessToken: string }>(
            ["api", "refresh"],
            "refresh"
        );

        if (result.status !== 200) {
            return null;
        }
        console.log(result.data.accessToken);
        this.setToken(result.data.accessToken);
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
