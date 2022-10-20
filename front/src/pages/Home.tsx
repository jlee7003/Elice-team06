import { useEffect, useRef, useState } from "react";
import {
    HomeContainer,
    // Main,
    Category,
    CategoryTitle,
    CategoryContent,
    SkeletonContent,
} from "@/styles/pages/home-style";
import { Main } from "@/components/common/Main";
import { HomeBanners, ControlBanner, Banner } from "@/styles/banner";
import ChallengeCard from "@/components/ChallengeCard";

import { useRecoilState } from "recoil";
import DarkMode from "@/recoil/darkMode";
import { ChallengeList } from "@/recoil/ChallengeRecoil";
import urlCheck from "@/recoil/urlCheck";
import { getChallengeList } from "@/api/challenge";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import assets from "@/lib/assets";

export interface Props {
    mode?: string;
}

const Home = () => {
    const [resizeWidth, setResizeWidth] = useState(window.innerWidth); //리사이징 화면 높이 값
    const [boardList, setBoardList] = useRecoilState(ChallengeList);
    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);
    const [darkMode] = useRecoilState(DarkMode);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth); // 초기 랜더링 시 화면 높이 값
    const [isLoaded, setIsLoaded] = useState(false); //카드 데이터 로딩 상태 값
    const bannerRef = useRef<HTMLDivElement[]>([]);
    let d = new Date();
    let e = new Date();
    const startDate = `${d.getMonth() + 1}-${d.getDate()}`;
    const endDate = `${e.getMonth() + 1}-${e.getDate()}`;
    const start = 1;
    const end = 8;
    const count = 1;
    let num = 0;

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, [currentUrl]);

    useEffect(() => {
        const timer = setTimeout(() => {
            getBoardData();
        }, 0);

        return () => clearTimeout(timer);
    }, []);

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
        "한 달에 한 번 나무 심기",
    ];

    const getBoardData = async () => {
        await getChallengeList(start, end, count).then((res) => {
            if (res === null) {
                return;
            }
            setBoardList(res.data);

            d = new Date(boardList[0]?.start_date);
            e = new Date(boardList[0]?.due_date);
        });
        setIsLoaded(true);
    };
    const onSlideBannerLeft = () => {
        if (num === 0) {
            num = 3;
        }
        num -= 1;

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

    const contentsLength = [0, 1, 2, 3, 4, 5, 6, 7];

    const bgImgArray = [
        assets("banner_cycle.png"),
        assets("banner_bus.png"),
        assets("banner_plant.png"),
    ];

    const bgColorArray = [
        "linear-gradient(45deg, #61be92, #56676e, black)",
        "linear-gradient(45deg, #61be92, #63433e, black)",
        "linear-gradient(45deg, #61be92, #cab8b4, black)",
    ];

    return (
        <HomeContainer>
            <HomeBanners mode={darkMode ?? "Light"} height="280px">
                {bannerArray.map((item, index) => {
                    return (
                        <Banner
                            key={index}
                            ref={(el: HTMLDivElement) => {
                                bannerRef.current[index] = el;
                            }}
                            bgImg={bgImgArray[index]}
                            bgColor={bgColorArray[index]}
                            bgPosition="right center"
                            bgSize="800px"
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
                            <i className="ri-arrow-left-s-line"></i>
                        </p>
                        <p onClick={onSlideBannerRight}>
                            <i className="ri-arrow-right-s-line"></i>
                        </p>
                    </div>
                </ControlBanner>
            </HomeBanners>
            <Main>
                <Category>
                    <CategoryTitle>
                        <p>이런 챌린지가 있어요</p>
                        <p className="more">
                            <Link to="/challengelist/all">더보기 &gt;</Link>
                        </p>
                    </CategoryTitle>

                    <CategoryContent>
                        {isLoaded
                            ? Object.values(boardList)
                                  .slice(0, 9)
                                  .map((comment, idx) => (
                                      //   <div>
                                      <ChallengeCard
                                          key={idx}
                                          id={comment[0].id}
                                          level="beginner"
                                          //   grade={true}
                                          title={comment[0].title}
                                          date={startDate + "~" + endDate}
                                          count={comment[0]._count.Challenger}
                                          mode={darkMode ?? "Light"}
                                      />
                                      //   </div>
                                  ))
                            : contentsLength.map((_, idx) => {
                                  return (
                                      <SkeletonContent key={idx}>
                                          <div>
                                              <Skeleton
                                                  variant="rounded"
                                                  width={298}
                                                  height={113}
                                              />
                                          </div>
                                          <div>
                                              <Skeleton variant="rounded" width={298} height={21} />
                                          </div>
                                          <div
                                              style={{
                                                  display: "flex",
                                                  justifyContent: "space-between",
                                              }}
                                          >
                                              <Skeleton variant="rounded" width={100} height={21} />
                                              <Skeleton variant="rounded" width={86} height={20} />
                                          </div>
                                          <div>
                                              <Skeleton variant="rounded" width={100} height={21} />
                                          </div>
                                          <div>
                                              <Skeleton variant="rounded" width={298} height={38} />
                                          </div>
                                      </SkeletonContent>
                                  );
                              })}
                    </CategoryContent>
                </Category>
            </Main>
        </HomeContainer>
    );
};

export default Home;
