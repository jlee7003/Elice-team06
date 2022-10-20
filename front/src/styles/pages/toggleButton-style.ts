import styled, { css } from "styled-components";
import cssUnit from "@/lib/cssUnit";
import { Props } from "@/App";

export const Main = styled.main`
    display: grid;
    place-items: center;
    background-color: blue;

    width: 100vw;
    height: 100vh;

    & > section > img {
        margin-bottom: 30px;
    }

    & > section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ContainerWrap = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 500px;
    height: 400px;
`;

export const Label = styled.label`
    width: 100%;
    font-size: ${cssUnit.fontSize.normal};
    font-weight: ${cssUnit.fontWeight.bold};
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 20px;
    width: 40px;
    transform: scale(1.5);

    div {
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;
        height: 16px;
        width: 16px;
        transform: translateX(0px);
        transition: transform 0.2s linear;
    }
`;

export const Sun = styled.i`
    color: #f1c40f;
    border-radius: 50%;
    background-color: #111;
`;

export const Moon = styled.i`
    color: #f39c12;
    border-radius: 50%;
    background-color: #111;
`;
export const CheckBox = styled.input<Props>`
    opacity: 0;
    position: absolute;

    height: 30px;
    width: 60px;

    z-index: 1;
    &:checked + Label div {
        transform: translateX(20px);
    }
`;

export const SubmitButton = styled.button`
    all: unset;

    width: 100%;
    height: 62px;

    border: 0px solid #293e49;
    border-radius: 10px;

    background-color: ${cssUnit.color.green};
    color: white;

    text-align: center;
`;

export const Menu = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 15px;
    margin-top: 15px;
    background-color: red;
    ${(props) =>
        props.mode == "Light"
            ? css`
                  background-color: red;
              `
            : css`
                  background-color: red;
              `}
`;

export const MenuButton = styled.button`
    margin: 15px;

    font-size: ${cssUnit.fontSize.medium};
`;
