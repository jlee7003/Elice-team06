import { createGlobalStyle, css } from "styled-components";
import { Props } from "../App";
const font = css`
    @font-face {
        font-family: "EliceDigitalBaeum-Bd";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_elice@1.0/EliceDigitalBaeum-Bd.woff2")
            format("woff2");
        font-weight: normal;
        font-style: normal;
    }
`;

const GlobalStyle = createGlobalStyle<Props>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: ${font};
        #root > div{
            width:100vw;
            height:100vh;
        }
        ${(props) =>
            props.mode == "Light"
                ? css`
                      background-color: white;
                      color: black;
                  `
                : props.mode == "Dark"
                ? css`
                      background-color: black;
                      color: white;
                  `
                : props.mode == "Common"
                ? css`
                      background-color: transparent;
                      color: white;
                  `
                : css`
                      background-color: transparent;
                      color: black;
                  `}
    }

    button, a {
        all: unset;

        &:hover {
            cursor: pointer;
        }
    }

    #root > div {
        width: 100vw;
        height: 100vh;

        
    }
`;

export default GlobalStyle;
