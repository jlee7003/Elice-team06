import { useRecoilState, useRecoilValue } from "recoil";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
    Container,
    Form,
    Input,
    Button,
    MenuItem,
    LoginContainer,
    LogoContainer,
    Textleft,
    TopImage,
} from "../styles/pages/login-style";
import token from "../recoil/token";

import Api from "../api";
import { Logo } from "@styles/common";
import { useNavigate } from "react-router-dom";

interface FormData {
    email: string;
    password: string;
    // id: string;
    [key: string]: string;
}

const Login = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        // id: "",
    });
    const [jwt, setJWT] = useRecoilState(token);
    const navigate = useNavigate();

    const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev: FormData) => {
            const newData = {
                ...prev,
                [name]: value,
            };

            return newData;
        });
    };

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // console.log(process.env.ORIGIN);

        const API = Api.getInstance();

        API.post(["api", "login"], formData)
            .then((res) => {
                setJWT(res.data.accessToken);
                sessionStorage.setItem("refreshToken", res.data.refreshToken);
                // console.log(jwt);
                navigate("/home");
            })
            .catch((err: Error) => {
                console.error(err);
            });
    };

    const Signup = () => {
        navigate("/signup");
    };
    return (
        <>
            <TopImage></TopImage>
            <Container>
                <div>
                    <LogoContainer>
                        <Logo></Logo>
                    </LogoContainer>
                    <Form>
                        <Textleft>아이디</Textleft>
                        <Input
                            type="email"
                            placeholder="아이디를 입력하세요."
                            name="email"
                            value={formData.email}
                            onChange={onChangeForm}
                        />
                        <Textleft>비밀번호</Textleft>
                        <Input
                            type="password"
                            placeholder="비밀번호를 입력하세요."
                            name="password"
                            value={formData.password}
                            onChange={onChangeForm}
                        />
                        <Button onClick={onClick}>입력</Button>
                    </Form>
                    <LoginContainer>
                        <MenuItem>비밀번호 찾기</MenuItem>
                        <MenuItem>|</MenuItem>
                        <MenuItem>이메일 찾기</MenuItem>
                        {/* <MenuItem onClick={Signup}>회원가입하기</MenuItem> */}
                    </LoginContainer>
                    <LoginContainer>
                        <MenuItem>아직 회원이 아니신가요?</MenuItem>
                        <MenuItem onClick={Signup} style={{ color: "#75C6A0" }}>
                            회원가입
                        </MenuItem>
                    </LoginContainer>
                </div>
            </Container>
        </>
    );
};

export default Login;
