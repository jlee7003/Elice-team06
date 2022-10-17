import { useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ROUTES } from "@/routes/.";
import { Logo } from "@/styles/common";
import {
    Main,
    Form,
    Label,
    Input,
    SubmitButton,
    Menu,
    MenuButton,
} from "@/styles/pages/auth-style";
import { Section } from "@/styles/pages/landing-style";

const target = {
    email: {
        labelName: "이메일",
        placeholder: "이메일을 입력하세요.",
        findButton: true,
    },

    password: {
        labelName: "비밀번호",
        placeholder: "비밀번호를 입력하세요.",
        findButton: false,
    },
};

const Auth = () => {
    const data = useRef({
        labelName: "",
        placeholder: "",
        findButton: false,
    });

    const params = useParams().target;
    const navigate = useNavigate();
    useEffect(() => {
        switch (params) {
            case "email":
                data.current = target[params];
                console.log(data.current);
                return;
            case "password":
                data.current = target[params];
                return;
            default:
                navigate(ROUTES.ErrorPage.path);
                return;
        }
    }, []);

    return (
        <Main>
            <section>
                <Logo />
                <Form>
                    <Label>{data.current.labelName}</Label>
                    <Input placeholder={data.current.placeholder} />
                    <SubmitButton>인증</SubmitButton>
                </Form>
                {data.current.findButton && (
                    <section>
                        <MenuButton>비밀번호 찾기</MenuButton>
                        <Menu>
                            <MenuButton as="div">아직 회원이 아니신가요?</MenuButton>
                            <MenuButton>
                                <Link to="/signup">회원가입</Link>
                            </MenuButton>
                        </Menu>
                    </section>
                )}
            </section>
        </Main>
    );
};

export default Auth;
