import styled from "styled-components";
import { width } from "../common";

export const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    ${width};
    height: 70vh;

    border: 1px solid black;
`;

export const Category = styled.div`
    display: flex;

    $ > p {
    }
`;
