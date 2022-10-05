import { useRecoilState } from "recoil";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Container, Form, Input, Button, MenuItem } from "../styles/pages/signup-style";
import token from "../recoil/token";
import Api from "../api";
import { Logo } from "@styles/common";
import { useNavigate } from "react-router-dom";

interface FormData {
    email: string;
    password: string;
    id: string;
    etc: string;
    [key: string]: string;
}

const Signup = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        id: "",
        etc: "",
    });
    //     const [jwt, setJWT] = useRecoilState(token);
    //     const navigate = useNavigate();

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

    // const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();

    //     const API = Api.getInstance();

    //     API.post(["api", "login"], formData)
    //         .then((res) => {
    //             setJWT(res.data.accessToken);
    //             sessionStorage.setItem("refreshToken", res.data.refreshToken);

    //             navigate("/home");
    //         })
    //         .catch((err: Error) => {
    //             console.error(err);
    //         });
    // };

    // const join = () => {
    //     navigate("/login");
    // };
    return (
        <Container>
            <Logo></Logo>
            <Form>
                <Input
                    type="id"
                    placeholder="아이디를 입력하세요."
                    name="id"
                    value={formData.id}
                    onChange={onChangeForm}
                />

                <Input
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    name="password"
                    value={formData.password}
                    onChange={onChangeForm}
                />
                <Input
                    type="email"
                    placeholder="이메일을 입력하세요."
                    name="email"
                    value={formData.email}
                    onChange={onChangeForm}
                />

                <Input
                    type="etc"
                    placeholder="기타 등등을 입력하세요."
                    name="etc"
                    value={formData.email}
                    onChange={onChangeForm}
                />
                <Button>회원 가입하기</Button>
            </Form>
            {/* <MenuItem onclick={Signup}>회원가입하기</MenuItem> */}
        </Container>
    );
};

export default Signup;
