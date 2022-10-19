import styled, { css } from "styled-components";
import assets from "@/lib/assets";
import icons from "@/lib/icons";
import { Props } from "@/pages/Home";

interface StyleProps {
    rotate?: string;
    slideBgImg?: string;
}

const bannerImg = assets("banner_img.jpg");
const bannerCycleImg = assets("banner_cycle.png");
const bannerBusImg = assets("banner_bus.png");
const bannerPlantImg = assets("banner_plant.png");

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

export const Banner = styled.div`
    width: 100vw;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
        background: linear-gradient(45deg, #61be92, #56676e, black);

        P {
            background-image: url(${bannerCycleImg});
            background-position: right center;
            background-size: 800px;
            background-repeat: no-repeat;
            color: #fff;
        }
    }
    &:nth-child(2) {
        background-color: teal;
        background: linear-gradient(45deg, #61be92, #63433e, black);

        P {
            background-image: url(${bannerBusImg});
            background-position: right center;
            background-size: 800px;
            background-repeat: no-repeat;
            color: #fff;
        }
    }
    &:nth-child(3) {
        background-color: tomato;
        /* background-color: #56676e; */
        /* background-image: url(${bannerCycleImg}); */
        background: linear-gradient(45deg, #61be92, #cab8b4, black);

        P {
            background-image: url(${bannerPlantImg});
            background-position: right center;
            background-size: 800px;
            background-repeat: no-repeat;
            color: #fff;
        }
    }
    p {
        max-width: 1275px;
        height: 100%;
        margin: 0 auto;
        font-size: 30px;
        font-weight: 600;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        span {
            display: block;
            padding-bottom: 40px;
        }
    }
`;

export const HomeBanners = styled.div<Props>`
    height: 280px;
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
