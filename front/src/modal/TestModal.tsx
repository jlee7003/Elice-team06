import React from "react";
import ModalFrame from "./ModalFrame";

type Props = {
    setOnModal: (state: boolean) => void;
    logout: (state: void) => void;
};

const TestModal: React.FC<Props> = ({ setOnModal, logout }) => {
    return (
        <ModalFrame setOnModal={setOnModal} logout={logout}>
            로그아웃 하시겠습니까?
        </ModalFrame>
    );
};
export default TestModal;
