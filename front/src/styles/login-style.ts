import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    place-items: center;

    width: 100vw;
    height: 100vh;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 500px;
    height: 500px;

    border: 2px solid #536976;
    border-radius: 20px;
`;

export const Input = styled.input`
    width: 300px;
    height: 50px;
    border: 2px solid #293e49;

    margin-bottom: 30px;
`;

export const Button = styled.button`
    all: unset;

    text-align: center;
    width: 200px;

    border: 2px solid #293e49;
    border-radius: 20px;
`;
