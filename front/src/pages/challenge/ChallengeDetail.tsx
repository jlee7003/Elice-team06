import { useRecoilState } from "recoil";
import { Container, CenterContainer } from "../../styles/pages/challengedetail-style";
import { Logo } from "@/styles/common";

import { HomeBanners, Banner } from "@/styles/banner";
import { Main } from "@/components/common/Main";
import MainCard from "@/components/ChallengeDetailMainCard";
import DarkMode from "@/recoil/darkMode";
import challenge_detail_banner from "@/assets/challenge_detail_banner.png";

const ChallengeDetail = () => {
    const [darkMode] = useRecoilState(DarkMode);
    return (
        <>
            <HomeBanners mode={darkMode ?? "Light"} height="190px">
                <Banner
                    bgImg={challenge_detail_banner}
                    bgColor="linear-gradient(45deg,#61be92,#289ba7,#5f8560)"
                    bgPosition="center -35px"
                    bgSize="524px"
                >
                    <p>
                        <span>도전! 탄소 줄이기</span>
                    </p>
                </Banner>
            </HomeBanners>
            <Main>
                <CenterContainer>
                    <MainCard></MainCard>
                </CenterContainer>
            </Main>
        </>
    );
};

export default ChallengeDetail;
