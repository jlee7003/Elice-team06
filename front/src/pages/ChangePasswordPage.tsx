import { useState, useRef, MouseEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes";
import {
    Container,
    Form,
    Input,
    OKButton,
    XButton,
    LogoContainer,
    Label,
    TopImage,
    SecondContainer,
    SecondContainer1,
    Select,
} from "../styles/pages/signup-style";
import { signup, myInfo } from "@/api/user";
import { Logo } from "@/styles/common";
import errorRecoil from "@/recoil/errorRecoil";
import { Info } from "@/recoil/user";
import { useSetRecoilState, useRecoilState } from "recoil";
import { changePassword, changeMyInfo } from "../api/user";
import { red } from "@mui/material/colors";
const ChangePasswordPage = () => {
    // const [userInfo, setUserInfo] = useRecoilState(userInfoData);
    const nickname = useRef<HTMLInputElement>(null);
    const introduce = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const new_password = useRef<HTMLInputElement>(null);
    const password_hint = useRef<HTMLInputElement>(null);
    const region = useRef<HTMLSelectElement>(null);
    const age = useRef<HTMLSelectElement>(null);
    const gender = useRef<HTMLInputElement>(null);
    const [ValidationCheck, setValidationCheck] = useState(false);
    const [inputStatus, setInputStatus] = useState("");
    const setError = useSetRecoilState(errorRecoil);
    const navigate = useNavigate();
    // const changePassword = async () => {
    //     await changePassword(passwordData).then((res) => {
    //         if (res === null) {
    //             return;
    //         }
    //         setUserInfo(res.data);
    //         console.log(res);
    //     });
    // };

    const handleClickRadioButton = (radioBtnName: string) => {
        setInputStatus(radioBtnName);
        console.log(radioBtnName);
        console.log(inputStatus);
    };
    function isvalidationtrue() {
        if (
            password.current == null ||
            new_password.current == null ||
            password_hint.current == null
        ) {
            return;
        }
        if (
            password.current?.value == "" ||
            new_password.current?.value == "" ||
            password_hint.current?.value == ""
        ) {
            setValidationCheck(false);
            return;
        }
        setValidationCheck(true);
    }
    let formData = {
        password: "",
        new_password: "",
        password_hint: "",
    };
    const validationTrue = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        isvalidationtrue();
    };
    const onClickPrevent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };
    const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (
            password.current == null ||
            new_password.current == null ||
            password_hint.current == null
        ) {
            return;
        }

        formData = {
            password: password.current?.value,
            new_password: new_password.current?.value,
            password_hint: password_hint.current?.value,
        };
        const result: any = await changePassword(formData);
        console.log(result);
        if (result?.response?.status != undefined) {
            console.log(result?.response?.data);
            setError({
                isError: true,
                message: result?.response?.data?.message,
            });
            return;
        }
        navigate(ROUTES.Home.path);
    };

    function selectnum() {
        var num = [];
        for (var i = 20; i <= 60; i += 10) {
            num.push(<option value={i + "대"}>{i}대</option>);
        }
        return num;
    }
    return (
        <>
            <TopImage />
            <Container>
                <div>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                    <SecondContainer>
                        <SecondContainer1>
                            <Form>
                                <Label>기존 비밀번호</Label>
                                <Input
                                    type="password"
                                    placeholder="비밀번호를 입력하세요."
                                    name="password"
                                    ref={password}
                                    maxLength={8}
                                />
                                <Label>새로운 비밀번호</Label>
                                <Input
                                    type="password"
                                    placeholder="비밀번호를 입력하세요."
                                    name="passwordok"
                                    ref={new_password}
                                    maxLength={8}
                                />
                                <Label>비밀번호 힌트</Label>
                                <Input
                                    type="text"
                                    placeholder="비밀번호를 입력하세요."
                                    name="passwordok"
                                    ref={password_hint}
                                    maxLength={8}
                                />

                                {ValidationCheck ? (
                                    <OKButton onClick={onClick} onMouseEnter={validationTrue}>
                                        회원 가입하기
                                    </OKButton>
                                ) : (
                                    <XButton onClick={onClickPrevent} onMouseEnter={validationTrue}>
                                        회원 가입하기
                                    </XButton>
                                )}
                            </Form>
                        </SecondContainer1>
                    </SecondContainer>
                </div>
            </Container>
        </>
    );
};

export default ChangePasswordPage;
