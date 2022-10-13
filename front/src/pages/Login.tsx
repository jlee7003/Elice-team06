import { useRef, useState, useEffect, MouseEvent } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate, Link } from "react-router-dom";
import userState from "@/recoil/user";
import { ROUTES } from "@/routes/.";
import login from "@/api/login";
import {
    Main,
    Form,
    Label,
    ErrorInfo,
    Input,
    SubmitButton,
    Menu,
    MenuButton,
} from "@/styles/pages/login-style";
import { Logo } from "@/styles/common";
import { useRecoilState } from "recoil";
import urlCheck from "@/recoil/urlCheck";

const Login = () => {
    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const setUser = useSetRecoilState(userState);

    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, [currentUrl]);

    const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (email.current == null || password.current == null) {
            return;
        }

        const loginData = {
            user_email: email.current.value,
            password: password.current.value,
        };

        const result = await login(loginData);

        if (result === null) {
            setIsError(true);
            return;
        }

        setUser(result);
        navigate(ROUTES.Home.path);
        // const API = Api.getInstance();

        // try {
        //     const res = await API.post<LoginResponse>(["api", "login"], loginData);
        //     if (res.statusText === "OK") {
        //         API.setToken(res.data.accessToken);
        //         sessionStorage.setItem("refresh", res.data.refreshToken);

        //         setUserAtom(res.data);

        //         navigate(ROUTES.Home.path);
        //     } else {
        //         setIsError(true);
        //     }
        // } catch (err: any) {
        //     console.log(err.message);
        // }
    };

    return (
        <Main>
            <section>
                <Logo />
                {isError && <ErrorInfo>아이디 또는 비밀번호가 틀렸습니다.</ErrorInfo>}
                <Form>
                    <Label>아이디</Label>
                    <Input ref={email} type="email" placeholder="아이디를 입력하세요." />
                    <Label>비밀번호</Label>
                    <Input ref={password} type="password" placeholder="비밀번호를 입력하세요." />
                    <SubmitButton onClick={onClick}>입력</SubmitButton>
                </Form>
                <Menu>
                    <MenuButton>비밀번호 찾기</MenuButton>
                    <div>|</div>
                    <MenuButton>이메일 찾기</MenuButton>
                </Menu>
                <Menu>
                    <MenuButton as="div">아직 회원이 아니신가요?</MenuButton>
                    <MenuButton>
                        <Link to="/signup">회원가입</Link>
                    </MenuButton>
                </Menu>
            </section>
        </Main>
    );
};

export default Login;
