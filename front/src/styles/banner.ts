import styled, { css } from "styled-components";
import icons from "@/lib/icons";
import banner_img from "@/assets/banner_img.png";
import banner_cycle from "@/assets/banner_cycle.png";
import banner_bus from "@/assets/banner_bus.png";
import banner_plant from "@/assets/banner_plant.png";
interface StyleProps {
    rotate?: string;
    slideBgImg?: string;
    bgImg?: string;
    height?: string;
    mode?: string;
    bgColor?: string;
    bgPosition?: string;
    bgSize?: string;
}

export const ControlBanner = styled.div`
    margin: 0 auto;
    height: 100%;
    max-width: 1275px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    div {
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
        p {
            /* background-color: #fff; */
            /* background-color: #00000082; */
            background-color: #ffffff82;
            color: #000;
            padding: 20px;
            cursor: pointer;
            height: 50px;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            /* & + p {
                border-left: 1px solid #000;
            } */

            &:hover {
                i {
                    color: #fff;
                }
            }
            img {
                width: 17px;
                height: 17px;
            }

            i {
                transition: all 0.3s ease-in-out;
                font-size: 26px;
                /* color: #c6c6c6; */
                color: #000;
            }
        }
    }
`;

// export const BgImg = styled.p<StyleProps>`
//     background-image: ${(props) => props.bgImg};
//     background-position: right center;
//     background-size: 800px;
//     background-repeat: no-repeat;
//     color: #fff;
// `;

export const Banner = styled.div<StyleProps>`
    width: 100vw;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    transition: all 0.3s ease-in-out;
    background: ${(props) => props.bgColor};

    & > p {
        color: #fff;
        max-width: 1275px;
        height: 100%;
        margin: 0 auto;
        font-size: 30px;
        font-weight: 600;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        background-image: url(${(props) => props.bgImg});
        /* background-position: right center;
        background-size: 800px; */
        background-position: ${(props) => props.bgPosition};
        background-size: ${(props) => props.bgSize};
        background-repeat: no-repeat;

        span {
            display: block;
            padding-bottom: 40px;
        }
    }
`;

export const HomeBanners = styled.div<StyleProps>`
    /* height: 280px; */
    height: ${(props) => props.height};
    width: 100%;
    position: relative;
    overflow: hidden;
    ${(props) =>
        props.mode == "Light"
            ? css`
                  opacity: 1;
              `
            : css`
                  opacity: 0.3;
              `};
`;
