import { useRef } from "react";
import ModalPortal from "./ModalPortal";
import Draggable from "react-draggable";
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
} from "@/styles/challengeRequestModal-style";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import ReactDatePicker from "@/components/ReactDatePicker";
import * as _ from "lodash";
import { getMonth, getYear } from "date-fns";

type Props = {
    setOnModal: (state: string) => void;
    addfunction: (state: void) => void;
};

const ChallengeRequestModal: React.FC<Props> = ({ setOnModal, addfunction }: Props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const tittle = useRef<HTMLInputElement>(null);
    const contents = useRef<HTMLInputElement>(null);
    console.log("startDate:", startDate);
    console.log("endDate:", endDate);
    return (
        <ModalPortal>
            <ModalContainer>
                <Draggable>
                    <ModalBody>
                        <div
                            style={{
                                height: "70%",
                                display: "block",
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: "24px",
                                        color: "black",
                                    }}
                                >
                                    나만의 챌린지 요청하기
                                </div>
                                <button
                                    style={{
                                        fontSize: "28px",
                                    }}
                                    className="close"
                                    onClick={() => setOnModal("false")}
                                >
                                    ❌
                                </button>
                            </div>
                            <NonFlexBox style={{ marginTop: "60px" }}>
                                <Label>챌린지 제목</Label>
                                <Input
                                    ref={tittle}
                                    // type="email"
                                    placeholder="챌린지 제목을 입력하세요."
                                />
                                <div style={{ display: "flex", width: "100%" }}>
                                    <Label>기간</Label>
                                    <Label>목표량</Label>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "50%",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                            }}
                                        >
                                            <ReactDatePicker />
                                        </div>
                                    </div>
                                    <Input
                                        ref={contents}
                                        style={{ width: "50%" }}
                                        placeholder="목표량을 입력하세요."
                                    />
                                </div>
                                <Label>내용</Label>
                                <LongInput
                                    ref={contents}
                                    // type="password"
                                    placeholder="챌린지 내용을 입력하세요."
                                />
                                <div style={{ marginBottom: "30px" }}>
                                    부적절한 제목이나 내용 작성 시, 운영자 또는 신고에 의해 삭제될
                                    수 있습니다
                                </div>
                            </NonFlexBox>

                            <FlexBox>
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
                                        setOnModal("false");
                                        addfunction();
                                    }}
                                >
                                    챌린지 요청하기
                                </GreenButton>
                            </FlexBox>
                        </div>
                    </ModalBody>
                </Draggable>
            </ModalContainer>
        </ModalPortal>
    );
};

export default ChallengeRequestModal;
