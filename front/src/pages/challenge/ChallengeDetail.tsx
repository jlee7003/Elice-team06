import { Container, TopImage, CenterContainer } from "../../styles/pages/challengedetail-style";
import { Logo } from "@/styles/common";

import MainCard from "@/components/ChallengeDetailMainCard";
// import SubCard from "@/components/ChallengeDetailSubCard";

const ChallengeDetail = () => {
    return (
        <>
            <TopImage></TopImage>
            <Container>
                <CenterContainer>
                    <MainCard></MainCard>
                </CenterContainer>
            </Container>
        </>
    );
};

export default ChallengeDetail;
