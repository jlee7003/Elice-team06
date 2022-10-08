import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";

export const Main = styled.main`
    display: flex;
    flex-direction: column;

    width: ${cssUnit.unit.width};
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

        font-size: ${cssUnit.fontSize.medium};
    }

    & > div {
        display: flex;
        justify-content: space-between;

        width: 100%;
    }
`;
