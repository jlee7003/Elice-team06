import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
    0% {
        transform: rotate(0);
        
    }
    100%{
        transform: rotate(360deg);
    }
`;

const Loading = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    line-height: 100vh;

    div {
        animation: ${LoadingAnimation} 1s ease-in-out 0s;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
            font-size: 50px;
            color: #61be92;
        }
    }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RecoilRoot>
        <React.Suspense
            fallback={
                <Loading>
                    <div>
                        <i className="ri-loader-4-fill"></i>
                    </div>
                </Loading>
            }
        >
            <App />
        </React.Suspense>
    </RecoilRoot>
);
