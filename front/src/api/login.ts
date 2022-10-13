import { LoginForm, LoginResult } from "@/types/login";
import { User } from "@/types/user";
import Api from "@/api/.";

const login = async (loginData: LoginForm) => {
    const API = Api.getInstance();

    const res = await API.post<LoginForm, LoginResult>(["api", "login"], loginData);

    if (res.status !== 200) {
        return null;
    }

    const result = res.data;

    sessionStorage.setItem("refresh", result.refreshToken);
    API.setToken(result.accessToken);

    const user: User = {
        nickname: result.nickname,
        introduce: result.introduce,
    };

    return user;
};

export default login;
