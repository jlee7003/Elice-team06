import styled from "styled-components";
import assets from "@/lib/assets";

const bannerImg = assets("banner_img.jpg");

export const Banner = styled.div`
    padding: 80px;
    width: 100%;
    height: 100px;

    background-color: #eee;
    background-image: url(${bannerImg});
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
`;
// 350px
