import { useState, useRef, MouseEvent, useEffect } from "react";
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
} from "../styles/pages/userInfo-style";
import { myInfo } from "@/api/user";
import errorRecoil from "@/recoil/errorRecoil";
import { Info } from "@/recoil/user";
import { useSetRecoilState } from "recoil";
import { changeMyInfo } from "../api/user";
interface Props {
    userInfo: {
        age: string;
        gender: string;
        introduce: string;
        nickname: string;
        profile_image: null;
        region: string;
    };
}

const UserInfoForm = (props: Props) => {
    const [userInfo, setUserInfo] = useState<Info | null>(null);
    const nickname = useRef<HTMLInputElement>(null);
    const introduce = useRef<HTMLInputElement>(null);
    const region = useRef<HTMLSelectElement>(null);
    const age = useRef<HTMLSelectElement>(null);
    const gender = useRef<HTMLInputElement>(null);
    const [ValidationCheck, setValidationCheck] = useState(false);
    const [inputStatus, setInputStatus] = useState("");
    const setError = useSetRecoilState(errorRecoil);
    const navigate = useNavigate();

    const handleClickRadioButton = (radioBtnName: string) => {
        setInputStatus(radioBtnName);
        console.log("radioBtnName:", radioBtnName, inputStatus);
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
            inputStatus == "" ||
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
                gender: inputStatus,
                introduce: introduce.current?.value,
                nickname: nickname.current?.value,
                region: region.current?.value,
                profile_image: "",
            },
        };
        const result: any = await changeMyInfo(formData);
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
        <SecondContainer>
            <SecondContainer1>
                <Form>
                    <Label>닉네임</Label>
                    <Input
                        className="input-readonly"
                        type="id"
                        placeholder="닉네임을 입력하세요."
                        name="nickname"
                        ref={nickname}
                        defaultValue={props.userInfo?.nickname}
                        readOnly
                    />

                    <Label>인사말</Label>
                    <Input
                        placeholder="인사말을 입력하세요."
                        name="introduce"
                        defaultValue={props.userInfo?.introduce}
                        ref={introduce}
                    />
                    <Label>성별</Label>
                    <div>
                        <span>
                            <input
                                name="gender"
                                type="radio"
                                value="남"
                                defaultChecked={props.userInfo?.gender === "남"}
                                onClick={() => handleClickRadioButton("남")}
                                ref={gender}
                            ></input>
                            <label style={{ marginRight: "40px" }}>남</label>
                            <input
                                name="gender"
                                type="radio"
                                value="여"
                                defaultChecked={props.userInfo?.gender === "여"}
                                onClick={() => handleClickRadioButton("여")}
                                ref={gender}
                            ></input>
                            여
                        </span>
                    </div>
                    <Label>나이</Label>
                    <Select defaultValue={props.userInfo?.age} ref={age} name="age">
                        {selectnum()}
                    </Select>
                    <Label>지역</Label>
                    <Select defaultValue={props.userInfo?.region} name="local" ref={region}>
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
                            변경하기
                        </OKButton>
                    ) : (
                        <XButton onClick={onClickPrevent} onMouseEnter={validationTrue}>
                            변경하기
                        </XButton>
                    )}
                </Form>
            </SecondContainer1>
        </SecondContainer>
    );
};

export default UserInfoForm;
