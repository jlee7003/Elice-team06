import { useRef, useState, ChangeEvent, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import API from "@/api/.";
import { Logo } from "@/styles/common";
import {
    FindInfoWrap,
    Form,
    Label,
    IDInput,
    EmailInput,
    SubmitButton,
} from "@/styles/pages/auth-style";
import { Main } from "@/components/common/Main";
import { ROUTES } from "@/routes";

const EMAIL_REG = /^[\w-\.]+@([\w-]+\.)+com$/;

const FindID = () => {
    const IDRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const [validation, setValidation] = useState(false);

    const navigate = useNavigate();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target as any;
        if (emailRef.current === null) {
            return;
        }

        if (!EMAIL_REG.test(emailRef.current.value)) {
            setValidation(false);
        } else {
            setValidation(true);
        }
    };

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!validation || IDRef.current === null || emailRef.current === null) {
            return;
        }

        API.post<{ id: string }>(["user", "auth", "user"], {
            id: IDRef.current.value,
            email: emailRef.current.value,
        }).then((res: any) => {
            if (res.status !== 200) {
                console.log("hihihi");
                return;
            }
            console.log(res);
            navigate(ROUTES.FindResult.path, {
                state: { labelName: "비밀번호", result: res.data.password },
            });
        });
    };

    return (
        <Main>
            <FindInfoWrap>
                <Logo />
                <Form>
                    <Label>아이디</Label>
                    <IDInput name="ID" placeholder="아이디를 입력해주세요." ref={IDRef} />
                    <Label>이메일</Label>
                    <EmailInput
                        name="email"
                        placeholder="이메일을 입력해주세요."
                        ref={emailRef}
                        onChange={onChange}
                        invalid={!validation}
                    />
                    <SubmitButton onClick={onClick}>인증</SubmitButton>
                </Form>
            </FindInfoWrap>
        </Main>
    );
};

export default FindID;
