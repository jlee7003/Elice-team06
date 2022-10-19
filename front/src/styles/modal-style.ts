import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";
// ---------------------------login-----------------------------------
export const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 150%;

    background-color: rgba(0, 0, 0, 0.4);
    z-index: 11;
`;

export const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        width: 100px;
    }
`;

export const ModalBody = styled.div`
    position: absolute;
    top: 40%;
    left: 45%;

    width: 400px;
    height: 300px;

    padding: 15px;

    text-align: center;

    background-color: rgb(255, 255, 255);
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

    transform: translateX(-50%) translateY(-50%);
`;

export const Button = styled.button`
    all: unset;
    height: 55px;
    margin: 0px 10px;
    border: 0px solid #293e49;
    border-radius: 10px;
    background-color: #61be92;
    color: white;
    text-align: center;
`;

export const Flexbox = styled.div`
    display: flex;
`;

// ---------------------------chalangeRequest-----------------------------------
