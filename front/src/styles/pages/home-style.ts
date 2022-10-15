import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";

export const Main = styled.main`
    width: ${cssUnit.unit.width};
    height: 70vh;

    margin: auto;
    padding-top: 70px;
`;

export const Category = styled.div`
    display: flex;
    flex-wrap: wrap;

    // width: 80%;
    width: 100%;

    margin: auto;

    & + div {
        margin-top: 100px;
    }

    /* & > p {
        grid-area: title;
        width: 100%;
        height: 53px;
    } */

    & > div {
    }
`;

export const CategoryTitle = styled.h2`
    width: 100%;
    height: 53px;
    padding-bottom: 28px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: ${cssUnit.fontWeight.bold};
    font-size: ${cssUnit.fontSize.medium};

    p {
        &.more {
            font-size: 16px;
            margin-left: 25px;
            color: #a5a5a5;
        }
    }
`;

export const CategoryContent = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
`;
