import { useEffect } from "react";
import { Main, Category, CategoryTitle, CategoryContent } from "@/styles/pages/home-style";
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
                    <CategoryTitle>
                        <p>이런 챌린지가 있어요</p>
                    </CategoryTitle>

                    <CategoryContent>
                        <ChallengeCard level="beginner" />
                        <ChallengeCard level="intermediate" />
                        <ChallengeCard level="advanced" />
                        <ChallengeCard />
                    </CategoryContent>
                </Category>
                <Category>
                    <CategoryTitle>
                        <p>유저들이 선택한 챌린지</p>
                        <p className="more">
                            <a>더보기 &gt;</a>
                        </p>
                    </CategoryTitle>
                    <CategoryContent>
                        <ChallengeCard level="beginner" />
                        <ChallengeCard level="intermediate" />
                        <ChallengeCard level="advanced" />
                        <ChallengeCard />
                    </CategoryContent>
                </Category>
            </Main>
        </div>
    );
};

export default Home;
