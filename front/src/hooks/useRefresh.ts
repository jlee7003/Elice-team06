import { useSetRecoilState } from "recoil";
import userState from "@/recoil/user";
import { refresh } from "@/api/user";
import API from "@/api/.";

const useRefresh = () => {
    const setUser = useSetRecoilState(userState);

    const reload = async () => {
        const refreshToken = sessionStorage.getItem("refresh");

        if (refreshToken === null) {
            return;
        }

        API.setAccessToken("refreshed");

        const result = await refresh();

        if (result === null) {
            return;
        }
        const data = (result as any).data;

        API.setAccessToken(data?.accessToken);
        setUser({
            nickname: data?.nickname,
            introduce: data?.Profile[0].introduce,
        });
    };

    return reload;
};

export default useRefresh;
