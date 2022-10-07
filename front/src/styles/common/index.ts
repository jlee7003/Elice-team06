import styled, { css, keyframes } from "styled-components";

/**
 * default size unit of project
 */
export const width = css`
    max-width: 1275px;

    margin: auto;
`;

export const formWidth = css`
    width: 411px;
`;

/**
 * Default Font size used in project
 * Size1>Size2>Size3>Size4....
 */
export const fontSize1 = css`
    font-size: 36px;
`;
export const fontSize2 = css`
    font-size: 26px;
`;
export const fontSize3 = css`
    font-size: 16px;
`;
export const fontSize4 = css`
    font-size: 6px;
`;

/**
 * Background Colors used in project
 */
export const mainGreen = css`
    background-color: #61be92;
`;

export const mainBlue = css`
    background-color: #6186be;
`;

export const mainPurple = css`
    background-color: #8075bf;
`;

export const mainGray = css`
    background-color: #eeeeee;
`;

/**
 * Project Logo
 */
export const Logo = styled.img.attrs({
    src: "src/assets/logo.png",
    alt: "logo_image",
})`
    width: 130px;
    height: 60px;

    background-color: white;
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
    src:"src/assets/loading.png"
})` 
    width: 80px;
    height:80px;
    animation:${loadingAni} 1s linear infinite;
`