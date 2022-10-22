import React from "react";
import ModalPortal from "./ModalPortal";
import Draggable from "react-draggable";
import { ModalContainer, ModalBody, FlexBox, Button } from "@/styles/modal-style";
type Props = {
    setOnModal: (state: string) => void;
    logout: (state: void) => void;
};
const DragContainer: any = Draggable;
const LoginModal: React.FC<Props> = ({ setOnModal, logout }: Props) => {
    return (
        <ModalPortal>
            <DragContainer>
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
                                로그아웃
                            </div>
                            <button
                                style={{
                                    fontSize: "28px",
                                }}
                                className="close"
                                onClick={() => setOnModal("false")}
                            >
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                        <FlexBox style={{ height: "100%", color: "black", fontSize: "20px" }}>
                            로그아웃 하시겠습니까?
                        </FlexBox>
                        <FlexBox style={{ height: "50%" }}>
                            <Button
                                className="close"
                                onClick={() => {
                                    setOnModal("false");
                                    logout();
                                }}
                            >
                                <i className="ri-checkbox-blank-circle-line"></i>
                            </Button>

                            <Button className="close" onClick={() => setOnModal("false")}>
                                <i className="ri-close-line"></i>
                            </Button>
                        </FlexBox>
                    </div>
                </ModalBody>
            </DragContainer>
            {/* </ModalContainer> */}
        </ModalPortal>
    );
};

export default LoginModal;
