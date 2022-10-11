import { createGlobalStyle, css } from "styled-components";
import { Props } from "../App";
const font = css`
    /* @font-face {
        font-family: "Noto Sans KR", sans-serif;
        font-family: "EliceDigitalBaeum-Bd";
     

        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_elice@1.0/EliceDigitalBaeum-Bd.woff2")
            format("woff2");
        font-weight: normal;
        font-style: normal;
    } */
    @font-face {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 100;
        src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2) format("woff2"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff) format("woff"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf) format("opentype");
    }
`;

const GlobalStyle = createGlobalStyle<Props>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Noto Sans KR", sans-serif;
        transition: background-color 0.2s linear;

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
    input,select {
       color: black;
    }

    #root > div {
        width: 100vw;
        height: 100vh;

        
    }
`;

export default GlobalStyle;
