import styled, { css, keyframes } from "styled-components";
import logo from "@/assets/logo.png";
import logo_white from "@/assets/logo_white.png";
import loading from "@/assets/loading.png";
// /**
//  * default size unit of project
//  */
// export const width = css`
//     max-width: 1275px;

//     margin: auto;
// `;

// export const formWidth = css`
//     width: 411px;
// `;

// /**
//  * Default Font size used in project
//  * Size1>Size2>Size3>Size4....
//  */
// export const fontSize1 = css`
//     font-size: 36px;
// `;
// export const fontSize2 = css`
//     font-size: 26px;
// `;
// export const fontSize3 = css`
//     font-size: 16px;
// `;
// export const fontSize4 = css`
//     font-size: 6px;
// `;

// /**
//  * Heading font size
//  */
// //랜딩 페이지 타이틀
// export const HeadFontSize1 = css`
//     font-size: 50px;
// `;
// //페이지 영역 타이틀
// export const HeadFontSize2 = css`
//     font-size: 26px;
// `;

// /**
//  * Button text
//  */
// export const ButtonFontSize = css`
//     font-size: 18px;
// `;

/**
 * Content font size
 */
/**
 * Background Colors used in project
 */
// export const mainGreen = css`
//     background-color: #61be92;
// `;

// export const mainBlue = css`
//     background-color: #6186be;
// `;

// export const mainPurple = css`
//     background-color: #8075bf;
// `;

// export const mainGray = css`
//     background-color: #eeeeee;
// `;

/**
 * Project Logo
 */

export const Logo = styled.img.attrs({
    src: logo,
    alt: "logo_image1",
})`
    /* width: 130px; */
    cursor: pointer;
    height: 60px;
    /* background-color: white; */
`;

export const LogoWhite = styled.img.attrs({
    src: logo_white,
    alt: "logo_white",
})`
    /* width: 130px; */
    cursor: pointer;
    height: 60px;
    /* background-color: white; */
`;

/**
 * Loading Icon
 */

const loadingAni = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Loading = styled.img.attrs({
    src: loading,
})`
    width: 80px;
    height: 80px;
    animation: ${loadingAni} 1s linear infinite;
`;
