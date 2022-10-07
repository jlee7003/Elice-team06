import styled from "styled-components";
import { mainGreen, mainBlue, mainPurple, mainGray } from "./common";
import { Props } from "@components/ChallengeCard";

export const Card = styled.article`
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
            ? mainGreen
            : props.level == "intermediate"
            ? mainBlue
            : props.level == "advanced"
            ? mainPurple
            : mainGray}
`;

export const CardLower = styled.div`
    width: 100%;
    height: 60%;
`;
