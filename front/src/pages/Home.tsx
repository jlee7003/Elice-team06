import { useEffect, useRef, useState } from "react";
import {
    HomeContainer,
    Main,
    Category,
    CategoryTitle,
    CategoryContent,
} from "@/styles/pages/home-style";
// import {
//     ChallengeSlide,
//     SlideContent,
//     SlideControl,
//     Control,
//     ArrowIcon,
//     SlideList,
// } from "@/styles/banner";
import { HomeBanners, ControlBanner, Banner } from "@/styles/banner";
import ChallengeCard from "@/components/ChallengeCard";

import { useRecoilState } from "recoil";
import DarkMode from "@/recoil/darkMode";
import urlCheck from "@/recoil/urlCheck";
import assets from "@/lib/assets";
import icons from "@/lib/icons";

export interface Props {
    mode?: string;
}

const Home = () => {
    const [darkMode] = useRecoilState(DarkMode);
    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);
    const [resizeWidth, setResizeWidth] = useState(window.innerWidth); //리사이징 화면 높이 값
    const [innerWidth, setInnerWidth] = useState(window.innerWidth); // 초기 랜더링 시 화면 높이 값
    // const [bannerCount, setBannerCount] = useState(0);

    const bannerRef = useRef<HTMLDivElement[]>([]);

    // setCurrentUrl(window.location.href);
    console.log("Home URL", window.location.href);

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, [currentUrl]);

    useEffect(() => {
        if (bannerRef.current) {
            bannerRef.current[0].style.opacity = "1";
            bannerRef.current[1].style.opacity = "0";
            bannerRef.current[2].style.opacity = "0";
        }

        setInnerWidth(resizeWidth);

        const handleResize = () => {
            setResizeWidth(window.innerWidth);
            setInnerWidth(resizeWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [innerWidth]);

    const bannerArray = [
        "건강도 지키는 자전거 타기",
        "외출 시엔 대중교통 사용",
        "한 달에 한번 나무 심기",
    ];

    let num = 0;

    const onSlideBannerLeft = () => {
        if (num === 0) {
            num = 3;
        }
        num -= 1;
        // setBannerCount((prev) => {
        //     console.log(bannerCount);
        //     return prev === 0 ? (prev = 2) : (prev -= 1);
        //     // return (prev -= 1);
        // });

        if (bannerRef.current === null) {
            return;
        }

        if (num === 0) {
            bannerRef.current[0].style.opacity = `1`;
            bannerRef.current[1].style.opacity = `0`;
            bannerRef.current[2].style.opacity = `0`;
        }
        if (num === 1) {
            bannerRef.current[0].style.opacity = `0`;
            bannerRef.current[1].style.opacity = `1`;
            bannerRef.current[2].style.opacity = `0`;
        }
        if (num === 2) {
            bannerRef.current[0].style.opacity = `0`;
            bannerRef.current[1].style.opacity = `0`;
            bannerRef.current[2].style.opacity = `1`;
        }
    };

    const onSlideBannerRight = () => {
        if (num === 2) {
            num = -1;
        }

        num += 1;

        // setBannerCount((prev) => {
        //     console.log(bannerCount);
        //     return prev === 2 ? (prev = 0) : (prev += 1);
        //     // return (prev += 1);
        // });

        // console.log(num);
        if (bannerRef.current === null) {
            return;
        }

        if (num === 0) {
            bannerRef.current[0].style.opacity = `1`;
            bannerRef.current[1].style.opacity = `0`;
            bannerRef.current[2].style.opacity = `0`;
        }
        if (num === 1) {
            bannerRef.current[0].style.opacity = `0`;
            bannerRef.current[1].style.opacity = `1`;
            bannerRef.current[2].style.opacity = `0`;
        }
        if (num === 2) {
            bannerRef.current[0].style.opacity = `0`;
            bannerRef.current[1].style.opacity = `0`;
            bannerRef.current[2].style.opacity = `1`;
        }
    };

    const leftArrow = icons("arrow_side_icon.png");

    return (
        <HomeContainer>
            <HomeBanners mode={darkMode ?? "Light"}>
                {bannerArray.map((item, index) => {
                    return (
                        <Banner
                            key={index}
                            ref={(el: HTMLDivElement) => {
                                bannerRef.current[index] = el;
                            }}
                        >
                            <p>
                                <span>{item}</span>
                            </p>
                        </Banner>
                    );
                })}
                <ControlBanner>
                    <div>
                        <p onClick={onSlideBannerLeft}>
                            {/* <img src={leftArrow} alt="leftArrow" /> */}
                            <i className="ri-arrow-left-s-line"></i>
                        </p>
                        <p onClick={onSlideBannerRight}>
                            {/* <img
                                src={leftArrow}
                                alt="rightArrow"
                                style={{ transform: "rotate(180deg)" }}
                            /> */}
                            <i className="ri-arrow-right-s-line"></i>
                        </p>
                    </div>
                </ControlBanner>
            </HomeBanners>
            <Main>
                <Category>
                    <CategoryTitle>
                        <p>이런 챌린지가 있어요</p>
                    </CategoryTitle>

                    <CategoryContent>
                        <ChallengeCard level="beginner" grade={true} />
                        <ChallengeCard level="intermediate" grade={true} />
                        <ChallengeCard level="advanced" grade={true} />
                        <ChallengeCard grade={true} />
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
                        <ChallengeCard />
                        <ChallengeCard />
                        <ChallengeCard />
                        <ChallengeCard />
                    </CategoryContent>
                </Category>
            </Main>
        </HomeContainer>
    );
};

export default Home;
