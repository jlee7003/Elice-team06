import { useRef, useState, ChangeEvent, MouseEvent } from "react";
import API from "@/api/.";
import { Logo } from "@/styles/common";
import { Main, Form, Label, Input, SubmitButton } from "@/styles/pages/auth-style";

const EMAIL_REG = /^[\w-\.]+@([\w-]+\.)+com$/;

const FindID = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const [validation, setValidation] = useState(false);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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

        if (!validation || emailRef.current === null) {
            return;
        }

        API.post(["user", "auth", "email"], emailRef.current.value);
    };

    return (
        <Main>
            <section>
                <Logo />
                <Form>
                    <Label>이메일</Label>
                    <Input
                        name="이메일"
                        placeholder="이메일을 입력해주세요."
                        ref={emailRef}
                        onChange={onChange}
                        invalid={!validation}
                    />
                    <SubmitButton onClick={onClick}>인증</SubmitButton>
                </Form>
            </section>
        </Main>
    );
};

export default FindID;
