import { ChangeEvent, useState, useRef } from "react";
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
import { Logo } from "@styles/common";

interface FormData {
    email: string;
    password: string;
    passwordok: string;
    passwordhint: string;
    nickname: string;
    gender?: any;
    age: any;
    local: string;
    [key: string]: string;
}
const Signup = () => {
    const nickname = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const passwordok = useRef<HTMLInputElement>(null);
    const passwordhint = useRef<HTMLInputElement>(null);
    const local = useRef<HTMLSelectElement>(null);
    const age = useRef<HTMLSelectElement>(null);
    const gender = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        passwordok: "",
        passwordhint: "",
        nickname: "",
        gender: "",
        age: "",
        local: "",
    });

    const onClick = () => {
        console.log(formData);
        if (
            email.current == null ||
            password.current == null ||
            passwordok.current == null ||
            passwordhint.current == null ||
            nickname.current == null ||
            gender.current == null ||
            age.current == null ||
            local.current == null
        ) {
            return;
        }
        setFormData({
            email: email.current.value,
            password: password.current.value,
            passwordok: passwordok.current.value,
            passwordhint: passwordhint.current.value,
            nickname: nickname.current.value,
            gender: gender.current.value,
            age: age.current.value,
            local: local.current.value,
        });
    };
    const onChangeForm = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        // console.log(name, value);
        setFormData((prev: FormData) => {
            const newData = {
                ...prev,
                [name]: value,
            };
            return newData;
        });
        // inputRef.current.focus();
        // console.log(formData);
    };

    function isEmpty() {
        if (
            formData.age == "" ||
            formData.email == "" ||
            formData.password == "" ||
            formData.passwordok == "" ||
            formData.passwordhint == "" ||
            formData.id == "" ||
            formData.gender == "" ||
            formData.local == ""
        ) {
            return false;
        }
        if (formData.password != formData.passwordok) {
            return false;
        }
        return true;
    }
    const ValidationCheck = isEmpty();

    function selectnum() {
        var num = [];
        for (var i = 20; i < 99; i++) {
            num.push(<option value={i}>{i}세</option>);
        }
        return num;
    }
    return (
        <>
            <TopImage></TopImage>
            <Container>
                <div>
                    <LogoContainer>
                        <Logo></Logo>
                    </LogoContainer>
                    <SecondContainer>
                        <SecondContainer1>
                            <Form>
                                <Label>닉네임</Label>
                                <Input
                                    type="id"
                                    placeholder="닉네임을 입력하세요."
                                    name="nickname"
                                    value={formData.id}
                                    ref={nickname}
                                    // onChange={onChangeForm}
                                />
                                <Label>이메일</Label>
                                <Input
                                    type="email"
                                    placeholder="이메일을 입력하세요."
                                    name="email"
                                    value={formData.email}
                                    ref={email}
                                    // onChange={onChangeForm}
                                />
                                <Label>성별</Label>
                                <div>
                                    <span>
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="남"
                                            checked={formData.gender === "남"}
                                            // ref={gender}
                                            onChange={onChangeForm}
                                        ></input>
                                        <label style={{ marginRight: "40px" }}>남</label>
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="여"
                                            checked={formData.gender === "여"}
                                            onChange={onChangeForm}
                                            // ref={gender}
                                        ></input>
                                        여
                                    </span>
                                </div>
                                <Label>나이</Label>
                                <Select defaultValue="1" ref={age} name="age">
                                    {selectnum()}
                                </Select>
                                <Label>지역</Label>
                                <Select
                                    defaultValue="해당없음"
                                    onChange={onChangeForm}
                                    name="local"
                                >
                                    <option value="해당없음">해당없음</option>
                                    <option value="서울">서울</option>
                                    <option value="경기도">경기도</option>
                                    <option value="강원도">강원도</option>
                                    <option value="충청도">충청도</option>
                                    <option value="경상도">경상도</option>
                                    <option value="전라도">전라도</option>
                                </Select>
                            </Form>
                        </SecondContainer1>
                        <SecondContainer1>
                            <Form>
                                <Label>비밀번호</Label>
                                <Input
                                    type="password"
                                    placeholder="비밀번호를 입력하세요."
                                    name="password"
                                    value={formData.password}
                                    onChange={onChangeForm}
                                />
                                <Label>비밀번호 확인</Label>
                                <Input
                                    // type="etc"
                                    placeholder="비밀번호를 입력하세요."
                                    name="passwordok"
                                    value={formData.passwordok}
                                    onChange={onChangeForm}
                                />
                                <Label>비밀번호 힌트</Label>
                                <Input
                                    // type="password"
                                    placeholder="힌트를 입력하세요."
                                    name="passwordhint"
                                    value={formData.passwordhint}
                                    ref={passwordhint}
                                    onChange={onChangeForm}
                                />
                                {ValidationCheck ? (
                                    <OKButton onClick={onClick}>회원 가입하기</OKButton>
                                ) : (
                                    <XButton disabled>회원 가입하기</XButton>
                                )}
                            </Form>
                        </SecondContainer1>
                    </SecondContainer>
                    {/* <MenuItem onclick={Signup}>회원가입하기</MenuItem> */}
                </div>
            </Container>
        </>
    );
};

export default Signup;
