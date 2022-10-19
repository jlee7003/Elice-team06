import { atom, selector } from "recoil";
import API from "@/api/.";
import { refresh } from "@/api/user";

const token = selector({
    key: "token",
    get: async () => {
        API.setAccessToken("refreshed");

        const result = await refresh();

        if (result === null) {
            return null;
        }

        return result.data;
    },
});

export default token;
