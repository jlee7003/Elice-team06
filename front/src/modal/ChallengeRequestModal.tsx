import {
    ModalContainer,
    ModalBody,
    LongInput,
    FlexBox,
    GrayButton,
    GreenButton,
    Label,
    Input,
    NonFlexBox,
    AllCenterBox,
    TitleBOx,
    Select,
} from "@/styles/challengeRequestModal-style";
import { useRef } from "react";
import ModalPortal from "./ModalPortal";
import Draggable from "react-draggable";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import ReactDatePicker from "@/components/ReactDatePicker";
import * as _ from "lodash";
import { challengeResult } from "@/types/challengeTypes";
import API from "@/api/index";
import { min } from "lodash";

type Props = {
    setOnModal: (state: string) => void;
    addfunction: (state: void) => void;
};
const Draggable1: any = Draggable;
const ChallengeRequestModal: React.FC<Props> = ({ setOnModal, addfunction }: Props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const title = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);
    const goal = useRef<HTMLInputElement>(null);
    const level = useRef<HTMLInputElement>(null);
    // const level = useRef<HTMLInputElement>(null);

    let formData = {
        title: "",
        description: "",
        goal: "",
        start_date: "",
        due_date: "",
        level: "",
    };
    const buttonClick = async () => {
        if (
            title.current == null ||
            description.current == null ||
            goal.current == null ||
            level.current.value == null
        ) {
            return;
        }
        formData = {
            title: title.current?.value,
            description: description.current?.value,
            goal: goal.current?.value,
            start_date: startDate.toDateString(),
            due_date: endDate.toDateString(),
            level: level.current.value,
        };
        console.log("formdata:", formData);
        await API.post<challengeResult>(["challenge"], formData);
        console.log("요청완료");
    };

    return (
        <ModalPortal>
            <ModalContainer>
                <Draggable1>
                    <ModalBody>
                        <div>
                            <TitleBOx>
                                <div>나만의 챌린지 요청하기</div>
                                <button className="close" onClick={() => setOnModal("false")}>
                                    ❌
                                </button>
                            </TitleBOx>
                            <NonFlexBox style={{ marginTop: "60px" }}>
                                <Label>챌린지 제목</Label>
                                <Input ref={title} placeholder="챌린지 제목을 입력하세요." />
                                <div style={{ display: "flex", width: "100%" }}>
                                    <Label>기간</Label>
                                    <Label>목표량</Label>
                                </div>
                                <FlexBox>
                                    <AllCenterBox>
                                        <FlexBox>
                                            <ReactDatePicker
                                                setStart={setStartDate}
                                                setEnd={setEndDate}
                                            />
                                        </FlexBox>
                                    </AllCenterBox>
                                    <Input
                                        ref={goal}
                                        style={{ width: "50%", marginLeft: "20px" }}
                                        placeholder="목표량을 입력하세요."
                                    />
                                </FlexBox>
                                <div style={{ display: "flex", width: "100%" }}>
                                    <Label style={{ marginBottom: "20px" }}>레벨</Label>
                                </div>
                                <Select name="local" ref={level}>
                                    <option value="beginner">beginner</option>
                                    <option value="intermediate">intermediate</option>
                                    <option value="advanced">advanced</option>
                                    <option value="default">default</option>
                                </Select>

                                <div>
                                    <Label>내용</Label>
                                </div>
                                <LongInput
                                    ref={description}
                                    placeholder="챌린지 내용을 입력하세요."
                                />
                                <div style={{ marginBottom: "30px" }}>
                                    부적절한 제목이나 내용 작성 시, 운영자 또는 신고에 의해 삭제될
                                    수 있습니다
                                </div>
                            </NonFlexBox>

                            <FlexBox style={{ justifyContent: "center" }}>
                                <GrayButton
                                    className="close"
                                    onClick={() => {
                                        setOnModal("false");
                                    }}
                                >
                                    돌아가기
                                </GrayButton>

                                <GreenButton
                                    className="close"
                                    onClick={() => {
                                        buttonClick();
                                        setOnModal("false");
                                    }}
                                >
                                    챌린지 요청하기
                                </GreenButton>
                            </FlexBox>
                        </div>
                    </ModalBody>
                </Draggable1>
            </ModalContainer>
        </ModalPortal>
    );
};

export default ChallengeRequestModal;
