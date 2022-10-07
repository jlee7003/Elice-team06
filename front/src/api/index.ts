import axios, { AxiosInstance } from "axios";

interface Data {
    [key: string]: string;
}

class Api {
    private static instance: Api;
    private path: string;
    private axiosInstance: AxiosInstance;

    constructor() {
        this.path = "http://" + window.location.hostname + ":" + "3001" + "/";
        this.axiosInstance = axios.create();
    }

    public static getInstance() {
        if (Api.instance == null) {
            Api.instance = new Api();
        }

        return Api.instance;
    }

    async get(params: string[]) {
        const url = this.path + params.join("/");

        return this.axiosInstance.get(url);
    }

    async post(params: string[], data: Data) {
        const url = this.path + params.join("/");

        const bodyData = JSON.stringify(data);
        return this.axiosInstance.post(url, bodyData, {
        });
    }

    setAccessToken(accessToken: string) {
        this.axiosInstance.defaults.headers.common['Authorization'] = accessToken
        this.axiosInstance.defaults.headers.common['refresh'] = sessionStorage.getItem("refreshToken") ?? ""
    }

    async put(params: string[], data: Data) {
        const url = this.path + params.join("/");

        const bodyData = JSON.stringify(data);

        return this.axiosInstance.put(url, bodyData, {
        });
    }

    async del(params: string[]) {
        const url = this.path + params.join("/");

        return this.axiosInstance.delete(url, {
        });
    }
}

export default Api;
