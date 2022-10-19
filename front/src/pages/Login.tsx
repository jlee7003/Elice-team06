import { useRef, useState, useEffect, MouseEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "@/routes/.";
import useLogin from "@/hooks/useLogin";
import {
    Main,
    Form,
    Label,
    ErrorInfo,
    Input,
    SubmitButton,
    Menu,
    MenuButton,
    MenuLink,
} from "@/styles/pages/login-style";
import { Logo } from "@/styles/common";
import { useRecoilState, useSetRecoilState } from "recoil";
import urlCheck from "@/recoil/urlCheck";
import errorRecoil from "@/recoil/errorRecoil";

const Login = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);
    const setError = useSetRecoilState(errorRecoil);
    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);
    const setLogin = useLogin(setError, "/");

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, [currentUrl]);

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (emailRef.current == null || passwordRef.current == null) {
            return;
        }

        const loginData = {
            id: emailRef.current.value,
            password: passwordRef.current.value,
        };

        setLogin(loginData);
    };

    return (
        <Main>
            <section>
                <Logo />
                {isError && <ErrorInfo>아이디 또는 비밀번호가 틀렸습니다.</ErrorInfo>}
                <Form>
                    <Label>아이디</Label>
                    <Input ref={emailRef} type="email" placeholder="아이디를 입력하세요." />
                    <Label>비밀번호</Label>
                    <Input ref={passwordRef} type="password" placeholder="비밀번호를 입력하세요." />
                    <SubmitButton onClick={onClick}>입력</SubmitButton>
                </Form>
                <Menu>
                    <MenuLink to="/auth/email">아이디 찾기</MenuLink>
                    <div>|</div>
                    <MenuLink to="/auth/password">비밀번호 찾기</MenuLink>
                </Menu>
                <Menu>
                    <MenuButton as="div">아직 회원이 아니신가요?</MenuButton>
                    <MenuButton>
                        <Link to={ROUTES.Signup.path}>회원가입</Link>
                    </MenuButton>
                </Menu>
            </section>
        </Main>
    );
};

export default Login;
