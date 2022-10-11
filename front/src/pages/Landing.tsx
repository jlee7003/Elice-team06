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
} from "@/styles/pages/landing-style";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/.";

const Landing = () => {
    //useState
    const [ani, setAni] = useState(true); //스크롤 속도용 스위치 State
    const [resizeHeight, setResizeHeight] = useState(window.innerHeight); //리사이징 화면 높이 값
    const [innerHeight, setInnerHeight] = useState(window.innerHeight); // 초기 랜더링 시 화면 높이 값
    // const [count, setCount] = useState(0);

    //useRef
    const section = useRef<HTMLDivElement>(null); //section
    const navRefs = useRef<any>([]); //section navigation

    //section nav list
    const nav = Array("탄소발자국", "배출 현황", "탄소 문제", "챌린지 소개", "팀원 소개");

    //useEffect
    useEffect(() => {
        //화면 리사이즈,스크롤 이외에도 작동되야하는 코드
        //full screen 일 때도 top 이 height 계산을 하기 위함
        //왜냐, full screen 되는 건 resize() 함수의 영역이 아니기 때문
        if (section.current) {
            //-----👉디자인 수정용 잠시 설정해 놓은 것🐱‍🐉-----
            // setInnerHeight((prev) => {
            //     return (prev = resizeHeight);
            // });
            // section.current.style.top = `-${resizeHeight * 3}px`;
            //----------디자인 수정용----------

            const calc = Math.abs(
                Number(section.current.style.top.replace("px", "")) / innerHeight
            ); //0,1,2....4 출력

            for (let i = 0; i < 6; i++) {
                if (calc === i) {
                    setInnerHeight((prev) => {
                        return (prev = resizeHeight);
                        //화면 높이 값을 리사이징 된 값으로 업데이트
                    });
                    section.current.style.top = `-${resizeHeight * i}px`;
                    //top 값을 (리사이징된 값 * 현재 section index) 로 적용
                }
            }
        }
        //화면 리사이즈 시, handleResize 실행
        const handleResize = () => {
            setResizeHeight(window.innerHeight);

            if (section.current) {
                section.current.style.transition = "none";
                const consoleTop = section.current.style.top;

                const calc = Math.abs(
                    Number(section.current.style.top.replace("px", "")) / innerHeight
                );

                for (let i = 0; i < 6; i++) {
                    if (calc === i) {
                        setInnerHeight((prev) => {
                            return (prev = resizeHeight);
                        });
                        section.current.style.top = `-${resizeHeight * i}px`;
                    }
                }
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            //React이 계속 리랜더링하기 때문에, 무한루프에 빠지지 않도록 removeEvent...설정(?)
        };
    }, [resizeHeight, innerHeight]);

    //스크롤 하지 않아도 적용되어야 하는 값들
    if (section.current != null) {
        let top = Number(section.current.style.top.replace("px", ""));

        const pureTop = Math.abs(top);
        const navIndex = pureTop / innerHeight;

        console.log("navIndex", navIndex);

        //모든 nav list style 값 초기화
        for (let i = 0; i < 5; i++) {
            navRefs.current[i].style.backgroundColor = "#d9d9d9";
            navRefs.current[i].style.color = "#6C6C6C";
            navRefs.current[i].style.fontSize = "12px";
            navRefs.current[i].style.width = "81px";
            navRefs.current[i].style.padding = "0px 5px";
        }

        //navRefs.current 의 index 가 4 이상 넘어가지 않도록 설정
        if (navIndex < 5) {
            navRefs.current[navIndex].style.backgroundColor = "#393939";
            navRefs.current[navIndex].style.color = "#fff";
            navRefs.current[navIndex].style.fontSize = "16px";
            navRefs.current[navIndex].style.width = "118px";
            navRefs.current[navIndex].style.padding = "3px 5px";
        }
    }

    //스크롤 이벤트
    const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        //ani 값이 true 일 때만 동작 : ani 가 스위치 역할 (?)
        if (ani) {
            if (e.deltaY < 0) {
                if (section.current != null) {
                    section.current.style.transition = "all 0.7s";
                    // !== 가 아닌 != 은 null 과 undefined 다 체크해줌
                    let top = Number(section.current.style.top.replace("px", ""));

                    const height = Number(-innerHeight * 5);

                    if (0 >= top && top >= height) {
                        setInnerHeight((prev) => prev++);
                        section.current.style.top = `${top + innerHeight}px`;

                        console.log("innerHeight", innerHeight);
                        console.log("section.current.style.top ", section.current.style.top);

                        setTimeout(() => {
                            setAni(true);
                            //0.8 초 후에 동작
                        }, 800);

                        setAni(false);

                        /*-- section Nav 설정 --*/

                        //-값을 가지는 top 값을 양수화
                        const pureTop = Math.abs(top);

                        //section 의 개수(5)만큼 커지는 top 값 나누기 화면 높이
                        //0,1,2,3...을 출력하기 위함
                        const navIndex = pureTop / innerHeight;

                        //모든 nav list style 값 초기화
                        for (let i = 0; i < 5; i++) {
                            navRefs.current[i].style.backgroundColor = "#d9d9d9";
                            navRefs.current[i].style.color = "#6C6C6C";
                            navRefs.current[i].style.fontSize = "12px";
                            navRefs.current[i].style.width = "81px";
                            navRefs.current[i].style.padding = "0px 5px";
                        }

                        //navRefs.current 의 index 가 4 이상 넘어가지 않도록 설정
                        if (navIndex < 5) {
                            navRefs.current[navIndex].style.backgroundColor = "#393939";
                            navRefs.current[navIndex].style.color = "#fff";
                            navRefs.current[navIndex].style.fontSize = "16px";
                            navRefs.current[navIndex].style.width = "118px";
                            navRefs.current[navIndex].style.padding = "3px 5px";
                        }

                        //이거는 아직 실험중
                        if (navIndex === 0) {
                            navRefs.current[navIndex].style.backgroundColor = "#393939";
                            navRefs.current[navIndex].style.color = "#fff";
                            navRefs.current[navIndex].style.fontSize = "16px";
                            navRefs.current[navIndex].style.width = "118px";
                            navRefs.current[navIndex].style.padding = "3px 5px";
                        }
                    }

                    //top 이 0 이면 스크롤 스탑
                    if (top === 0) {
                        section.current.style.top = 0 + "px";
                    }
                }
            } else {
                //스크롤 다운
                if (section.current != null) {
                    section.current.style.transition = "all 0.7s";
                    // !== 가 아닌 != 은 null 과 undefined 다 체크해줌

                    //top 값 중에 px 을 빼고 Number 로 변환
                    let top = Number(section.current.style.top.replace("px", ""));

                    const height = Number(-innerHeight * 5);
                    if (0 >= top || top <= height) {
                        setInnerHeight((prev) => prev--);
                        section.current.style.top = `${top - innerHeight}px`;

                        setTimeout(() => {
                            setAni(true);
                        }, 800);
                        /*
                            상단에 하나로 setTimeout 관리하던거를
                            각 if 문안에서 설정
                        */
                        setAni(false);

                        /*-- section Nav 설정 --*/
                        const pureTop = Math.abs(top);

                        const navIndex = pureTop / innerHeight;

                        for (let i = 0; i < 5; i++) {
                            navRefs.current[i].style.backgroundColor = "#d9d9d9";
                            navRefs.current[i].style.color = "#6C6C6C";
                            navRefs.current[i].style.fontSize = "12px";
                            navRefs.current[i].style.width = "81px";
                            navRefs.current[i].style.padding = "0px 5px";
                        }

                        if (navIndex < 5) {
                            navRefs.current[navIndex].style.backgroundColor = "#393939";
                            navRefs.current[navIndex].style.color = "#fff";
                            navRefs.current[navIndex].style.fontSize = "16px";
                            navRefs.current[navIndex].style.width = "118px";
                            navRefs.current[navIndex].style.padding = "3px 5px";
                        }
                    }

                    if (top === Number(-innerHeight * 4)) {
                        section.current.style.top = `-${innerHeight * 4}px`;
                    }
                }
            }
        }
    };

    const navigate = useNavigate();
    const home = () => {
        navigate(ROUTES.Home.path);
    };

    return (
        <ContainerWrap>
            <Header>
                <Logo>
                    <LogoImg onClick={home} />
                </Logo>

                <Nav>
                    <p>
                        <a href="#" title="소개">
                            소개
                        </a>
                    </p>
                    <p>
                        <a href="#" title="소개">
                            챌린지
                        </a>
                    </p>
                    <p>
                        <a href="#" title="소개">
                            커뮤니티
                        </a>
                    </p>
                    <p>
                        <a href="#" title="소개">
                            로그인
                        </a>
                    </p>
                    <p>
                        <a href="#" title="소개">
                            회원가입
                        </a>
                    </p>
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
                            <button type="button">자세히 보기(또는 스크롤 표시)</button>
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
                                <li>스모그 현상</li>
                                <li>마스크 착용해야 함</li>
                                <li>병 걸릴 수도 있음</li>
                            </ul>
                            <p>reChart js 적용</p>
                        </Section3Content>
                    </Section3Box>
                </Section>
                <Section bgColor="#d1d1d1">
                    <Section4Box>
                        <h2>우리 챌린지 서비스😍</h2>
                        <div>
                            <ChallengeSlide>챌린지 이미지 슬라이드</ChallengeSlide>
                            <ChallengeCurrent>
                                <div>
                                    <p>챌린지 참여 현황</p>
                                    <span>56</span>
                                </div>
                                <div>
                                    <p>챌린저 가입 수</p>
                                    <span>1,000</span>
                                </div>
                            </ChallengeCurrent>
                        </div>
                    </Section4Box>
                </Section>
                <Section bgColor="#343434">
                    <h2>팀원들 소개 표시하실? 하면 좀 까리할듯?</h2>
                </Section>
            </Container>
        </ContainerWrap>
    );
};

export default Landing;
