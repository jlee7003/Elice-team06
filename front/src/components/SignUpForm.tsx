import { useState, useRef, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes";
import {
    Form,
    Input,
    OKButton,
    XButton,
    Label,
    SecondContainer,
    SecondContainer1,
    Select,
} from "../styles/pages/signup-style";
import { signup } from "@/api/user";
import { User } from "@/types/user";
import sendToast from "@/lib/sendToast";
import { userState } from "@/recoil/user";
import { useSetRecoilState } from "recoil";
import useLogin from "@/hooks/useLogin";
const SignUpForm = () => {
    const nickname = useRef<HTMLInputElement>(null);
    const introduce = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const passwordok = useRef<HTMLInputElement>(null);
    const id = useRef<HTMLInputElement>(null);
    const region = useRef<HTMLSelectElement>(null);
    const age = useRef<HTMLSelectElement>(null);
    const gender = useRef<HTMLInputElement>(null);
    const [ValidationCheck, setValidationCheck] = useState(false);
    const [inputStatus, setInputStatus] = useState("");
    const setLogin = useLogin("/");
    const setUser = useSetRecoilState(userState);

    const navigate = useNavigate();

    const handleClickRadioButton = (radioBtnName: string) => {
        setInputStatus(radioBtnName);
    };
    function isvalidationtrue() {
        if (
            email.current == null ||
            introduce.current == null ||
            password.current == null ||
            passwordok.current == null ||
            id.current == null ||
            nickname.current == null ||
            gender.current == null ||
            age.current == null ||
            region.current == null
        ) {
            return;
        }
        if (
            email.current?.value == "" ||
            introduce.current?.value == "" ||
            password.current?.value == "" ||
            passwordok.current?.value == "" ||
            id.current?.value == "" ||
            nickname.current?.value == "" ||
            inputStatus == "" ||
            age.current?.value == "" ||
            region.current?.value == "" ||
            region.current?.value == "해당없음"
        ) {
            setValidationCheck(false);
            return;
        }
        if (password.current?.value != passwordok.current?.value) {
            sendToast("비밀번호와 확인 비밀번호가 일치하지 않습니다.", "error");
        }
        setValidationCheck(true);
    }
    let formData = {
        email: "",
        introduce: "",
        nickname: "",
        password: "",
        id: "",
        age: "",
        region: "",
        gender: "",
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
            email.current == null ||
            introduce.current == null ||
            password.current == null ||
            passwordok.current == null ||
            id.current == null ||
            nickname.current == null ||
            gender.current == null ||
            age.current == null ||
            region.current == null
        ) {
            return;
        }

        formData = {
            email: email.current?.value,
            introduce: introduce.current?.value,
            password: password.current?.value,
            id: id.current?.value,
            nickname: nickname.current?.value,
            gender: inputStatus,
            age: age.current?.value,
            region: region.current?.value,
        };

        const result: any = await signup(formData);

        if (result?.response?.status != undefined) {
            sendToast(result?.response?.data?.message, "error");
            return;
        }

        const user: User = {
            nickname: nickname.current?.value,
            introduce: introduce.current?.value,
            admin: false,
        };

        setUser(user);
        navigate(ROUTES.Home.path);
    };

    function selectnum() {
        var num = [];
        for (let i = 20; i <= 60; i += 10) {
            num.push(<option value={i + "대"}>{i}대</option>);
        }
        return num;
    }
    return (
        <SecondContainer>
            <SecondContainer1>
                <Form>
                    <Label>아이디</Label>
                    <Input placeholder="아이디" name="passwordhint" ref={id} />

                    <Label>이메일</Label>
                    <Input
                        type="email"
                        placeholder="이메일을 입력하세요."
                        name="email"
                        ref={email}
                    />
                    <Label>닉네임</Label>
                    <Input
                        type="id"
                        placeholder="닉네임을 입력하세요."
                        name="nickname"
                        ref={nickname}
                    />
                    <Label>인사말</Label>
                    <Input placeholder="인사말을 입력하세요." name="introduce" ref={introduce} />
                    <Label>성별</Label>
                    <div>
                        <span>
                            <input
                                name="gender"
                                type="radio"
                                value="남"
                                defaultChecked={inputStatus === "남"}
                                onClick={() => handleClickRadioButton("남")}
                                ref={gender}
                            ></input>
                            <label style={{ marginRight: "40px" }}>남</label>
                            <input
                                name="gender"
                                type="radio"
                                value="여"
                                defaultChecked={inputStatus === "여"}
                                onClick={() => handleClickRadioButton("여")}
                                ref={gender}
                            ></input>
                            여
                        </span>
                    </div>
                </Form>
            </SecondContainer1>
            <SecondContainer1>
                <Form>
                    <Label>비밀번호</Label>
                    <Input
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        name="password"
                        ref={password}
                        maxLength={8}
                    />
                    <Label>비밀번호 확인</Label>
                    <Input
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        name="passwordok"
                        ref={passwordok}
                        maxLength={8}
                    />
                    <Label>나이</Label>
                    <Select defaultValue="1" ref={age} name="age">
                        {selectnum()}
                    </Select>
                    <Label>지역</Label>
                    <Select defaultValue="해당없음" name="local" ref={region}>
                        <option value="해당없음">해당없음</option>
                        <option value="서울">서울</option>
                        <option value="경기도">경기도</option>
                        <option value="강원도">강원도</option>
                        <option value="충청도">충청도</option>
                        <option value="경상도">경상도</option>
                        <option value="전라도">전라도</option>
                    </Select>
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
    );
};

export default SignUpForm;
