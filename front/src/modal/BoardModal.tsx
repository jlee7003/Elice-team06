import { useRef, MouseEvent, useState } from "react";
import ModalPortal from "./ModalPortal";
import Draggable from "react-draggable";
import {
    ModalContainer,
    ModalBody,
    LongInput,
    FlexBox,
    GrayButton,
    Label,
    Input,
    NonFlexBox,
    AllCenterBox,
    TitleBOx,
    OKButton,
    XButton,
} from "@/styles/challengeRequestModal-style";
import * as _ from "lodash";
import { writeboard } from "@/api/board";
type Props = {
    setOnModal: (state: string) => void;
    addfunction: (state: void) => void;
};
const DragContainer: any = Draggable;
const BoardModal: React.FC<Props> = ({ setOnModal, addfunction }: Props) => {
    const title = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);
    const [ValidationCheck, setValidationCheck] = useState(false);

    let formData = {
        title: "",
        description: "",
    };
    const validationTrue = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        isvalidationtrue();
    };
    const onClickPrevent = (e: MouseEvent<HTMLButtonElement>) => {
        alert("빈 값이 있습니다.");
        e.preventDefault();
    };
    function isvalidationtrue() {
        if (title.current == null || description.current == null) {
            return;
        }
        if (title.current?.value == "" || description.current?.value == "") {
            setValidationCheck(false);
            return;
        }
        setValidationCheck(true);
    }
    const buttonClick = async () => {
        if (title.current == null || description.current == null) {
            return;
        }
        formData = {
            title: title.current?.value,
            description: description.current?.value,
        };
        if (title.current.value == "" || description.current.value == "") {
            alert("내용을 채워주세요");
            return;
        }
        const result = await writeboard(formData);
    };

    return (
        <ModalPortal>
            <ModalContainer>
                <DragContainer>
                    <ModalBody>
                        <div>
                            <TitleBOx>
                                <h1>게시글 작성</h1>
                                <button className="close" onClick={() => setOnModal("false")}>
                                    ❌
                                </button>
                            </TitleBOx>
                            <NonFlexBox style={{ marginTop: "60px" }}>
                                <Label>
                                    <h2>제목</h2>
                                </Label>
                                <Input ref={title} placeholder="글 제목을 입력하세요." />
                                <div style={{ display: "flex", width: "100%" }}></div>
                                <FlexBox>
                                    <AllCenterBox></AllCenterBox>
                                </FlexBox>
                                <Label>
                                    <h2>내용</h2>
                                </Label>
                                <LongInput ref={description} placeholder="내용을 입력하세요." />
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

                                {ValidationCheck ? (
                                    <OKButton onClick={buttonClick} onMouseEnter={validationTrue}>
                                        등록하기
                                    </OKButton>
                                ) : (
                                    <XButton onClick={onClickPrevent} onMouseEnter={validationTrue}>
                                        등록하기
                                    </XButton>
                                )}
                            </FlexBox>
                        </div>
                    </ModalBody>
                </DragContainer>
            </ModalContainer>
        </ModalPortal>
    );
};

export default BoardModal;
