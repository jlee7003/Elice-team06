import { createGlobalStyle, css } from "styled-components";

const font = css`
    @font-face {
        font-family: "EliceDigitalBaeum-Bd";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_elice@1.0/EliceDigitalBaeum-Bd.woff2")
            format("woff2");
        font-weight: normal;
        font-style: normal;
    }
`;

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: ${font};
    }

    button, a {
        all: unset;

        &:hover {
            cursor: pointer;
        }
    }
`;

export default GlobalStyle;
