import axios from "axios";

interface Data {
    [key: string]: string;
}

class Api {
    private static instance: Api;
    private path: string;

    constructor() {
        this.path = "http://" + window.location.hostname + ":" + "3001" + "/";
    }

    public static getInstance() {
        if (Api.instance == null) {
            Api.instance = new Api();
        }

        return Api.instance;
    }

    async get(params: string[]) {
        const url = this.path + params.join("/");

        return axios.get(url);
    }

    async post(params: string[], data: Data, accessToken: string) {
        const url = this.path + params.join("/");

        const bodyData = JSON.stringify(data);
        return axios.post(url, bodyData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
                refresh: sessionStorage.getItem("refreshToken") ?? "",
            },
        });
    }

    async put(params: string[], data: Data, accessToken: string) {
        const url = this.path + params.join("/");

        const bodyData = JSON.stringify(data);

        return axios.put(url, bodyData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
                refresh: sessionStorage.getItem("refreshToken") ?? "",
            },
        });
    }

    async del(params: string[], accessToken: string) {
        const url = this.path + params.join("/");

        return axios.delete(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
                refresh: sessionStorage.getItem("refreshToken") ?? "",
            },
        });
    }
}

export default Api;
