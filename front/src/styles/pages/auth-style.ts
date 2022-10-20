import styled, { css } from "styled-components";
import cssUnit from "@/lib/cssUnit";
import { Link } from "react-router-dom";

interface Props {
    invalid: boolean;
}

export const Main = styled.main`
    display: grid;
    width: 100%;
    height: 100vh;
    & > section > img {
        margin-bottom: 100px;
    }
    & > section {
        margin-top: 370px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ResultWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 13%;
        height: 100%;
        margin-left: 5%;
        border-radius: 15px;
        background-color: rgb(97, 190, 146);
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: #4fa17a;
        }

        i {
            color: rgb(255 255 255);
            font-size: 30px;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: fit-content;
`;

export const Label = styled.label`
    width: 500px;
    margin-bottom: 15px;
    font-size: ${cssUnit.fontSize.small};
    font-weight: bold;
`;

const commonInputStyle = css`
    width: 100%;
    height: 62px;
    padding: 10px;
    margin-bottom: 30px;
`;

export const IDInput = styled.input`
    ${commonInputStyle}
`;

export const EmailInput = styled.input<Props>`
    ${commonInputStyle}
    border: ${(props) => {
        if (props.invalid === true) {
            return "1px solid red;";
        }
    }};
    outline: none;
`;

export const Result = styled.div`
    width: 100%;
    /* width: 85%; */
    height: 62px;
    padding: 10px;
    margin-bottom: 30px;
    margin: 0;

    border-radius: 10px;
    background-color: #efefef;
    color: #4a4a4a;
    font-size: ${cssUnit.fontSize.medium};
    outline: none;
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

export const FormFooter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 15px;
    color: #7a7a7a;
    & > button {
        margin-left: 20px;
        color: #293e49;
    }
`;

export const MenuButton = styled.button`
    width: fit-content;
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: ${cssUnit.fontSize.small};
`;

export const MenuLink = styled(Link)`
    display: block;
    width: 100%;
    height: 60px;
    padding: 0;
    margin-top: 45px;
    border: 1px solid rgb(97, 190, 146);
    border-radius: 10px;
    color: rgb(97, 190, 146);
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    line-height: 60px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: rgb(97, 190, 146);
        color: #fff;
    }
`;
