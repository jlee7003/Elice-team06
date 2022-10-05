import styled from "styled-components";
import { width, fontSize2 } from "../common";

export const Main = styled.main`
    display: flex;
    flex-direction: column;

    ${width};
    height: 70vh;

    padding-top: 70px;
`;

export const Category = styled.div`
    display: flex;
    flex-wrap: wrap;

    // width: 80%;
    width: 100%;

    margin: auto;
    & > p {
        grid-area: title;
        width: 100%;
        height: 53px;

        ${fontSize2}
    }

    & > div {
        display: flex;
        justify-content: space-between;

        width: 100%;
    }
`;
