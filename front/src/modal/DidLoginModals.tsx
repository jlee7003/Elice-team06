import React from "react";
import ModalPortal from "./ModalPortal";
import Draggable from "react-draggable";
import errorRecoil from "@/recoil/errorRecoil";
import { useRecoilState } from "recoil";
import { ROUTES } from "@/routes";
import { useNavigate } from "react-router-dom";
import { ModalContainer, ModalBody, FlexBox, Button } from "@/styles/modal-style";
type Props = {
    children: string;
    setOnModal: (state: string) => void;
};

const ErrorModal: React.FC<Props> = ({ setOnModal, children }: Props) => {
    const [error, setError] = useRecoilState(errorRecoil);
    const navigate = useNavigate();
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
                                        color: "black",
                                    }}
                                >
                                    오류
                                </div>
                                <button
                                    style={{
                                        fontSize: "28px",
                                    }}
                                    className="close"
                                    onClick={() => navigate(ROUTES.Home.path)}
                                >
                                    ❌
                                </button>
                            </div>
                            <FlexBox style={{ height: "100%", color: "black", fontSize: "20px" }}>
                                {children}
                            </FlexBox>
                        </div>
                    </ModalBody>
                </Draggable>
            </ModalContainer>
        </ModalPortal>
    );
};

export default ErrorModal;
