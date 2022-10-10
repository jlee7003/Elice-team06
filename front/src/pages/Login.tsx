import { useRecoilStateLoadable } from "recoil";
import { useState, useRef, MouseEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
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
import { ROUTES } from "@/routes/.";
import userSelector from "@/recoil/user";

const Login = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    // const [jwt, setJWT] = useRecoilState(token);
    const [userData, sample] = useRecoilStateLoadable(userSelector(loginData));
    const navigate = useNavigate();

    const [isError, setIsError] = useState(false);

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (email.current == null || password.current == null) {
            return;
        }

        setLoginData({
            email: email.current.value,
            password: password.current.value,
        });

        if (userData.state === "hasValue") {
            console.log(userData);
        }
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
