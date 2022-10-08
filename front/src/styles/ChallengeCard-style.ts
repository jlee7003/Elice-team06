import styled from "styled-components";
import { Props } from "@/components/ChallengeCard";
import cssUnit from "@/lib/cssUnit";

export const Card = styled.article`
    display: flex;
    flex-direction: column;

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
            ? cssUnit.color.green
            : props.level == "intermediate"
            ? cssUnit.color.blue
            : props.level == "advanced"
            ? cssUnit.color.purple
            : cssUnit.color.gray}
`;

export const CardLower = styled.div`
    width: 100%;
    height: 60%;
`;
