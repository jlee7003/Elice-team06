import styled from "styled-components";
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
    top: 50%;
    left: 50%;
    z-index: 3;

    width: 400px;
    height: 300px;

    padding: 25px;

    text-align: center;

 rgb(255, 255, 255);
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

    /* transform: translateX(-50%) translateY(-50%); */
    margin-left: -200px;
    margin-top: -150px;
    box-sizing: border-box;
    border-radius: 20px;
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
    font-weight: 600;

    &:last-child {
        background-color: #aaa;
    }
`;

export const Flexbox = styled.div`
    display: flex;
`;
