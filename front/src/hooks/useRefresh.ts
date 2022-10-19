import { useState } from "react";
import { useSetRecoilState } from "recoil";
import userState from "@/recoil/user";
import { refresh } from "@/api/user";
import API from "@/api/.";

export type State = "loading" | "done";

const useRefresh = (): [State, () => Promise<void>] => {
    const setUser = useSetRecoilState(userState);
    const [state, setState] = useState<State>("done");

    const reload = async () => {
        const refreshToken = sessionStorage.getItem("refresh");

        if (refreshToken === null) {
            return;
        }

        setState("loading");

        API.setAccessToken("refreshed");

        const result = await refresh();

        if (result === null) {
            return;
        }

        const data = result.data;
        // console.log("data:", data?.Profile[0]);
        API.setAccessToken(data?.accessToken);
        setUser({
            nickname: data?.nickname,
            introduce: data?.Profile[0]?.introduce,
        });

        setState("done");
        return result;
    };

    return [state, reload];
};

export default useRefresh;
