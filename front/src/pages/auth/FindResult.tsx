import { useEffect, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "@/styles/common";
import { Main, Form, Label, Input, Result, SubmitButton } from "@/styles/pages/auth-style";
import { MenuLink } from "@/styles/pages/login-style";
import { ROUTES } from "@/routes";
import sendToast from "@/lib/sendToast";

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

        sendToast("클립보드에 복사되었습니다.", "success");

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
