import { useSetRecoilState } from "recoil";
import userState from "@/recoil/user";
import { LoginFormData } from "@/types/auth";
import { login } from "@/api/auth";
import { User } from "@/types/user";

const useLogin = () => {
    const setUser = useSetRecoilState(userState);
    let state = false;

    const setLogin = async (loginFormData: LoginFormData) => {
        const result = await login(loginFormData);

        if (result === null) {
            state = false;

            return false;
        }

        sessionStorage.setItem("refresh", result.refreshToken);

        const user: User = {
            nickname: result.nickname,
            introduce: result.introduce,
        };

        setUser(user);
        state = true;

        return true;
    };

    return [setLogin];
};

export default useLogin;
