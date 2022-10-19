import cssUnit from "@/lib/cssUnit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PaginationBox = styled.div`
    width: ${cssUnit.unit.width};

    margin-top: 50px;

    text-align: center;
`;

const PaginationButtonStyle = css`
    font-size: ${cssUnit.fontSize.large};
`;

export const ControlButton = styled.button`
    ${PaginationButtonStyle}
`;

export const NumberButton = styled.button`
    font-size: ${cssUnit.fontSize.medium};

    margin: 10px;
    /* & + & {
        margin-left: 10px;
    } */
`;
