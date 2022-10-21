import React from "react";
import ModalPortal from "./ModalPortal";
import Draggable from "react-draggable";
import { ModalContainer, ModalBody, FlexBox, Button } from "@/styles/modal-style";

type Props = {
    modalOpen: number;
    closeModal: any;
    trigger: any;
};

const AlertModal: React.FC<Props> = ({ modalOpen, closeModal, trigger }: Props) => {
    return (
        <ModalPortal>
            {/* <ModalContainer> */}
            <Draggable>
                <ModalBody style={{ visibility: modalOpen !== 0 ? "visible" : "hidden" }}>
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
                                {modalOpen}번째 게시글 삭제
                            </div>
                            <button
                                style={{
                                    fontSize: "28px",
                                }}
                                className="close"
                                onClick={() => {
                                    closeModal();
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
                                data-post-id={`${modalOpen}`}
                                className="close"
                                onClick={() => {
                                    closeModal();
                                    trigger(modalOpen);
                                }}
                            >
                                <i className="ri-checkbox-blank-circle-line"></i>
                            </Button>

                            <Button
                                className="close"
                                onClick={() => {
                                    closeModal();
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
