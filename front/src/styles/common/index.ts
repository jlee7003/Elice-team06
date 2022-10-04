import styled, { css } from "styled-components";

export const main = {
    width: css`
        max-width: 1875px;

        margin: auto;
    `,
    fontSize: css`
        font-size: 36px;
    `,
    color: css`
        color: #61be92;
    `,
};

export const Logo = styled.img.attrs({
    src: "src/assets/logo.png",
    alt: "logo_image",
})`
    width: 130px;
    height: 60px;

    background-color: white;
`;
