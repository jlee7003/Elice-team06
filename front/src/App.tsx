import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ToastContainer } from "react-toastify";

import { ROUTES_LIST } from "@/routes";
import visibleCommonComponent from "./recoil/visibleCommonComponent";
import DarkMode from "@/recoil/darkMode";

import urlCheck from "@/recoil/urlCheck";
import useRefresh from "@/hooks/useRefresh";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import GlobalStyle from "@/styles/global-style";
import errorRecoil from "@/recoil/errorRecoil";
import ModalState from "@/recoil/modalState";
import ErrorModal from "@/modal/ErrorModal";

export interface Props {
    mode?: string;
}

const App = () => {
    const [onModal, setOnModal] = useRecoilState(ModalState);
    const [error] = useRecoilState(errorRecoil);
    const [darkMode2] = useRecoilState(DarkMode);
    // console.log(darkMode);
    const [visible, setVisible] = useRecoilState(visibleCommonComponent);
    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);
    let darkMode = sessionStorage.getItem("DarkMode");

    const reload = useRefresh();

    useEffect(() => {
        reload();
    }, []);

    useEffect(() => {
        setVisible((prev) => {
            if (currentUrl.split("/")[3] === "") {
                return (prev = false);
            }
            return (prev = true);
        });
        // setThemeMode((prev: string) => {
        //     if (currentUrl.split("/").includes("landing")) {
        //         console.log("prev 뭐 담고 있니?", prev);
        //         return (prev = "Light");
        //     }
        //     console.log("prev 뭐 담고 있니?", prev);

        //     return (prev = prev);
        // });
    }, [currentUrl]);
    function onClickLogout() {
        console.log("함수 실행 내용");
    }

    return (
        <>
            <GlobalStyle mode={darkMode ?? "Light"} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
                theme="light"
            />
            <Router>
                {error?.isError ? (
                    <ErrorModal setOnModal={setOnModal} logout={onClickLogout}>
                        {error?.message as string}
                    </ErrorModal>
                ) : (
                    ""
                )}
                {visible && <Header />}
                <Routes>
                    {ROUTES_LIST.map(({ path, Component }, idx) => (
                        <Route key={idx} path={path} element={<Component />} />
                    ))}
                </Routes>

                {visible && <Footer />}
            </Router>
        </>
    );
};

export default App;
