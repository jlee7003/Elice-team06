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
import * as _ from "lodash";
import { writeboard } from "@/api/board";
type Props = {
    setOnModal: (state: string) => void;
    addfunction: (state: void) => void;
};

const BoardModal: React.FC<Props> = ({ setOnModal, addfunction }: Props) => {
    const title = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);

    let formData = {
        title: "",
        description: "",
    };

    const buttonClick = async () => {
        if (title.current == null || description.current == null) {
            return;
        }
        formData = {
            title: title.current?.value,
            description: description.current?.value,
        };
        console.log("formdata:", formData);
        const result = await writeboard(formData);
        console.log(result);
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
                                    <AllCenterBox></AllCenterBox>
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
                </Draggable>
            </ModalContainer>
        </ModalPortal>
    );
};

export default BoardModal;
