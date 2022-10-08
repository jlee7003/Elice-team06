import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";

export const Main = styled.main`
    display: grid;
    place-items: center;

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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 500px;
    height: 400px;
`;

export const Label = styled.label`
    width: ${cssUnit.unit.formWidth};
    margin-bottom: 15px;
`;

export const ErrorInfo = styled.div`
    width: ${cssUnit.unit.formWidth};

    height: 60px;

    font-size: ${cssUnit.fontSize.medium};
    text-align: center;
    line-height: 52px;

    border-radius: 20px;

    background-color: red;
    color: white;

    opacity: 0.6;
`;

export const Input = styled.input`
    width: 100%;
    height: 62px;

    margin-bottom: 30px;
    padding: 10px;

    border: 1px solid #d9d9d9;
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

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 15px;
    margin-top: 15px;

    color: #7a7a7a;
`;

export const MenuButton = styled.button`
    margin: 15px;

    font-size: ${cssUnit.fontSize.medium};
`;
