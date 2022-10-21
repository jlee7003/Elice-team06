import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userState } from "@/recoil/user";
import { LoginData } from "@/types/auth";
import { login } from "@/api/user";
import { User } from "@/types/user";
import { ROUTES } from "@/routes";
import API from "@/api/.";
import sendToast from "@/lib/sendToast";

const useLogin = (redirectURL: string) => {
    const setUser = useSetRecoilState(userState);
    const navigate = useNavigate();

    const setLogin = async (loginFormData: LoginData) => {
        const result: any = await login(loginFormData);

        if (result?.response?.status != undefined) {
            sendToast(result?.response?.data?.message, "error");

            return;
        }
        const data = (result as any).data;

        sessionStorage.setItem("refresh", data?.refreshToken);
        API.setAccessToken(data?.accessToken);

        const user: User = {
            nickname: data?.nickname,
            introduce: data?.introduce,
        };

        setUser(user);

        navigate(ROUTES.Home.path);
    };

    return setLogin;
};

export default useLogin;
