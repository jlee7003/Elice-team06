import styled from "styled-components";
import { backgroundColor1, backgroundColor2, backgroundColor3, backgroundColor4 } from "./common";
import { Props } from "@components/ChallengeCard";

export const Card = styled.div`
    display: flex;
    flex-direction: column;

    grid-area: card;

    width: 303px;
    height: 274px;

    border: 1px solid #eeeeee;
    border-radius: 24px;
`;

export const CardUpper = styled.div<Props>`
    width: 100%;
    height: 40%;

    border-radius: 24px 24px 0 0;

    ${(props) =>
        props.level == "beginner"
            ? backgroundColor1
            : props.level == "intermediate"
            ? backgroundColor2
            : props.level == "advanced"
            ? backgroundColor3
            : backgroundColor4}
`;

export const CardLower = styled.div`
    width: 100%;
    height: 60%;
`;
