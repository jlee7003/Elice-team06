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

export interface Props {
    mode?: string;
}

const Home = () => {
    const [darkMode] = useRecoilState(DarkMode);
    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);
    const [resizeWidth, setResizeWidth] = useState(window.innerWidth); //리사이징 화면 높이 값
    const [innerWidth, setInnerWidth] = useState(window.innerWidth); // 초기 랜더링 시 화면 높이 값
    // const [num, setNum] = useState(0);

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

    const bannerArray = ["banner1", "banner2", "banner3"];

    let num = 0;

    // setInterval(() => {
    //     if (num === 2) {
    //         num = -1;
    //     }
    //     num += 1;

    //     console.log(num);
    // }, 5000);

    // if (num === 0) {
    //     bannerRef.current[0].style.opacity = `1`;
    //     bannerRef.current[1].style.opacity = `0`;
    //     bannerRef.current[2].style.opacity = `0`;
    // }
    // if (num === 1) {
    //     bannerRef.current[0].style.opacity = `0`;
    //     bannerRef.current[1].style.opacity = `1`;
    //     bannerRef.current[2].style.opacity = `0`;
    // }
    // if (num === 2) {
    //     bannerRef.current[0].style.opacity = `0`;
    //     bannerRef.current[1].style.opacity = `0`;
    //     bannerRef.current[2].style.opacity = `1`;
    // }
    /*
        num useState 상태관리하면서 하자.....
    */

    const onSlideBannerLeft = () => {
        if (num === 0) {
            num = 3;
        }
        num -= 1;
        console.log(num);
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

        console.log(num);
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

    return (
        <HomeContainer>
            {/* <Banner mode={darkMode ?? "Light"} /> */}
            {/* <ChallengeSlide>
                <input type="radio" name="slide" id="slide01" defaultChecked />
                <input type="radio" name="slide" id="slide02" />
                <input type="radio" name="slide" id="slide03" />
                <SlideContent>
                    <ul>
                        <SlideList slideBgImg={assets("bus_img.png")}>
                            <a>
                                <span>대중교통 타기</span>
                            </a>
                        </SlideList>
                        <SlideList slideBgImg={assets("plant_tree_img.png")}>
                            <a>
                                <span>한달에 한번 식물 심기</span>
                            </a>
                        </SlideList>
                        <SlideList slideBgImg={assets("recycle_img.png")}>
                            <a>
                                <span>재활용 잘하기</span>
                            </a>
                        </SlideList>
                    </ul>
                    <SlideControl>
                        <Control className="control01">
                            <label htmlFor="slide03" className="left">
                                <ArrowIcon />
                            </label>
                            <label htmlFor="slide02" className="right">
                                <ArrowIcon rotate="rotate(180deg)" />
                            </label>
                        </Control>
                        <Control className="control02">
                            <label htmlFor="slide01" className="left">
                                <ArrowIcon />
                            </label>
                            <label htmlFor="slide03" className="right">
                                <ArrowIcon rotate="rotate(180deg)" />
                            </label>
                        </Control>
                        <Control className="control03">
                            <label htmlFor="slide02" className="left">
                                <ArrowIcon />
                            </label>
                            <label htmlFor="slide01" className="right">
                                <ArrowIcon rotate="rotate(180deg)" />
                            </label>
                        </Control>
                    </SlideControl>
                </SlideContent>
            </ChallengeSlide> */}
            <HomeBanners>
                {bannerArray.map((item, index) => {
                    return (
                        <Banner
                            key={index}
                            ref={(el: HTMLDivElement) => {
                                bannerRef.current[index] = el;
                            }}
                        >
                            <p>{item}</p>
                        </Banner>
                    );
                })}
                <ControlBanner>
                    <div>
                        <p onClick={onSlideBannerLeft}>left</p>
                        <p onClick={onSlideBannerRight}>right</p>
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
