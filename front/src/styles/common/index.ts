import styled, { css } from "styled-components";

/**
 * default size unit of project
 */
export const width = css`
    max-width: 1875px;

    margin: auto;
`;

/**
 * Font size used in project
 */
export const fontSize1 = css`
    font-size: 36px;
`;
export const fontSize2 = css`
    font-size: 26px;
`;

/**
 * Background Colors used in project
 */
export const backgroundColor1 = css`
    background-color: #61be92;
`;

export const backgroundColor2 = css`
    background-color: #6186be;
`;

export const backgroundColor3 = css`
    background-color: #8075bf;
`;

export const backgroundColor4 = css`
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
