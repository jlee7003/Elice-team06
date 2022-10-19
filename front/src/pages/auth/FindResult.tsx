import { useEffect, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "@/styles/common";
import { Main, Form, Label, Input, Result, SubmitButton } from "@/styles/pages/auth-style";
import { MenuLink } from "@/styles/pages/login-style";
import { ROUTES } from "@/routes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FindResult = () => {
    const locationState = useLocation().state;
    const navigate = useNavigate();

    useEffect(() => {
        if (locationState === null) {
            navigate(ROUTES.ErrorPage.path, { replace: true });
        }
    }, []);

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toast.success("대충 내용", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
        });

        navigator.clipboard.writeText(locationState.result);
    };

    return (
        <Main>
            <section>
                <Logo />
                <Form>
                    <Label>아이디</Label>
                    <Result>{locationState.result}</Result>
                </Form>
                <button onClick={onClick}>복사</button>
                <MenuLink to={ROUTES.Login.path}>로그인하기</MenuLink>
            </section>
        </Main>
    );
};

export default FindResult;
