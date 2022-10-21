import { useResetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userState } from "@/recoil/user";
import { logout } from "@/api/user";
import { ROUTES } from "@/routes";

const useLogout = () => {
    const resetUser = useResetRecoilState(userState);
    const navigate = useNavigate();

    const setLogout = () => {
        logout().then((result) => {
            if (result === null) {
                navigate(ROUTES.ErrorPage.path);
            } else {
                resetUser();
                sessionStorage.removeItem("refresh");
                navigate(ROUTES.Home.path);
            }
        });
    };

    return setLogout;
};

export default useLogout;
