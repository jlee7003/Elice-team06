import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global-style";
import App from "./App";
import { RecoilRoot } from "recoil";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RecoilRoot>
        <GlobalStyle />
        <React.Suspense fallback={<h1>loading...</h1>}>
            <App />
        </React.Suspense>
    </RecoilRoot>
);
