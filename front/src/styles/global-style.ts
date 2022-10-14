import { createGlobalStyle, css } from "styled-components";
import { Props } from "../App";

const font = css`
    /**/
    @font-face {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 100;
        src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2) format("woff2"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff) format("woff"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf) format("opentype");
    }
`;
const GlobalStyle = createGlobalStyle<Props>` * {
    font-family: "Noto Sans KR", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    transition: background-color 0.2s linear;
   /* font-family: ${font}
   ;
    */
    #root > div{
        width:100vw;
        height:100vh;
   }

    /* ${(props) =>
        props.mode == "Light"
            ? css`
                  background-color: white;
                  color: black;
                  input {
                      background-color: #fbfbfb;
                  }
              `
            : props.mode == "Dark"
            ? css`
                  background-color: #282828;
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
              `} */
}
button, a {
    all: unset;
    &:hover {
        cursor: pointer;
   }
}
body{
    ${(props) =>
        props.mode == "Light"
            ? css`
                  background-color: white;
                  color: black;
                  input {
                      background-color: #fbfbfb;
                  }
              `
            : css`
                  background-color: #282828;
                  color: white;
              `}
}
#root > div {
    width: 100vw;
    height: 100vh;
}
`;
export default GlobalStyle;
