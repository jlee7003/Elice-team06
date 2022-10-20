import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";

export const HomeContainer = styled.div`
    width: auto !important;
    height: auto !important;
`;

// export const Main = styled.main`
//     width: ${cssUnit.unit.width};
//     height: auto;
//     min-height: 1000px;
//     padding-top: 70px;
//     padding-bottom: 120px;
//     margin: auto;
// `;

export const Category = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
`;

export const CategoryTitle = styled.h2`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 53px;
    padding-bottom: 28px;
    font-size: ${cssUnit.fontSize.medium};
    font-weight: ${cssUnit.fontWeight.bold};

    p {
        &.more {
            margin-left: 25px;
            font-size: 16px;
            color: #a5a5a5;
        }
    }
`;

export const CategoryContent = styled.div`
    display: flex;
    /* justify-content: space-between; */
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
`;

export const SkeletonContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 298px;
    height: 285px;
    & > div {
        & + div {
            margin-top: 10px;
        }
    }
`;
