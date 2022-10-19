import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";

interface Props {
    invalid: boolean;
}

export const Main = styled.main`
    display: grid;
    place-items: center;

    width: 100vw;
    height: 100vh;

    & > section > img {
        margin-bottom: 100px;
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
