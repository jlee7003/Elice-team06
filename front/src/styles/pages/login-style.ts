import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    place-items: center;

    width: 100vw;
    height: 100vh !important;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
    width: 500px;
    height: 300px;

    // border: 2px solid #536976;
    // border-radius: 20px;
`;

export const Input = styled.input`
    width: 300px;
    height: 50px;
    border: 0px solid #293e49;

    margin-bottom: 30px;
`;

export const Button = styled.button`
    all: unset;

    text-align: center;
    width: 200px;

    border: 1px solid #293e49;
    // border-radius: 20px;
`;

export const MenuItem = styled.div`
    margin-bottom: 15px;
    margin-top: 15px;
`;

export const LoginContainer = styled.div`
    text-align: center;
`;
export const LogoContainer = styled.div`
    // text-align: center;
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
`;
