import { ContainerWrap, Container, Section } from "@styles/pages/landing-style";
import { useRef, useEffect, useState } from "react";

const Landing = () => {
    const { innerHeight } = window;
    const section = useRef<HTMLDivElement>(null);

    console.log("innerHeight", innerHeight);

    // useEffect(() => {
    // if (section.current !== undefined) {
    //     section.current.style.bottom = "100%";
    // }
    // });

    // let current = 0;
    // let animation_state = false;

    // const gotoNum = (index: number) => {
    //     if (!animation_state) {
    //         animation_state = true;

    //         setTimeout(() => {
    //             animation_state = false;
    //         }, 500);
    //     }
    // };

    /*
        top = 0 첫번째
        
        하나씩 이동되는 거는
        top(0) + innerHeight
        top(innerHeight) + innerHeight
        top(innerHeight*2) + innerHeight
        top(innerHeight*3) + innerHeight

        top = (4 * innerHeight) 마지막꺼 
    */

    const gotoNext = () => {};

    const gotoPrev = () => {};

    const test = Number("123123");

    console.log("test", test);

    const [ani, setAni] = useState(true);

    const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        // let timerId;

        // const a = setTimeout(() => {
        //     clearTimeout(a);
        // }, 1000);

        // const debouncing(func, timeout = 300){
        //     clearTimeout(timerId)
        // }

        // console.log("a", a.hasRef());

        // let animation_state = true;

        /*
            내일 할 거
            - 스크롤 제한 걸어야함(저 너머 밑으로 가지 않게)
        */

        setTimeout(() => {
            setAni(true);
        }, 500);

        if (ani) {
            if (e.deltaY < 0) {
                if (section.current != null) {
                    // !== 가 아닌 != 은 null 과 undefined 다 체크해줌
                    //JS 는 NaN 가 숫자로 취급
                    // let top = Number(section.current.style.top);
                    let top = Number(section.current.style.top.replace("px", ""));

                    const height = Number(-innerHeight * 5);

                    if (0 >= top && top >= height) {
                        section.current.style.top = `${(top += innerHeight)}px`;

                        console.log(section.current.style.top);
                        setAni(false);
                    }

                    if (top === 0) {
                        // alert(section.current.style.top);
                        section.current.style.top = 0 + "px";
                    }
                }
            } else {
                //스크롤 다운
                if (section.current != null) {
                    // !== 가 아닌 != 은 null 과 undefined 다 체크해줌
                    //JS 는 NaN 가 숫자로 취급

                    let top = Number(section.current.style.top.replace("px", ""));
                    //top 값 중에 px 을 빼고 Number 로 변환

                    // console.log("top", top);

                    const height = Number(-innerHeight * 5);
                    if (0 >= top || top <= height) {
                        section.current.style.top = `${(top -= innerHeight)}px`;

                        // console.log("section.current.style.top", section.current.style.top);
                        setAni(false);
                    }

                    if (top === height) {
                        // alert(section.current.style.top);

                        section.current.style.top = `-${innerHeight * 4}px`;
                    }
                }
            }
        }
    };

    return (
        <ContainerWrap>
            <Container onWheel={onWheel} ref={section} style={{ top: 0 }}>
                <Section bgColor="#dc322f">ㅠㅠㅠㅠ</Section>
                <Section bgColor="#073642">2</Section>
                <Section bgColor="#cb4b16">3</Section>
                <Section bgColor="#6c71c4">4</Section>
                <Section bgColor="#343434">5</Section>
            </Container>
        </ContainerWrap>
    );
};

export default Landing;
