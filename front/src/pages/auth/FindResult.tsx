import { useEffect, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "@/styles/common";
import { FindInfoWrap, Form, Label, Result, ResultWrap, MenuLink } from "@/styles/pages/auth-style";
import { Main } from "@/components/common/Main";
import { ROUTES } from "@/routes";
import sendToast from "@/lib/sendToast";

const copy = (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        let textArea = document.createElement("textarea");
        textArea.value = text;

        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        document.execCommand("copy");
    }
};

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

        copy(locationState.result);
    };

    return (
        <Main>
            <FindInfoWrap>
                <Logo />
                <Form>
                    <Label>{locationState.labelName}</Label>
                    <ResultWrap>
                        <Result>{locationState.result}</Result>
                        <button onClick={onClick}>
                            <i className="ri-file-copy-line"></i>
                        </button>
                    </ResultWrap>
                    <MenuLink to={ROUTES.Login.path}>로그인하기</MenuLink>
                </Form>
            </FindInfoWrap>
        </Main>
    );
};

export default FindResult;
