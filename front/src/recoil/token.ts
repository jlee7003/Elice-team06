import { atom, selector } from "recoil";
import API from "@/api/.";
import { refresh } from "@/api/user";

const token = selector({
    key: "token",
    get: async () => {
        const refreshToken = sessionStorage.getItem("refresh");

        if (refreshToken === null) {
            return null;
        }

        API.setAccessToken("refreshed");
        const result = await refresh();

        if (result === null) {
            return null;
        }

        const data = result.data;

        if (data === null) {
            return null;
        }

        API.setAccessToken(data.accessToken);

        return data;
    },
});

export default token;
