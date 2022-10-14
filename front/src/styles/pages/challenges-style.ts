import styled from "styled-components";
import cssUnit from "@/lib/cssUnit";
import { Card, CardUpper as upper, CardLower as lower } from "@/styles/ChallengeCard-style";

export const Main = styled.main`
    width: ${cssUnit.unit.width};
    height: 100vh;

    margin: auto;
`;

export const CardSection = styled.section`
    display: grid;
    grid-template-areas:
        "card card card card"
        "card card card card";
    gap: 40px;

    height: 50vh;
`;

export const CardBox = styled(Card)`
    grid-area: "card";

    margin: 0px;
    padding: 0px;
`;

export const CardUpper = styled(upper)``;
export const CardLower = styled(lower)``;
