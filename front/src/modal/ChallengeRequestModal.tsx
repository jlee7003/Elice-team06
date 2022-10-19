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
    AllCenterBox,
    TitleBOx,
} from "@/styles/challengeRequestModal-style";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import ReactDatePicker from "@/components/ReactDatePicker";
import * as _ from "lodash";
import { getMonth, getYear } from "date-fns";
import { challenge } from "@/api/challenge";
type Props = {
    setOnModal: (state: string) => void;
    addfunction: (state: void) => void;
};

const ChallengeRequestModal: React.FC<Props> = ({ setOnModal, addfunction }: Props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const title = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);
    const goal = useRef<HTMLInputElement>(null);
    const level = useRef<HTMLInputElement>(null);
    // const proposer = useRef<HTMLInputElement>(null);

    console.log("startDate:", startDate);
    console.log("endDate:", endDate);
    let formData = {
        title: "",
        description: "",
        goal: "",
        // level: "",
        start_date: "",
        due_date: "",
        // proposer: "",
        // createdAt: "",
        // updatedAt: "",
    };
    const buttonClick = async () => {
        if (
            title.current == null ||
            description.current == null ||
            goal.current == null
            // start_date.current == null ||
            // due_date.current == null ||
        ) {
            return;
        }
        formData = {
            title: title.current?.value,
            description: description.current?.value,
            goal: goal.current?.value,
            start_date: startDate.toDateString(),
            due_date: endDate.toDateString(),
        };
        console.log("formdata:", formData);
        const result = await challenge(formData);
        console.log("요청완료");
    };

    return (
        <ModalPortal>
            <ModalContainer>
                <Draggable>
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
                                                // startDate={startDate}
                                                setEnd={setEndDate}
                                                // endDate={endDate}
                                            />
                                        </FlexBox>
                                    </AllCenterBox>
                                    <Input
                                        ref={goal}
                                        style={{ width: "50%" }}
                                        placeholder="목표량을 입력하세요."
                                    />
                                </FlexBox>
                                <Label>내용</Label>
                                <LongInput
                                    ref={description}
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
                                        buttonClick();
                                        setOnModal("false");
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
