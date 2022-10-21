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
const UserInfo = () => {
    // const [userInfo, setUserInfo] = useRecoilState(userInfoData);
    const [userInfo, setUserInfo] = useState<Info | null>(null);
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
    const setError = useSetRecoilState(errorRecoil);
    let ismale = userInfo?.gender == "남";
    let isfemale = userInfo?.gender == "여";
    let stringmale = userInfo?.gender;
    const navigate = useNavigate();
    let infoData = {
        age: "",
        region: "",
        gender: "",
    };
    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        await myInfo().then((res) => {
            if (res === null) {
                return;
            }
            setUserInfo({
                age: res?.data?.age,
                gender: res?.data?.gender,
                introduce: res?.data?.introduce,
                nickname: res?.data?.nickname,
                profile_image: null,
                region: res?.data?.region,
            });
            console.log(res);
        });
    };

    console.log(userInfo);
    console.log(userInfo?.gender, ismale);
    const changePassword = async () => {
        // await changePassword(passwordData).then((res) => {
        //     if (res === null) {
        //         return;
        //     }
        //     setUserInfo(res.data);
        //     console.log(res);
        // });
    };

    const handleClickRadioButton = (radioBtnName: string) => {
        setInputStatus(radioBtnName);
        console.log(radioBtnName);
        console.log(inputStatus);
    };
    function isvalidationtrue() {
        if (
            introduce.current == null ||
            nickname.current == null ||
            gender.current == null ||
            age.current == null ||
            region.current == null
        ) {
            return;
        }
        if (
            introduce.current?.value == "" ||
            nickname.current?.value == "" ||
            gender.current?.value == "" ||
            age.current?.value == "" ||
            region.current?.value == "" ||
            region.current?.value == "해당없음"
        ) {
            setValidationCheck(false);
            return;
        }
        setValidationCheck(true);
    }
    let formData = {
        updateData: {
            introduce: "",
            nickname: "",
            age: "",
            region: "",
            gender: "",
            profile_image: "",
        },
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
            introduce.current == null ||
            nickname.current == null ||
            gender.current == null ||
            age.current == null ||
            region.current == null
        ) {
            return;
        }

        formData = {
            updateData: {
                age: age.current?.value,
                gender: gender.current?.value,
                introduce: introduce.current?.value,
                nickname: nickname.current?.value,
                region: region.current?.value,
                profile_image: "",
            },
        };
        console.log(formData.updateData.gender);
        const result: any = await changeMyInfo(formData);

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
    console.log(userInfo?.gender);
    return (
        <>
            {userInfo !== null && (
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
                                        <Label>닉네임</Label>
                                        <Input
                                            type="id"
                                            placeholder="닉네임을 입력하세요."
                                            name="nickname"
                                            ref={nickname}
                                            defaultValue={userInfo?.nickname}
                                        />

                                        <Label>인사말</Label>
                                        <Input
                                            placeholder="인사말을 입력하세요."
                                            name="introduce"
                                            defaultValue={userInfo?.introduce}
                                            ref={introduce}
                                        />
                                        <Label>성별</Label>
                                        <div>
                                            <span>
                                                <input
                                                    name="gender"
                                                    type="radio"
                                                    value="남"
                                                    defaultChecked={userInfo.gender === "남"}
                                                    onClick={() => handleClickRadioButton("남")}
                                                    ref={gender}
                                                ></input>
                                                <label style={{ marginRight: "40px" }}>남</label>
                                                <input
                                                    name="gender"
                                                    type="radio"
                                                    value="여"
                                                    defaultChecked={userInfo.gender === "여"}
                                                    onClick={() => handleClickRadioButton("여")}
                                                    ref={gender}
                                                ></input>
                                                여
                                            </span>
                                        </div>
                                        <Label>나이</Label>
                                        {/* <Select defaultValue={"30대"} ref={age} name="age"> */}
                                        <Select defaultValue={userInfo?.age} ref={age} name="age">
                                            {selectnum()}
                                        </Select>
                                        <Label>지역</Label>
                                        <Select
                                            defaultValue={userInfo?.region}
                                            name="local"
                                            ref={region}
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

                                        {ValidationCheck ? (
                                            <OKButton
                                                onClick={onClick}
                                                onMouseEnter={validationTrue}
                                            >
                                                회원 가입하기
                                            </OKButton>
                                        ) : (
                                            <XButton
                                                onClick={onClickPrevent}
                                                onMouseEnter={validationTrue}
                                            >
                                                회원 가입하기
                                            </XButton>
                                        )}
                                    </Form>
                                </SecondContainer1>
                            </SecondContainer>
                        </div>
                    </Container>
                </>
            )}
        </>
    );
};

export default UserInfo;
