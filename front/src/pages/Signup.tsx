import { useRecoilState } from "recoil";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
    Container,
    Form,
    Input,
    OKButton,
    XButton,
    LogoContainer,
    Textleft,
    TopImage,
    SecondContainer,
    SecondContainer1,
    Select,
} from "../styles/pages/signup-style";
import token from "../recoil/token";
import Api from "../api";
import { Logo } from "@styles/common";
import { useNavigate } from "react-router-dom";

interface FormData {
    email: string;
    password: string;
    passwordok: string;
    passwordhint: string;
    id: string;
    gender?: any;
    age: any;
    local: string;
    [key: string]: string;
}
const Signup = () => {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        passwordok: "",
        passwordhint: "",
        id: "",
        gender: "",
        age: "",
        local: "",
    });

    const onChangeForm = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(name, value);

        setFormData((prev: FormData) => {
            const newData = {
                ...prev,
                [name]: value,
            };
            return newData;
        });
        console.log(formData);
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
        return true;
    }
    const ValidationCheck = isEmpty();

    function selectnum() {
        var num = [];
        for (var i = 1; i < 99; i++) {
            num.push(<option value={i}>{i}살</option>);
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
                                <Textleft>닉네임</Textleft>
                                <Input
                                    type="id"
                                    placeholder="닉네임을 입력하세요."
                                    name="id"
                                    value={formData.id}
                                    onChange={onChangeForm}
                                />
                                <Textleft>이메일</Textleft>
                                <Input
                                    type="email"
                                    placeholder="이메일을 입력하세요."
                                    name="email"
                                    value={formData.email}
                                    onChange={onChangeForm}
                                />
                                <Textleft>성별</Textleft>
                                <div>
                                    <span>
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="남"
                                            checked={formData.gender === "남"}
                                            onChange={onChangeForm}
                                        ></input>
                                        <label style={{ marginRight: "40px" }}>남</label>
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="여"
                                            checked={formData.gender === "여"}
                                            onChange={onChangeForm}
                                        ></input>
                                        여
                                    </span>
                                </div>
                                <Textleft>나이</Textleft>
                                <Select defaultValue="1" onChange={onChangeForm} name="age">
                                    {selectnum()}
                                </Select>
                                <Textleft>지역</Textleft>
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
                                <Textleft>비밀번호</Textleft>
                                <Input
                                    type="password"
                                    placeholder="비밀번호를 입력하세요."
                                    name="password"
                                    value={formData.password}
                                    onChange={onChangeForm}
                                />
                                <Textleft>비밀번호 확인</Textleft>
                                <Input
                                    // type="etc"
                                    placeholder="비밀번호를 입력하세요."
                                    name="passwordok"
                                    value={formData.passwordok}
                                    onChange={onChangeForm}
                                />
                                <Textleft>비밀번호 힌트</Textleft>
                                <Input
                                    // type="password"
                                    placeholder="힌트를 입력하세요."
                                    name="passwordhint"
                                    value={formData.passwordhint}
                                    onChange={onChangeForm}
                                />
                                {ValidationCheck ? (
                                    <OKButton>회원 가입하기</OKButton>
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
