import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "@/recoil/user";
import { refresh } from "@/api/user";
import API from "@/api/.";
import token from "@/recoil/token";

export type State = "loading" | "done";

const useRefresh = () => {
    const getToken = useRecoilValue(token);
    const setUser = useSetRecoilState(userState);

    const reload = async () => {
        const refreshToken = sessionStorage.getItem("refresh");

        if (refreshToken === null) {
            return;
        }

        const data = getToken;

        if (data === null) {
            return;
        }

        setUser({
            nickname: data?.nickname,
            introduce: data?.Profile[0]?.introduce,
        });
    };

    return reload;
};

export default useRefresh;
