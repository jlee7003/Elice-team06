import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/.";
import {
    ContainerWrap,
    Container,
    Section,
    Section1Box,
    Header,
    Nav,
    Logo,
    LogoImg,
    SectionNav,
    CarbonGraph,
    Section3Box,
    Section3Content,
    Section4Box,
    ChallengeSlide,
    ChallengeCurrent,
    SlideContent,
    Section5Box,
    SlideControl,
    Control,
    SectionTitle,
    ArrowIcon,
    SlideList,
} from "@/styles/pages/landing-style";
import assets from "@/lib/assets";

const Landing = () => {
    const [ani, setAni] = useState(true); //스크롤 속도용 스위치 State
    const [resizeHeight, setResizeHeight] = useState(window.innerHeight); //리사이징 화면 높이 값
    const [innerHeight, setInnerHeight] = useState(window.innerHeight); // 초기 랜더링 시 화면 높이 값

    const section = useRef<HTMLDivElement>(null); //section
    const navRefs = useRef<any | null>([]); //section navigation //HTMLLIElement[] | null
    const carbonList = useRef<any | null>([]);
    const challengers = useRef<any | null>(null);
    const challengerJoin = useRef<any | null>(null);

    //section nav list
    const nav = ["탄소발자국", "배출 현황", "탄소 문제", "챌린지 소개", "팀원 소개"];
    const carbonArray = ["스모그 현상", "마스크 착용해야 함", "병 걸릴 수도 있음"];

    useEffect(() => {
        //Section 03 - tab default
        if (carbonList.current) {
            carbonList.current[0].style.backgroundColor = "teal";
        }

        //-----👉디자인 수정용 잠시 설정해 놓은 것🐱‍🐉-----
        // if (section.current) {
        //     setInnerHeight((prev) => {
        //         return (prev = resizeHeight);
        //     });
        //     section.current.style.top = `-${resizeHeight * 3}px`;
        // }
        //----------디자인 수정용----------

        /**
         * 윈도우 리사이즈 시, innerHeight 재설정 및 top 에 적용
         */
        const resetHeight = () => {
            if (section.current == null) {
                return;
            }

            const scrollPosition = Math.abs(
                Number(section.current.style.top.replace("px", "")) / innerHeight
            );

            for (let i = 0; i < 6; i++) {
                if (scrollPosition === i) {
                    setInnerHeight((prev) => {
                        return (prev = resizeHeight);
                    });
                    section.current.style.top = `-${resizeHeight * i}px`;
                }
            }
        };

        resetHeight();

        const handleResize = () => {
            if (section.current == null) {
                return;
            }
            setResizeHeight(window.innerHeight);
            resetHeight();
            section.current.style.transition = "none";
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [resizeHeight, innerHeight]);

    /**
     * 현재 section 위치에 따른 side Nav 스타일 변경
     */
    const changeSideNavStyle = () => {
        //no scroll function
        if (section.current == null) {
            return;
        }
        let top = Number(section.current.style.top.replace("px", ""));

        const pureTop = Math.abs(top);
        const navIndex = pureTop / innerHeight;

        for (let i = 0; i < 5; i++) {
            if (!navRefs.current) {
                return;
            }
            navRefs.current[i].style.backgroundColor = "#d9d9d9";
            navRefs.current[i].style.color = "#6C6C6C";
            navRefs.current[i].style.fontSize = "12px";
            navRefs.current[i].style.width = "81px";
            navRefs.current[i].style.padding = "0px 5px";
        }

        if (navIndex < 5) {
            if (!navRefs.current) {
                return;
            }
            navRefs.current[navIndex].style.backgroundColor = "#393939";
            navRefs.current[navIndex].style.color = "#fff";
            navRefs.current[navIndex].style.fontSize = "16px";
            navRefs.current[navIndex].style.width = "118px";
            navRefs.current[navIndex].style.padding = "3px 5px";
        }
    };

    //스크롤/리사이즈 안해도 style 적용되도록 해야함
    changeSideNavStyle();

    //scroll event
    const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (!ani) {
            return;
        }
        if (e.deltaY < 0) {
            //scroll up function

            if (section.current == null) {
                return;
            }
            section.current.style.transition = "all 0.7s";
            // !== 가 아닌 != 은 null 과 undefined 다 체크해줌
            let top = Number(section.current.style.top.replace("px", ""));

            const height = Number(-innerHeight * 5);

            if (0 >= top && top >= height) {
                setInnerHeight((prev) => prev++);
                section.current.style.top = `${top + innerHeight}px`;

                setTimeout(() => {
                    setAni(true);
                }, 800);

                setAni(false);

                changeSideNavStyle();

                if (!navRefs.current) {
                    return;
                }
            }

            if (top === 0) {
                section.current.style.top = 0 + "px";
            }
        } else {
            //scroll down function
            if (section.current == null) {
                return;
            }
            section.current.style.transition = "all 0.7s";

            let top = Number(section.current.style.top.replace("px", ""));

            const height = Number(-innerHeight * 5);
            if (0 >= top || top <= height) {
                setInnerHeight((prev) => prev--);
                section.current.style.top = `${top - innerHeight}px`;

                setTimeout(() => {
                    setAni(true);
                }, 800);
                setAni(false);

                changeSideNavStyle();

                const scrollPosition = Math.abs(
                    Number(section.current.style.top.replace("px", "")) / innerHeight
                );

                if (scrollPosition == 3) {
                    if (
                        challengers.current.innerText == 56 ||
                        challengerJoin.current.innerText == 1000
                    ) {
                        return;
                    }
                    if (challengers.current != null) {
                        let countReset = 0;
                        setInterval(() => {
                            challengers.current.innerText = String(countReset);

                            if (countReset >= 56) {
                                return;
                            }
                            countReset += 1;
                        }, 20);
                    }
                    if (challengerJoin.current != null) {
                        let countReset = 0;
                        setInterval(() => {
                            challengerJoin.current.innerText = String(countReset);
                            //3자리 수마다 점찍기 해야함
                            if (countReset >= 1000) {
                                return;
                            }
                            countReset += 10;
                        }, 20);
                    }
                }
            }

            if (top === Number(-innerHeight * 4)) {
                section.current.style.top = `-${innerHeight * 4}px`;
            }
        }
    };

    /**
     * 각 List 클릭 시, 각 List CSS 적용
     * @param e list index 값
     */
    const onTabClick = (e: number) => {
        for (let i = 0; i < 3; i++) {
            if (carbonList.current != null) {
                carbonList.current[i].style.backgroundColor = "#cbcbcb";
            }
            if (e == i) {
                if (carbonList.current != null) {
                    carbonList.current[i].style.backgroundColor = "teal";
                }
            }
        }
    };

    const onClickScrollDown = () => {
        if (section.current == null) {
            return;
        }
        let top = Number(section.current.style.top.replace("px", ""));
        section.current.style.top = `${top - innerHeight}px`;

        for (let i = 0; i < 5; i++) {
            if (!navRefs.current) {
                return;
            }
            navRefs.current[i].style.backgroundColor = "#d9d9d9";
            navRefs.current[i].style.color = "#6C6C6C";
            navRefs.current[i].style.fontSize = "12px";
            navRefs.current[i].style.width = "81px";
            navRefs.current[i].style.padding = "0px 5px";
        }

        if (!navRefs.current) {
            return;
        }
        navRefs.current[1].style.backgroundColor = "#393939";
        navRefs.current[1].style.color = "#fff";
        navRefs.current[1].style.fontSize = "16px";
        navRefs.current[1].style.width = "118px";
        navRefs.current[1].style.padding = "3px 5px";
    };

    return (
        <ContainerWrap>
            <Header>
                <Logo>
                    <LogoImg />
                </Logo>

                <Nav>
                    <Link to={ROUTES.Home.path}>챌린지</Link>
                    <Link to={ROUTES.ReqPage.path}>커뮤니티</Link>
                    <Link to={ROUTES.Login.path}>로그인</Link>
                </Nav>
            </Header>
            <SectionNav>
                {nav.map((item, i) => {
                    return (
                        <li
                            key={i}
                            ref={(el) => {
                                navRefs.current[i] = el;
                            }}
                            style={{ backgroundColor: "#d9d9d9", fontSize: "12px" }}
                        >
                            {item}
                        </li>
                    );
                })}
            </SectionNav>
            <Container onWheel={onWheel} ref={section} style={{ top: 0, transition: "all 0.7s" }}>
                <Section bgColor="#8FACBD" bgImg="url('src/assets/landing_bgImage.png')">
                    <Section1Box>
                        <div>
                            <h2>탄소 발자국을 줄이자</h2>
                            <p>
                                탄소발자국이 뭔지 블라블라....
                                <br />
                                그래서 뭐 어쩌고 저쩌고...
                                <br />
                                우리는 이렇게 등등.....
                            </p>
                        </div>
                        <p>
                            <button type="button" onClick={onClickScrollDown}>
                                자세히 보기(또는 스크롤 표시)
                            </button>
                        </p>
                    </Section1Box>
                </Section>
                <Section bgColor="#61BE92" bgImg="url('src/assets/curve_bgImage.png')">
                    <h3>탄소 배출 현황</h3>
                    <CarbonGraph />
                </Section>
                <Section bgColor="#8075BF">
                    <Section3Box>
                        <div>
                            <h2>지금 탄소문제 심각함 ㅇㅇ</h2>
                            <p>
                                탄소문제 블라블라.... 그래서 뭐 어쩌고 저쩌고... <br />
                                우리는 이렇게 등등.....
                            </p>
                        </div>
                        <Section3Content>
                            <ul>
                                {carbonArray.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            ref={(el) => {
                                                carbonList.current[index] = el;
                                            }}
                                            onClick={() => onTabClick(index)}
                                        >
                                            {item}
                                        </li>
                                    );
                                })}
                            </ul>
                            <p>reChart js 적용(?) 또는 관련 이미지</p>
                        </Section3Content>
                    </Section3Box>
                </Section>
                <Section bgColor="#d1d1d1">
                    <Section4Box>
                        <h2>우리 챌린지 서비스😍</h2>
                        <div>
                            <ChallengeSlide>
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
                            </ChallengeSlide>
                            <ChallengeCurrent>
                                <div>
                                    <p>챌린지 참여 현황</p>
                                    <span ref={challengers}>0</span>
                                </div>
                                <div>
                                    <p>챌린저 가입 수</p>
                                    <span ref={challengerJoin}>0</span>
                                </div>
                            </ChallengeCurrent>
                        </div>
                    </Section4Box>
                </Section>
                <Section bgColor="#343434">
                    <SectionTitle>함께한 팀원들</SectionTitle>
                    <Section5Box>
                        <li>
                            <p>김영준</p>
                        </li>
                        <li>
                            <p>이지원</p>
                        </li>
                        <li>
                            <p>이안토니의호</p>
                        </li>
                        <li>
                            <p>류지윤</p>
                        </li>
                        <li>
                            <p>임지원</p>
                        </li>
                        <li>
                            <p>홍지민</p>
                        </li>
                    </Section5Box>
                </Section>
            </Container>
        </ContainerWrap>
    );
};

export default Landing;
