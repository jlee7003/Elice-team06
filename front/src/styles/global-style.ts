import { createGlobalStyle, css } from "styled-components";
import { Props } from "../App";
// import { Props } from "@/components/common/Header";

const font = css`
    @font-face {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 100;
        src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2) format("woff2"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff) format("woff"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf) format("opentype");
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 300;
        src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2) format("woff2"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff) format("woff"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf) format("opentype");
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 400;
        src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format("woff2"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format("woff"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format("opentype");
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 500;
        src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2) format("woff2"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff) format("woff"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf) format("opentype");
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 700;
        src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) format("woff2"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format("woff"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format("opentype");
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 900;
        src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff2) format("woff2"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff) format("woff"),
            url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf) format("opentype");
    }
`;

const GlobalStyle = createGlobalStyle<Props>` 
    * {
        font-family: "Noto Sans KR", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        transition: background-color 0.2s linear;
    }

    button, a {
        all: unset;
        &:hover {
            cursor: pointer;
        }
    }

    body{
        width: 100%;
        height: 100%;
        ${(props) =>
            props.mode == "Light"
                ? css`
                      background-color: #282828;
                      color: white;
                  `
                : css`
                      background-color: white;
                      color: black;
                      input {
                          background-color: #fbfbfb;
                      }
                  `}
    }
    label > div {
        ${(props) =>
            props.mode == "Light"
                ? css`
                      color: black;
                      label {
                          background-color: #282828;
                      }
                      label > div {
                          background-color: #cccccc;
                      }
                  `
                : css`
                      color: white;
                      label {
                          background-color: white;
                      }
                      label > div {
                          background-color: blue;
                          transform: translateX(20px);
                      }
                  `}
    }
    header{
       
                  ${(props) =>
                      props.mode == "Light"
                          ? css`
                                background-color: #282828;
                                color: white;
                                label {
                                    background-color: white;
                                }
                                label > div {
                                    background-color: #838383;
                                }
                            `
                          : css`
                                background-color: white;
                                color: black;
                                label {
                                    background-color: #282828;
                                }
                                label > div {
                                    background-color: #cccccc;
                                }
                            `}
    }
`;
export default GlobalStyle;
