import React from "react";
import ModalPortal from "./ModalPortal";
import Draggable from "react-draggable";
import { ModalContainer, ModalBody, FlexBox, Button } from "@/styles/modal-style";

// ( prop: { setOnModal: any; trigger: any } ) [ ]

type Props = {
    setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
    trigger: any; //React.Dispatch<React.SetStateAction<boolean>>;
    name: string;
};
const Draggable1: any = Draggable;
const AlertModal: React.FC<Props> = ({ setOnModal, trigger, name }: Props) => {
    return (
        <ModalPortal>
            {/* <ModalContainer> */}
            <Draggable1>
                <ModalBody>
                    <div
                        style={{
                            height: "60%",
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
                                게시글 삭제
                            </div>
                            <button
                                style={{
                                    fontSize: "28px",
                                }}
                                className="close"
                                onClick={() => {
                                    console.log("window의 x창이야");
                                    setOnModal(false);
                                    // () => {
                                    //     setOnModal(false);
                                    // };
                                }}
                            >
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                        <FlexBox style={{ height: "100%", color: "black", fontSize: "20px" }}>
                            삭제 하시겠습니까?
                        </FlexBox>
                        <FlexBox style={{ height: "50%" }}>
                            <Button
                                className="close"
                                onClick={() => {
                                    console.log("모달에서 삭제해용");
                                    setOnModal(false);
                                    trigger(name);
                                    // () => {
                                    //     setOnModal(false);
                                    // };
                                    // () => {
                                    //     trigger(true);
                                    // };
                                }}
                            >
                                <i className="ri-checkbox-blank-circle-line"></i>
                            </Button>

                            <Button
                                className="close"
                                onClick={() => {
                                    console.log("모달에서 취소해용");
                                    setOnModal(false);
                                    // () => {
                                    //     setOnModal(false);
                                    // };
                                }}
                            >
                                <i className="ri-close-line"></i>
                            </Button>
                        </FlexBox>
                    </div>
                </ModalBody>
            </Draggable1>
            {/* </ModalContainer> */}
        </ModalPortal>
    );
};

export default AlertModal;
