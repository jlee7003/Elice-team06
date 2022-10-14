import React from "react";
import ModalPortal from "./ModalPortal";
import { ModalContainer, ModalBody, FlexBox } from "@/styles/modal-style";
import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "@/routes/.";
type Props = {
    children: string;
    setOnModal: (state: boolean) => void;
};

const ModalFrame: React.FC<Props> = ({ children, setOnModal }: Props) => {
    const navigate = useNavigate();
    function logout() {
        sessionStorage.removeItem("refresh");
        console.log("logout");
        navigate(ROUTES.Home.path);
    }
    return (
        <ModalPortal>
            <ModalContainer>
                {/* <ModalContainer onClick={() => setOnModal(false)}> */}
                <ModalBody>
                    <div
                        style={{
                            height: "60%",
                            display: "block",
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "right" }}>
                            <button className="close" onClick={() => setOnModal(false)}>
                                X
                            </button>
                        </div>
                        <FlexBox style={{ height: "100%" }}>{children}</FlexBox>
                        <FlexBox style={{ height: "50%" }}>
                            <button
                                className="close"
                                onClick={() => {
                                    setOnModal(false);
                                    logout();
                                }}
                                // onClick={() => logout()}
                                // onClick={logout}
                            >
                                O
                            </button>
                            <button className="close" onClick={() => setOnModal(false)}>
                                X
                            </button>
                        </FlexBox>
                    </div>
                </ModalBody>
            </ModalContainer>
        </ModalPortal>
    );
};

export default ModalFrame;
