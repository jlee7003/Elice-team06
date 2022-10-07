import { useState } from "react";
import {
    Container,
    TopImage,
    CenterContainer,
    Main,
    Sub,
} from "../../styles/pages/challengedetail-style";
import { Logo } from "@styles/common";

import MainCard from "@components/ChallengeDetailMainCard";
import SubCard from "@components/ChallengeDetailSubCard";

const ChallengeDetail = () => {
    return (
        <>
            <TopImage></TopImage>
            <Container>
                <CenterContainer>
                    <MainCard></MainCard>
                    {/* <SubCard></SubCard> */}
                </CenterContainer>
            </Container>
        </>
    );
};

export default ChallengeDetail;
