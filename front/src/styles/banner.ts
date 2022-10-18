import styled, { css } from "styled-components";
import assets from "@/lib/assets";
import icons from "@/lib/icons";
import { Props } from "@/pages/Home";

interface StyleProps {
    rotate?: string;
    slideBgImg?: string;
}

const bannerImg = assets("banner_img.jpg");

// export const Banner = styled.div<Props>`
//     padding: 80px;
//     width: 100%;
//     /* height: 100px; */
//     height: 280px;

//     background-color: #eee;
//     background-image: url(${bannerImg});
//     background-position: center bottom;
//     background-size: cover;
//     background-repeat: no-repeat;
//     ${(props) =>
//         props.mode == "Light"
//             ? css`
//                   opacity: 1;
//               `
//             : css`
//                   opacity: 0.3;
//               `};
// `;
// 350px
//-------------------------------------------------
export const ControlBanner = styled.div`
    margin: 0 auto;
    border: 3px solid blue;
    height: 100%;
    max-width: 1275px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    div {
        display: flex;
        justify-content: center;
        p {
            background-color: #fff;
            color: #000;
            padding: 20px;
            cursor: pointer;
            & + p {
                border-left: 1px solid #000;
            }
        }
    }
`;

export const Banner = styled.div`
    /* max-width: 1275px; */
    width: 100vw;
    border: 1px solid #000;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
        background-color: pink;
    }
    &:nth-child(2) {
        background-color: teal;
    }
    &:nth-child(3) {
        background-color: tomato;
    }
    p {
        max-width: 1275px;
        height: 100%;
        margin: 0 auto;
        font-size: 30px;
        font-weight: 600;
    }
`;

export const HomeBanners = styled.div`
    height: 280px;
    width: 100%;
    position: relative;
    overflow: hidden;
`;
//-------------------------------------------------

// const arrow = icons("arrow_side_icon.png");

// export const ArrowIcon = styled.img.attrs({
//     src: arrow,
//     alt: "arro_icon",
// })<StyleProps>`
//     cursor: pointer;
//     position: absolute;
//     width: 20px;
//     height: 30px;
//     top: 10px;
//     left: 15px;
//     transform: ${(props) => props.rotate};
// `;

// export const Control = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     display: none;
//     label {
//         width: 50px;
//         height: 50px;
//         cursor: pointer;
//         border-radius: 100px;
//         position: relative;
//         ${ArrowIcon}
//     }
// `;

// export const SlideControl = styled.div`
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     left: 0;
//     top: 0;
// `;

// const slideImg01 = assets("bus_img.png");

// export const SlideImg = styled.img.attrs({ src: slideImg01, alt: "bus img" })``;

// export const SlideList = styled.li<StyleProps>`
//     background-image: url(${(props) => props.slideBgImg});
//     background-size: cover;
// `;

// // https://m.blog.naver.com/co-nam/222084570760
// export const SlideContent = styled.div`
//     width: 100%;
//     overflow: hidden;
//     position: relative;

//     ul {
//         white-space: nowrap;

//         ${SlideList} {
//             display: inline-block;
//             /* vertical-align: middle; */
//             width: 100%;
//             transition: all 0.5s;

//             a {
//                 display: block;
//                 position: relative;
//                 width: 100%;
//                 height: 400px;
//                 span {
//                     color: transparent;
//                 }
//             }
//         }
//     }
// `;

// export const ChallengeSlide = styled.div`
//     height: 400px;
//     width: 100%;
//     background-color: #3c3c3c;
//     color: #fff;
//     text-align: center;
//     line-height: 400px;

//     input {
//         display: none;

//         //각 input checked 될 때 li 위치 이동
//         &[id="slide01"]:checked ~ ${SlideContent} ul li {
//             transform: translateX(0%);
//         }
//         &[id="slide02"]:checked ~ ${SlideContent} ul li {
//             transform: translateX(-100%);
//         }
//         &[id="slide03"]:checked ~ ${SlideContent} ul li {
//             transform: translateX(-200%);
//         }

//         //각 section 이동 시, 각 nav 만 보이도록 설정
//         &[id="slide01"]:checked ~ ${SlideContent} ${SlideControl} .control01 {
//             display: flex;
//         }

//         &[id="slide02"]:checked ~ ${SlideContent} ${SlideControl} .control02 {
//             display: flex;
//         }

//         &[id="slide03"]:checked ~ ${SlideContent} ${SlideControl} .control03 {
//             display: flex;
//         }
//     }
// `;
