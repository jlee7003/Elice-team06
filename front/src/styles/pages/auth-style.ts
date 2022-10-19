import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";
import { Link } from "react-router-dom";

interface Props {
    invalid: boolean;
}

export const Main = styled.main`
    display: grid;
    /* place-items: center; */

    /* width: 100vw; */
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        width: 13%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5%;
        background-color: rgb(97, 190, 146);
        height: 100%;
        border-radius: 15px;
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: #4fa17a;
        }

        i {
            font-size: 30px;
            color: rgb(255 255 255);
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 500px;
    height: fit-content;
`;

export const Label = styled.label`
    width: 500px;

    margin-bottom: 15px;

    font-size: ${cssUnit.fontSize.small};
    font-weight: bold;
`;

export const Input = styled.input<Props>`
    width: 100%;
    height: 62px;

    margin-bottom: 30px;
    padding: 10px;

    border: ${(props) => {
        if (props.invalid === true) {
            return "1px solid red;";
        }
    }};

    outline: none;
`;

export const Result = styled.div`
    width: 100%;
    height: 62px;

    margin-bottom: 30px;
    padding: 10px;

    font-size: ${cssUnit.fontSize.medium};

    outline: none;
    //----
    margin: 0;
    background-color: #efefef;
    border-radius: 10px;
    width: 85%;
    color: #4a4a4a;
`;

export const SubmitButton = styled.button`
    all: unset;

    width: 100%;
    height: 62px;

    border: 0px solid #293e49;
    border-radius: 10px;

    color: white;
    background-color: ${cssUnit.color.green};

    text-align: center;
`;

export const FormFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

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
    color: rgb(97, 190, 146);
    font-size: 18px;
    font-weight: 600;
    border: 1px solid rgb(97, 190, 146);
    text-align: center;

    width: 100%;
    padding: 0;
    height: 60px;
    line-height: 60px;
    border-radius: 10px;
    margin-top: 45px;

    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: rgb(97, 190, 146);
        color: #fff;
    }
`;
