import { useRecoilState } from "recoil";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Container, Form, Input, Button } from "../styles/login-style";
import token from "../recoil/token";
import Api from "../api";
import { useNavigate } from "react-router-dom";

interface FormData {
    email: string;
    password: string;
    [key: string]: string;
}

const Login = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
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

        const API = Api.getInstance();

        API.post(["api", "login"], formData)
            .then((res) => {
                setJWT(res.data.accessToken);
                sessionStorage.setItem("refreshToken", res.data.refreshToken);

                navigate("/home");
            })
            .catch((err: Error) => {
                console.error(err);
            });
    };

    return (
        <Container>
            <Form>
                <Input
                    type="email"
                    placeholder="이메일을 입력하세요."
                    name="email"
                    value={formData.email}
                    onChange={onChangeForm}
                />
                <Input
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    name="password"
                    value={formData.password}
                    onChange={onChangeForm}
                />
                <Button onClick={onClick}>입력</Button>
            </Form>
        </Container>
    );
};

export default Login;
