import {
    ContainerWrap,
    Container,
    Section,
    Section1Box,
    Section3Box,
    Header,
    Nav,
    Logo,
    SectionNav,
    CarbonGraph,
} from "@styles/pages/landing-style";
import { useRef, useEffect, useState } from "react";

const Landing = () => {
    //useState
    //- 스크롤 속도용 스위치 State
    const [ani, setAni] = useState(true);
    //https://db2dev.tistory.com/entry/React-resize-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%8B%A4%EB%A3%A8%EA%B8%B0
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);
    const [count, setCount] = useState(0);

    //useRef
    const section = useRef<HTMLDivElement>(null);
    const navRefs = useRef<any>([]);

    //useEffect
    useEffect(() => {
        //resize Func
        const handleResize = () => {
            setInnerHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [innerHeight]);

    //section nav list
    const nav = Array("탄소발자국", "배출 현황", "탄소 문제", "챌린지 소개", "팀원 소개");

    /*
        top = 0 첫번째
        
        하나씩 이동되는 거는
        top(0) + innerHeight
        top(innerHeight) + innerHeight
        top(innerHeight*2) + innerHeight
        top(innerHeight*3) + innerHeight

        top = (4 * innerHeight) 마지막꺼 
    */

    /*
                리사이징 할 때,
                스크롤 네비의 인덱스를 보고
                인덱스 곱하기 화면 높이 해도 괜찮을 듯
            */

    const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        //ani 값이 true 일 때만 동작 : ani 가 스위치 역할
        if (ani) {
            if (e.deltaY < 0) {
                if (section.current != null) {
                    // !== 가 아닌 != 은 null 과 undefined 다 체크해줌
                    let top = Number(section.current.style.top.replace("px", ""));

                    const height = Number(-innerHeight * 5);

                    if (0 >= top && top >= height) {
                        setCount((prev) => (prev == 0 ? (prev = 0) : prev - 1));
                        console.log("count =>", count);
                        section.current.style.top = `${(top += innerHeight)}px`;

                        setTimeout(() => {
                            setAni(true);
                            //0.5 초 후에 동작? 아직 이해 안감
                        }, 800);

                        setAni(false);

                        /*-- section Nav 설정 --*/

                        console.log("현재 top 값", top);
                        console.log("현재 innerHeight 값", innerHeight);

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
                    if (top === innerHeight) {
                        section.current.style.top = 0 + "px";
                    }
                }
            } else {
                //스크롤 다운
                if (section.current != null) {
                    // !== 가 아닌 != 은 null 과 undefined 다 체크해줌

                    //top 값 중에 px 을 빼고 Number 로 변환
                    let top = Number(section.current.style.top.replace("px", ""));

                    const height = Number(-innerHeight * 5);
                    if (0 >= top || top <= height) {
                        setCount((prev) => (prev == 4 ? (prev = 4) : prev + 1));

                        console.log("count =>", count);
                        section.current.style.top = `${(top -= innerHeight)}px`;

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

                        console.log("top / innerHeight", pureTop / innerHeight);

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

                    if (top === height) {
                        section.current.style.top = `-${innerHeight * 4}px`;
                    }
                }
            }
        }
    };

    return (
        <ContainerWrap>
            <Header>
                <Logo>로고</Logo>
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
                {/* https://eliaslog.pw/how-to-add-multiple-refs-to-one-useref-hook/ */}
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
            <Container onWheel={onWheel} ref={section} style={{ top: 0 }}>
                <Section bgColor="#dc322f" bgImg="url('src/assets/landing_bgImage.png')">
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
                        <div>
                            <ul>
                                <li>스모그 현상</li>
                                <li>마스크 착용해야 함</li>
                                <li>병 걸릴 수도 있음</li>
                            </ul>
                            <p>Graph</p>
                        </div>
                    </Section3Box>
                </Section>
                <Section bgColor="#6c71c4">
                    <h2>우리 챌린지 서비스 있음 재밌음</h2>
                </Section>
                <Section bgColor="#343434">
                    <h2>팀원들 소개 표시하실? 하면 좀 까리할듯?</h2>
                </Section>
            </Container>
        </ContainerWrap>
    );
};

export default Landing;
