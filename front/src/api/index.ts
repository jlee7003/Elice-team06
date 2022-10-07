import axios from "axios";

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

    async post(params: string[], data: { [key: string]: string }, accessToken: string) {
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
}

export default Api;
