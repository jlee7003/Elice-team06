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
    Withdrawalbox,
    Select,
} from "../styles/pages/userInfo-style";
import { withdrawal } from "@/api/user";
import { Logo } from "@/styles/common";
import errorRecoil from "@/recoil/errorRecoil";
import { useSetRecoilState, useRecoilState } from "recoil";
import useLogout from "@/hooks/useLogout";
const WithDrawalPage = () => {
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
    const setLogout = useLogout();
    // const changePassword = async () => {
    //     await changePassword(passwordData).then((res) => {
    //         if (res === null) {
    //             return;
    //         }
    //         setUserInfo(res.data);
    //     });
    // };

    const handleClickRadioButton = (radioBtnName: string) => {
        setInputStatus(radioBtnName);
    };
    function isvalidationtrue() {
        if (password.current == null) {
            return;
        }
        if (password.current?.value != "회원탈퇴") {
            setValidationCheck(false);
            return;
        } else {
            setValidationCheck(true);
        }
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

        if (password.current == null) {
            return;
        }

        const result: any = await withdrawal();
        setLogout();

        if (result?.response?.status != undefined) {
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
                                <Withdrawalbox>
                                    정말 회원 탈퇴 하시겠습니까?
                                    <div>회원님의 한발자국이 탄小에게는 소중합니다.</div>
                                    <div>
                                        회원탈퇴를 원하시면{" "}
                                        <span style={{ color: "red" }}>'회원탈퇴'</span>를
                                        적어주세요
                                    </div>
                                </Withdrawalbox>
                                <Label>탈퇴하기</Label>
                                <Input
                                    type="text"
                                    placeholder=""
                                    name="password"
                                    ref={password}
                                    maxLength={8}
                                />

                                {ValidationCheck ? (
                                    <OKButton onClick={onClick} onMouseEnter={validationTrue}>
                                        탈퇴하기
                                    </OKButton>
                                ) : (
                                    <XButton onClick={onClickPrevent} onMouseEnter={validationTrue}>
                                        탈퇴하기
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

export default WithDrawalPage;
