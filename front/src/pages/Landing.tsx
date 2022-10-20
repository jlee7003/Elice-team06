import { useRef, useEffect, useState, PureComponent } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/.";
import { useRecoilState, useRecoilValue } from "recoil";
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
    Tooltips,
    ButtonLink,
    Name,
} from "@/styles/pages/landing-style";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Legend,
    Bar,
} from "recharts";
import assets from "@/lib/assets";
import urlCheck from "@/recoil/urlCheck";
import userState from "@/recoil/user";
import ModalState from "@/recoil/modalState";
import LoginModal from "@/modal/LoginModal";
import useLogout from "@/hooks/useLogout";
import API from "@/api/.";

const Landing = () => {
    //-----useRecoilValue----
    const user = useRecoilValue(userState);
    //-------useRecoilState --------
    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);
    const [onModal, setOnModal] = useRecoilState(ModalState);

    //-------useState --------
    const [ani, setAni] = useState(true); //스크롤 속도용 스위치 State
    const [resizeHeight, setResizeHeight] = useState(window.innerHeight); //리사이징 화면 높이 값
    const [innerHeight, setInnerHeight] = useState(window.innerHeight); // 초기 랜더링 시 화면 높이 값
    const [sealevelData, setSealevelData] = useState([]); //rechart data 01
    const [temperatureData, setTemperatureData] = useState([]); //rechart data 01
    const [emissionData, setEmissionData] = useState([]); //rechart data 01
    const [challengerCount, setChallengerCount] = useState({});

    //-------useRef --------
    const section = useRef<HTMLDivElement>(null); //section
    const navRefs = useRef<HTMLLIElement[]>([]); //section navigation //HTMLLIElement[] | null
    const carbonListRefs = useRef<HTMLLIElement[]>([]);
    const challengersRefs = useRef<HTMLSpanElement>(null);
    const challengerJoinRefs = useRef<HTMLSpanElement>(null);
    const graphs01Ref = useRef<HTMLDivElement>(null);
    const graphs02Ref = useRef<HTMLDivElement>(null);
    const graphs03Ref = useRef<HTMLDivElement>(null);

    //Logout
    const setLogout = useLogout();
    const onClickLogout = () => {
        setLogout();
    };

    //section nav list
    const nav = ["탄소발자국", "배출 현황", "탄소 문제", "챌린지 소개", "팀원 소개"];

    const skull = assets("skull.png");
    const temperature = assets("temperature.png");
    const water = assets("water.png");
    const carbonArray = [
        { icon: skull, text: "국가별 배출량" },
        { icon: temperature, text: "해수면" },
        { icon: water, text: "국가별 온도" },
    ];

    console.log(carbonArray[0].icon);
    // console.log(assets("skull.png"));

    useEffect(() => {
        // const getData: any = async () => {
        //     const url = fetch(
        //         "http://" + window.location.hostname + ":" + "3001" + "/data/sealevel"
        //     );

        //     const result = await url.then((res) => res.json());

        //     setData01(result);
        //     console.log(result);

        //     return result;
        // };
        // getData();
        API.get<{ data: number; sealevel: number }>(["data", "sealevel"]).then((res) => {
            if (res === null) {
                return;
            }
            setSealevelData(res.data);
            console.log("sealevelData", res.data);
        });

        API.get(["data", "temperture"]).then((res) => {
            if (res === null) {
                return;
            }
            setTemperatureData(res.data);
            console.log("Temperatur", res.data);
        });

        API.get(["data", "emission"]).then((res) => {
            if (res === null) {
                return;
            }

            setEmissionData(res.data);
            console.log("Emission", res.data);
        });

        API.get(["user", "about"]).then((res) => {
            console.log("user/about", res.data);
            setChallengerCount(res.data);
        });
    }, []);

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, [currentUrl]);

    useEffect(() => {
        //Section 03 - tab default
        if (carbonListRefs.current) {
            carbonListRefs.current[0].style.backgroundColor = "#fff";
            carbonListRefs.current[0].style.color = "#000";
        }

        //-----👉디자인 수정용 잠시 설정해 놓은 것🐱‍🐉-----
        // if (section.current) {
        //     setInnerHeight((prev) => {
        //         return (prev = resizeHeight);
        //     });
        //     section.current.style.top = `-${resizeHeight * 2}px`;
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
            navRefs.current[i].style.backgroundColor = "#fff";
            navRefs.current[i].style.color = "#000";
            navRefs.current[i].style.fontSize = "14px";
            navRefs.current[i].style.width = "95px";
            navRefs.current[i].style.padding = "5px";
            navRefs.current[i].style.border = "1px solid #868686";
        }

        if (navIndex < 5) {
            if (!navRefs.current) {
                return;
            }
            navRefs.current[navIndex].style.backgroundColor = "#000";
            navRefs.current[navIndex].style.color = "#fff";
            navRefs.current[navIndex].style.fontSize = "18px";
            navRefs.current[navIndex].style.width = "125px";
            navRefs.current[navIndex].style.padding = "5px";
            navRefs.current[navIndex].style.border = "1px solid #000";
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
            if (carbonListRefs.current != null) {
                carbonListRefs.current[i].style.backgroundColor = " rgb(255 255 255 / 24%)";
                carbonListRefs.current[i].style.color = " rgb(0,0,0,0.6)";
            }
            if (e === i) {
                if (carbonListRefs.current != null) {
                    carbonListRefs.current[i].style.backgroundColor = "#fff";
                    carbonListRefs.current[i].style.color = " #000";
                }
            }

            if (
                graphs01Ref.current === null ||
                graphs02Ref.current === null ||
                graphs03Ref.current === null
            ) {
                return;
            }

            if (e === 0) {
                graphs01Ref.current.classList.add("show");
                graphs02Ref.current.classList.remove("show");
                graphs03Ref.current.classList.remove("show");
            }
            if (e === 1) {
                graphs01Ref.current.classList.remove("show");
                graphs02Ref.current.classList.add("show");
                graphs03Ref.current.classList.remove("show");
            }
            if (e === 2) {
                graphs01Ref.current.classList.remove("show");
                graphs02Ref.current.classList.remove("show");
                graphs03Ref.current.classList.add("show");
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
            navRefs.current[i].style.backgroundColor = "#fff";
            navRefs.current[i].style.color = "#000";
            navRefs.current[i].style.fontSize = "14px";
            navRefs.current[i].style.width = "95px";
            navRefs.current[i].style.padding = "5px";
            navRefs.current[i].style.border = "1px solid #868686";
        }

        navRefs.current[1].style.backgroundColor = "#000";
        navRefs.current[1].style.color = "#fff";
        navRefs.current[1].style.fontSize = "18px";
        navRefs.current[1].style.width = "125px";
        navRefs.current[1].style.padding = "5px";
        navRefs.current[1].style.border = "1px solid #000";
    };

    //사이드 네비 클릭 시 section 이동
    const onMoveSection = (i: number) => {
        if (!section.current) {
            return;
        }
        section.current.style.top = `-${innerHeight * i}px`;
        section.current.style.transition = "all 0.7s ease-in-out";

        if (!navRefs.current) {
            return;
        }
        for (let i = 0; i < 5; i++) {
            if (!navRefs.current) {
                return;
            }
            navRefs.current[i].style.backgroundColor = "#fff";
            navRefs.current[i].style.color = "#000";
            navRefs.current[i].style.fontSize = "14px";
            navRefs.current[i].style.width = "95px";
            navRefs.current[i].style.padding = "5px";
            navRefs.current[i].style.border = "1px solid #868686";
        }

        navRefs.current[i].style.backgroundColor = "#000";
        navRefs.current[i].style.color = "#fff";
        navRefs.current[i].style.fontSize = "18px";
        navRefs.current[i].style.width = "125px";
        navRefs.current[i].style.padding = "5px";
        navRefs.current[i].style.border = "1px solid #000";
    };

    return (
        <ContainerWrap>
            <Header>
                <Logo>
                    <LogoImg />
                </Logo>

                <Nav>
                    <Link to={ROUTES.Home.path}>챌린지</Link>
                    <Link to={ROUTES.BoardPage.path}>커뮤니티</Link>
                    {user === null ? (
                        <Link to={ROUTES.Login.path}>로그인</Link>
                    ) : (
                        <>
                            <button onClick={() => setOnModal("login")}>로그아웃</button>
                            {onModal == "login" && (
                                <LoginModal
                                    setOnModal={setOnModal}
                                    logout={onClickLogout}
                                ></LoginModal>
                            )}
                        </>
                    )}
                </Nav>
            </Header>
            <SectionNav>
                {nav.map((item, i) => {
                    return (
                        <li
                            key={i}
                            ref={(el: HTMLLIElement) => {
                                navRefs.current[i] = el;
                            }}
                            style={{
                                backgroundColor: "#fff",
                                fontSize: "14px",
                                border: "1px solid #868686",
                            }}
                            onClick={() => {
                                onMoveSection(i);
                            }}
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
                            <h2>
                                함께 <span>탄소 발자국</span>을 줄여요
                            </h2>
                            <p>
                                지구를 지키기 위한 첫 도전은
                                <br />
                                함께하는 것입니다.
                            </p>
                        </div>
                        <p>
                            <button type="button">
                                <ButtonLink to={ROUTES.Home.path}>챌린지 하러가기</ButtonLink>
                            </button>
                            <button type="button" onClick={onClickScrollDown}></button>
                        </p>
                    </Section1Box>
                </Section>
                <Section bgColor="#fff" bgImg="url('src/assets/curve_bgImage.png')">
                    <h3>탄소 배출 현황</h3>
                    <CarbonGraph width="60%" height="50%" margin="100px auto 0">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                width={500}
                                height={400}
                                data={emissionData}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="World"
                                    stroke="#34c759"
                                    fill="#34c759"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="USA"
                                    stroke="#8034c7"
                                    fill="#8034c7"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="EU"
                                    stroke="#3434c7"
                                    fill="#3434c7"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="China"
                                    stroke="#7a2626"
                                    fill="#7a2626"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CarbonGraph>
                </Section>
                <Section bgImg="url('src/assets/pollution_bgImage.jpg')">
                    <Section3Box>
                        <div>
                            <h2>심각한 탄소 문제</h2>
                            <p>탄소문제는 나날이 심각해지고 있는 상황입니다.</p>
                        </div>
                        <Section3Content>
                            <ul>
                                {carbonArray.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            ref={(el: HTMLLIElement) => {
                                                carbonListRefs.current[index] = el;
                                            }}
                                            onClick={() => onTabClick(index)}
                                        >
                                            <span>
                                                <img src={item.icon} alt={item.text} />
                                            </span>
                                            <span>{item.text}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="graphWrap">
                                <CarbonGraph
                                    className="graphs show"
                                    ref={graphs01Ref}
                                    width="90%"
                                    height="90%"
                                    margin="20px auto"
                                >
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart
                                            width={500}
                                            height={400}
                                            data={emissionData}
                                            margin={{
                                                top: 10,
                                                right: 30,
                                                left: 0,
                                                bottom: 0,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="year" />
                                            <YAxis />
                                            <Tooltip />
                                            <Area
                                                type="monotone"
                                                dataKey="World"
                                                stroke="#34c759"
                                                fill="#34c759"
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="USA"
                                                stroke="#8034c7"
                                                fill="#8034c7"
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="EU"
                                                stroke="#3434c7"
                                                fill="#3434c7"
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="China"
                                                stroke="#7a2626"
                                                fill="#7a2626"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </CarbonGraph>
                                <CarbonGraph
                                    className="graphs"
                                    ref={graphs02Ref}
                                    width="90%"
                                    height="90%"
                                    margin="20px auto"
                                >
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart
                                            width={500}
                                            height={400}
                                            data={sealevelData}
                                            margin={{
                                                top: 10,
                                                right: 30,
                                                left: 0,
                                                bottom: 0,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="year" />
                                            <YAxis />
                                            <Tooltip />
                                            <Area
                                                type="monotone"
                                                dataKey="sea_level"
                                                stroke="#34c759"
                                                fill="#34c759"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </CarbonGraph>
                                <CarbonGraph
                                    className="graphs"
                                    ref={graphs03Ref}
                                    width="90%"
                                    height="90%"
                                    margin="20px auto"
                                >
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart
                                            width={500}
                                            height={400}
                                            data={temperatureData}
                                            margin={{
                                                top: 10,
                                                right: 30,
                                                left: 0,
                                                bottom: 0,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="year" />
                                            <YAxis />
                                            <Tooltip />
                                            <Area
                                                type="monotone"
                                                dataKey="World"
                                                stroke="#34c759"
                                                fill="#34c759"
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="USA"
                                                stroke="#8034c7"
                                                fill="#8034c7"
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="EU"
                                                stroke="#3434c7"
                                                fill="#3434c7"
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="China"
                                                stroke="#7a2626"
                                                fill="#7a2626"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </CarbonGraph>
                            </div>
                        </Section3Content>
                    </Section3Box>
                </Section>
                <Section bgColor="#fff">
                    <Section4Box>
                        <h2>
                            <span style={{ color: "#61be92" }}>탄小</span> 의 챌린지들
                        </h2>
                        <div>
                            <ChallengeSlide>
                                <input type="radio" name="slide" id="slide01" defaultChecked />
                                <input type="radio" name="slide" id="slide02" />
                                <input type="radio" name="slide" id="slide03" />
                                <SlideContent>
                                    <ul>
                                        <SlideList
                                            slideBgImg={assets("banner_bus.png")}
                                            bgColor="linear-gradient(45deg, #35614c, #56676e, black)"
                                            bgPosition="right center"
                                            bgSize="800px"
                                        >
                                            <a>
                                                <span>외출 시엔 대중교통 사용</span>
                                            </a>
                                            <p>
                                                외출 시엔 <br />
                                                대중교통 사용
                                            </p>
                                        </SlideList>
                                        <SlideList
                                            slideBgImg={assets("banner_cycle.png")}
                                            bgColor="linear-gradient(45deg, #35614c, #63433e, black)"
                                            bgPosition="right center"
                                            bgSize="800px"
                                        >
                                            <a>
                                                <span>건강도 지키는 자전거 타기</span>
                                            </a>
                                            <p>
                                                건강도 지키는 <br />
                                                자전거 타기
                                            </p>
                                        </SlideList>
                                        <SlideList
                                            slideBgImg={assets("banner_plant.png")}
                                            bgColor="linear-gradient(45deg, #35614c, #af9c93, black)"
                                            bgPosition="right center"
                                            bgSize="800px"
                                        >
                                            <a>
                                                <span>한 달에 한 번 나무 심기</span>
                                            </a>
                                            <p>
                                                한 달에 한 번 <br />
                                                나무 심기
                                            </p>
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
                                    <span ref={challengersRefs}>{challengerCount.challenger}</span>
                                </div>
                                <div>
                                    <p>챌린저 가입 수</p>
                                    <span ref={challengerJoinRefs}>{challengerCount.users}</span>
                                </div>
                            </ChallengeCurrent>
                        </div>
                    </Section4Box>
                </Section>
                <Section bgColor="#343434">
                    <SectionTitle>함께한 팀원들</SectionTitle>
                    <Section5Box>
                        <li>
                            <p></p>
                            <Name>김영준</Name>
                        </li>
                        <li>
                            <p></p>
                            <Name>이지원</Name>
                        </li>
                        <li>
                            <p></p>
                            <Name>이안토니의호</Name>
                        </li>
                        <li>
                            <p></p>
                            <Name>류지윤</Name>
                        </li>
                        <li>
                            <p></p>
                            <Name>임지원</Name>
                        </li>
                        <li>
                            <p></p>
                            <Name>홍지민</Name>
                        </li>
                    </Section5Box>
                </Section>
            </Container>
        </ContainerWrap>
    );
};

export default Landing;
