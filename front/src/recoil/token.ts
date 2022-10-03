import { atom, selector } from "recoil";
import Api from "../api";

const accessToken = atom({
    key: "accessToken",
    default: "",
});

const token = selector({
    key: "token",
    get: ({ get }) => {
        const jwt = get(accessToken);

        return jwt;
    },
    set: ({ set }, newToken) => {
        set(accessToken, newToken);
    },
});

export default token;
