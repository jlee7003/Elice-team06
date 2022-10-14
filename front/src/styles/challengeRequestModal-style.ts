import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";
// ---------------------------login-----------------------------------
export const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 115%;

    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
`;

export const FlexBox = styled.div`
    /* justify-content: center; */
    /* align-items: center; */
    height: 10%;
    text-align: center;
    /* button {
        width: 100px;
    } */
`;
export const NonFlexBox = styled.div`
    /* justify-content: center; */
    /* align-items: center; */
    height: 100%;
`;

export const ModalBody = styled.div`
    position: absolute;
    top: 40%;
    left: 45%;

    width: 1250px;
    height: 660px;

    padding: 30px;

    /* text-align: center; */

    background-color: rgb(255, 255, 255);
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

    transform: translateX(-50%) translateY(-50%);
`;

export const GrayButton = styled.button`
    all: unset;
    height: 70px;
    margin: 0px 10px;
    width: 215px;
    border: 0px solid #293e49;
    border-radius: 10px;
    background-color: #ececec;
    color: #939393;
    text-align: center;
`;

export const GreenButton = styled.button`
    all: unset;
    height: 70px;
    width: 215px;
    margin: 0px 10px;
    border: 0px solid #293e49;
    border-radius: 10px;
    background-color: #61be92;
    color: white;
    text-align: center;
`;
export const Input = styled.input`
    width: 100%;
    height: 62px;
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 10px;
    border: 1px solid #d9d9d9;
    font-size: ${cssUnit.fontSize.normal};

    &::placeholder {
        font-size: ${cssUnit.fontSize.normal};
    }
`;
export const LongInput = styled.input`
    width: 100%;
    height: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #d9d9d9;
    font-size: ${cssUnit.fontSize.normal};

    &::placeholder {
        font-size: ${cssUnit.fontSize.normal};
    }
`;

export const Label = styled.label`
    width: 100%;
    font-size: ${cssUnit.fontSize.normal};
    font-weight: ${cssUnit.fontWeight.bold};
    /* margin: 0px 15px; */
`;
// ---------------------------chalangeRequest-----------------------------------
