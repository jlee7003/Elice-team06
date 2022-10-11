import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global-style";
import App from "./App";
import { RecoilRoot } from "recoil";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <GlobalStyle />
        <RecoilRoot>
            <React.Suspense fallback={<div>Loading...</div>}>
                <App />
            </React.Suspense>
        </RecoilRoot>
    </React.StrictMode>
);
