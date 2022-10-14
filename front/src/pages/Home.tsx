import { useEffect } from "react";
import { Main, Category } from "@/styles/pages/home-style";
import { Banner } from "@/styles/banner";
import ChallengeCard from "@/components/ChallengeCard";

import { useRecoilState } from "recoil";
import DarkMode from "@/recoil/darkMode";
import urlCheck from "@/recoil/urlCheck";
export interface Props {
    mode?: string;
}

const Home = () => {
    const [darkMode] = useRecoilState(DarkMode);

    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);
    // setCurrentUrl(window.location.href);
    console.log("Home URL", window.location.href);

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, [currentUrl]);
    return (
        <div>
            <Banner />
            <Main>
                <Category>
                    <p>이런 챌린지가 있어요</p>
                    <div>
                        <ChallengeCard level="beginner" />
                        <ChallengeCard level="intermediate" />
                        <ChallengeCard level="advanced" />
                        <ChallengeCard />
                    </div>
                </Category>
                <Category>
                    <p>유저들이 선택한 챌린지</p>
                    <div>
                        <ChallengeCard level="beginner" />
                        <ChallengeCard level="intermediate" />
                        <ChallengeCard level="advanced" />
                        <ChallengeCard />
                    </div>
                </Category>
            </Main>
        </div>
    );
};

export default Home;
