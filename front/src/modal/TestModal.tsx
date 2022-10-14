import React from "react";
import ModalFrame from "./ModalFrame";

type Props = {
    setOnModal: (state: boolean) => void;
    // logout: () => void;
};

const TestModal: React.FC<Props> = ({ setOnModal }) => {
    // console.log(logout(), 11);
    return <ModalFrame setOnModal={setOnModal}>로그아웃 하시겠습니까?</ModalFrame>;
};
export default TestModal;
