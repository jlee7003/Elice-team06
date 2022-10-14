import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
// import cssUnit from "@/cssUnit";
import assets from "@/lib/assets";
import icons from "@/lib/icons";

interface StyleProps {
    bgColor?: string;
    bottom?: string;
    bgImg?: string;
    rotate?: string;
    slideBgImg?: string;
    width?: string;
    height?: string;
    margin?: string;
}

export const ContainerWrap = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
`;

//--------------Header--------------
export const Header = styled.header`
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    width: 100%;
    height: 80px;
    display: flex;
    z-index: 1;
    justify-content: space-between;
    background-color: transparent;
    p {
        background-color: transparent;
    }
`;

const logoImg = assets("logo.png");

export const LogoImg = styled.img.attrs({
    src: logoImg,
    alt: "logo_image",
})`
    cursor: pointer;
    height: 60px;
`;

export const Logo = styled.p`
    ${LogoImg}
`;

// export const Link = styled(Link)`
//     color: #000;
// `;

export const Nav = styled.nav`
    height: 100%;
    line-height: 80px;
    /* width: 30%; */
    width: 400px;
    max-width: 900px;
    display: flex;
    background-color: transparent;
    justify-content: space-around;
    color: #000;
    font-weight: bold;
    font-size: 18px;
`;

//--------------Slides Nav--------------

export const SectionNav = styled.ul`
    position: absolute;
    right: 50px;
    top: calc(50% - 90px);
    z-index: 2;
    height: 240px;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
    align-items: flex-end;
    li {
        width: 100%;
        height: 20px;

        background-color: #d9d9d9;
        text-align: center;
        line-height: 20px;
        list-style: none;
        font-size: 12px;
        border-radius: 100px;
        padding: 0px 5px;
        box-sizing: content-box;
        transition: all 0.7s;
    }
`;

//--------- Slides Contents -----------
export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: teal;
    position: absolute;
    z-index: 0;
    left: 0;
    transition: all 0.7s;
`;

export const Section = styled.div<StyleProps>`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.bgColor};
    color: #fff;

    bottom: ${(props) => props.bottom};
    background-image: ${(props) => props.bgImg};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;

    h3 {
        width: 100%;
        text-align: center;
        font-size: 30px;
        margin-top: 10%;
        background-color: transparent;
        color: #000;
    }
`;
/*
        width: 90%;
    height: 90%;
    margin: 20px auto;
*/
export const CarbonGraph = styled.div<StyleProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    background-color: #e8e8e8;
    opacity: 0.5;
    border-radius: 20px;
    max-width: 1093px;
`;

export const Section1Box = styled.div`
    margin: 400px auto 0;
    width: auto;
    height: 40%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
    div {
        background-color: transparent;
        h2 {
            font-size: 60px;
            background-color: transparent;
            padding-bottom: 40px;
            color: #000;
        }
        p {
            font-size: 20px;
            color: #000;
        }
    }

    & > p {
        background-color: transparent;
        button {
            background-color: #fff;
            color: #000;
            width: 330px;
            height: 60px;
            border: none;
            border-radius: 100px;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            box-shadow: 0 0 15px rgb(0 0 0 / 80%);
        }
    }
`;

export const Section3Box = styled.div`
    margin: 200px auto 0;
    width: auto;
    height: 40%;
    text-align: center;
    background-color: transparent;

    div {
        background-color: transparent;
        h2 {
            background-color: transparent;
            font-size: 50px;
            padding-bottom: 40px;
        }
        p {
            font-size: 20px;
        }
    }
`;

export const Section3Content = styled.div`
    height: 400px;
    max-width: 1093px;
    width: 60%;
    margin: 100px auto 0;
    display: flex;
    justify-content: space-between;
    ul {
        width: 30%;
        height: 100%;
        li {
            background-color: #cbcbcb;
            width: 100%;
            height: 120px;
            list-style: none;
            border-radius: 20px;
            line-height: 120px;
            white-space: nowrap;
            cursor: pointer;
            transition: all 0.4s;
            & + li {
                margin-top: 19px;
            }
            &:hover {
                background-color: #ababab;
            }
        }
    }
    p {
        background-color: #fff;
        border-radius: 20px;
        width: 65%;
        margin-left: 5%;
        height: 100%;
        color: #cbcbcb;
        line-height: 400px;
        text-align: center;
    }
`;

