import styled from "styled-components";
import { HeaderMenuContainer } from "../common/Header-style";

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

    width: 500px;
    height: 400px;

    // border: 2px solid #536976;
    // border-radius: 20px;
`;

export const Input = styled.input`
    width: 411px;
    height: 62px;
    border: 1px solid #d9d9d9;
    background-color: #fbfbfb;
    margin-bottom: 30px;
    padding: 10px;
`;

export const Button = styled.button`
    all: unset;

    text-align: center;
    width: 411px;
    height: 62px;
    background-color: #75c6a0;
    border: 0px solid #293e49;
    border-radius: 10px;
    color: white;
`;

export const MenuItem = styled.div`
    margin: 15px;
    font-size: 14px;
`;

export const LoginContainer = styled.div`
    // text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #7a7a7a;
    margin-bottom: 15px;
    margin-top: 15px;
`;
export const LogoContainer = styled.div`
    // text-align: center;
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
`;
export const Textleft = styled.span`
    display: block;
    width: 100%;
    padding: 10px 50px;
    font-weight: bold;
    font-family: Noto Sans;
`;
export const TopImage = styled.span`
    display: block;
    width: 100%;
    height: 181px;
    background-color: gray;
    padding: 10px 50px;
`;
