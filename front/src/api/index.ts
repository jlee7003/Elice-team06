import axios, { AxiosInstance } from "axios";

class Api {
    private static instance: Api;
    private axiosInstance: AxiosInstance;

    private constructor() {
        this.axiosInstance = axios.create({
            baseURL: "http://" + window.location.hostname + ":" + "5000" + "/",
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
            sessionStorage.getItem("refreshToken") ?? "";
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