export const Section4Box = styled.div`
    margin: 150px auto 0;
    width: auto;
    height: 40%;
    text-align: center;

    h2 {
        font-size: 50px;
        padding-bottom: 40px;
        color: #000;
    }
    & > div {
        margin: 20px auto 0;
        max-width: 1093px;
        width: 60%;
    }
`;

const arrow = icons("arrow_side_icon.png");

export const ArrowIcon = styled.img.attrs({
    src: arrow,
    alt: "arro_icon",
})<StyleProps>`
    cursor: pointer;
    position: absolute;
    width: 20px;
    height: 30px;
    top: 10px;
    left: 15px;
    transform: ${(props) => props.rotate};
`;

export const Control = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: none;
    label {
        width: 50px;
        height: 50px;
        cursor: pointer;
        border-radius: 100px;
        position: relative;
        ${ArrowIcon}
    }
`;

export const SlideControl = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
`;

const slideImg01 = assets("bus_img.png");

export const SlideImg = styled.img.attrs({ src: slideImg01, alt: "bus img" })``;

export const SlideList = styled.li<StyleProps>`
    background-image: url(${(props) => props.slideBgImg});
    background-size: cover;
`;

// https://m.blog.naver.com/co-nam/222084570760
export const SlideContent = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;

    ul {
        white-space: nowrap;

        ${SlideList} {
            display: inline-block;
            /* vertical-align: middle; */
            width: 100%;
            transition: all 0.5s;

            a {
                display: block;
                position: relative;
                width: 100%;
                height: 400px;
                span {
                    color: transparent;
                }
            }
        }
    }
`;

export const ChallengeSlide = styled.div`
    height: 400px;
    width: 100%;
    background-color: #3c3c3c;
    color: #fff;
    text-align: center;
    line-height: 400px;

    input {
        display: none;

        //각 input checked 될 때 li 위치 이동
        &[id="slide01"]:checked ~ ${SlideContent} ul li {
            transform: translateX(0%);
        }
        &[id="slide02"]:checked ~ ${SlideContent} ul li {
            transform: translateX(-100%);
        }
        &[id="slide03"]:checked ~ ${SlideContent} ul li {
            transform: translateX(-200%);
        }

        //각 section 이동 시, 각 nav 만 보이도록 설정
        &[id="slide01"]:checked ~ ${SlideContent} ${SlideControl} .control01 {
            display: flex;
        }

        &[id="slide02"]:checked ~ ${SlideContent} ${SlideControl} .control02 {
            display: flex;
        }

        &[id="slide03"]:checked ~ ${SlideContent} ${SlideControl} .control03 {
            display: flex;
        }
    }
`;

export const ChallengeCurrent = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 180px;
    background-color: #fbfbfb;
    box-shadow: 0 0 1px rgba(0, 0, 0, 15);
    display: flex;
    align-items: center;

    div {
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: relative;

        p {
            color: #000;
        }
        span {
            color: #000;
            font-size: 40px;
            font-weight: bold;
        }

        &:first-child {
            &::after {
                content: "";
                display: block;
                width: 4px;
                height: 40px;
                background-color: #c5c5c5;
                position: absolute;
                right: 0;
            }
        }
    }
`;

export const SectionTitle = styled.h2`
    color: #fff;
    font-size: 40px;
    width: 100%;
    text-align: center;
    margin-top: 100px;
`;

export const Section5Box = styled.ul`
    height: 70vh;
    max-width: 1093px;
    width: 60%;
    margin: 70px auto 0;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 50% 50%;
    li {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            background-color: #fff;
            color: #000;
            width: 200px;
            height: 200px;
            border-radius: 200px;
            text-align: center;
            line-height: 235px;
            box-sizing: border-box;
            cursor: pointer;
            border: 8px solid transparent;
            transition: all 0.4s ease-in-out;
            &:hover {
                margin-top: -15px;
                /* box-shadow: 15px 15px 0px rgba(97, 190, 146, 50); */
                border-color: #61be92;
            }
        }
    }
`;

export const Tooltips = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid teal;
`;
