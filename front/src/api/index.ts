import axios, { AxiosInstance } from "axios";
import errorRecoil from "@/recoil/errorRecoil";
import { constSelector, useRecoilState } from "recoil";
class API {
    private instance: AxiosInstance;

    public errorset() {
        const [error, setError] = useRecoilState(errorRecoil);
    }
    public constructor() {
        this.instance = axios.create({
            baseURL: "http://" + window.location.hostname + ":" + "3001" + "/",
        });
    }

    public setAccessToken(accessToken: string) {
        this.instance.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
    }
    public setRefreshToken() {
        this.instance.defaults.headers.common["refreshtoken"] =
            sessionStorage.getItem("refresh") ?? "";
    }

    public async get<T>(params: string[]) {
        this.setRefreshToken();
        //console.log(3535353);
        const url = params.join("/");

        try {
            const response = await this.instance.get<T>(url);

            return response;
        } catch (err) {
            return null;
        }
    }

    //쿼리가 필요한 get
    public async getQuery<T>(params: string[]) {
        this.setRefreshToken();

        const url = params.join("?");
        console.log(url);

        try {
            const response = await this.instance.get<T>(url);
            console.log(response);

            return response;
        } catch (err) {
            return null;
        }
    }

    public async post<T>(params: string[], data: any) {
        this.setRefreshToken();

        const url = params.join("/");

        try {
            const response = await this.instance.post<T>(url, data);

            return response;
        } catch (err) {
            return err;
        }
    }

    public async put<T>(params: string[], data: any) {
        this.setRefreshToken();

        const url = params.join("/");

        try {
            const response = await this.instance.put<T>(url, data);

            return response;
        } catch (err) {
            return null;
        }
    }

    public async delete<T>(params: string[]) {
        this.setRefreshToken();

        const url = params.join("/");

        try {
            const response = await this.instance.delete<T>(url);

            return response;
        } catch (err) {
            return null;
        }
    }
}

export default new API();
