import { useEffect, useState, useRef, ChangeEvent, MouseEvent } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ROUTES } from "@/routes/.";
import { Logo } from "@/styles/common";
import {
    Main,
    Form,
    Label,
    Input,
    SubmitButton,
    FormFooter,
    Menu,
    MenuButton,
} from "@/styles/pages/auth-style";

interface Data {
    mainLabel: string;
    mainPlaceholder: string;
    mainInputName: string;
    subLabel?: string;
    subInputName?: string;
    subPlaceholder?: string;
    findButton: boolean;
}

interface TagData {
    [key: string]: Data;
}

interface FormData {
    [key: string]: string;
}

const TAG_DATA: TagData = {
    email: {
        mainLabel: "이메일",
        mainPlaceholder: "이메일을 입력하세요.",
        mainInputName: "email",
        subLabel: "비밀번호 힌트",
        subPlaceholder: "비밀번호 힌트를 입력하세요",
        subInputName: "passwordHint",
        findButton: false,
    },

    password: {
        mainLabel: "비밀번호",
        mainPlaceholder: "비밀번호를 입력하세요.",
        mainInputName: "password",
        findButton: true,
    },
};

const Auth = () => {
    const [data, setData] = useState<Data>({
        mainLabel: "",
        mainPlaceholder: "",
        mainInputName: "",
        findButton: false,
    });

    const target = useParams().target;
    const navigate = useNavigate();

    const FormDataRef = useRef<FormData | {}>({});

    useEffect(() => {
        switch (target) {
            case undefined:
                navigate(ROUTES.ErrorPage.path);

                return;
            case "email":
                setData(TAG_DATA[target]);

                return;
            case "password":
                setData(TAG_DATA[target]);

                return;
            default:
                navigate(ROUTES.ErrorPage.path);

                return;
        }
    }, [target]);

    const onChange = (e: ChangeEvent) => {
        const { name, value } = e.target as any;

        const formData = FormDataRef.current;
        formData[name] = value;

        FormDataRef.current = formData;
    };

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        console.log("hihihihihihihihihi===", FormDataRef.current);
    };
    return (
        <Main>
            <section>
                <Logo />
                <Form>
                    <Label>{data.mainLabel}</Label>
                    <Input
                        name={data.mainInputName}
                        placeholder={data.mainPlaceholder}
                        onChange={onChange}
                    />
                    {target === "email" && (
                        <>
                            <Label>{data.subLabel}</Label>
                            <Input
                                name={data.subInputName}
                                placeholder={data.subPlaceholder}
                                onChange={onChange}
                            />
                        </>
                    )}
                    <SubmitButton onClick={onClick}>인증</SubmitButton>
                </Form>
                {data.findButton && (
                    <FormFooter>
                        <Link to="/auth/email">비밀번호 찾기</Link>
                        <Menu>
                            <MenuButton as="div">아직 회원이 아니신가요?</MenuButton>
                            <MenuButton>
                                <Link to={ROUTES.Signup.path}>회원가입</Link>
                            </MenuButton>
                        </Menu>
                    </FormFooter>
                )}
            </section>
        </Main>
    );
};

export default Auth;
