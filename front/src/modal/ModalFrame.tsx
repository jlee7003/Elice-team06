import React from "react";
import ModalPortal from "./ModalPortal";
import Draggable from "react-draggable";
import { ModalContainer, ModalBody, FlexBox, Button } from "@/styles/modal-style";
type Props = {
    children: string;
    setOnModal: (state: boolean) => void;
    logout: (state: void) => void;
};

const ModalFrame: React.FC<Props> = ({ children, setOnModal, logout }: Props) => {
    return (
        <ModalPortal>
            <ModalContainer>
                <Draggable>
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
                                        fontSize: "26px",
                                    }}
                                >
                                    로그아웃
                                </div>
                                <button
                                    style={{
                                        fontSize: "28px",
                                    }}
                                    className="close"
                                    onClick={() => setOnModal(false)}
                                >
                                    ❌
                                </button>
                            </div>
                            <FlexBox style={{ height: "100%" }}>{children}</FlexBox>
                            <FlexBox style={{ height: "50%" }}>
                                <Button
                                    className="close"
                                    onClick={() => {
                                        setOnModal(false);
                                        logout();
                                    }}
                                >
                                    O
                                </Button>

                                <Button className="close" onClick={() => setOnModal(false)}>
                                    X
                                </Button>
                            </FlexBox>
                        </div>
                    </ModalBody>
                </Draggable>
            </ModalContainer>
        </ModalPortal>
    );
};

export default ModalFrame;
