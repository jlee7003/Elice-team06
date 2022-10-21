import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "@/recoil/user";
import token from "@/recoil/token";

const useRefresh = () => {
    const getToken = useRecoilValue(token);
    const setUser = useSetRecoilState(userState);

    const reload = async () => {
        const data = getToken;

        if (data === null) {
            return;
        }

        setUser({
            nickname: data?.nickname,
            introduce: data?.Profile[0]?.introduce,
            admin: data?.admin,
        });
    };

    return reload;
};

export default useRefresh;
