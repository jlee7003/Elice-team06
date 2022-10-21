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
import Shadow from "@/components/common/Shadow";
export interface Props {
    mode?: string;
}

const App = () => {
    const [onModal, setOnModal] = useRecoilState(ModalState);
    const [error] = useRecoilState(errorRecoil);
    // const [darkModeState] = useRecoilState(DarkMode); // DarkMode의 recoilState를 가지고 옴 지우면 안됌
    const [darkMode, setDarkMode] = useRecoilState(DarkMode);
    const [visible, setVisible] = useRecoilState(visibleCommonComponent);
    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);
    const [bodyStyle, setBodyStyle] = useState("");

    let darkModestate = localStorage.getItem("DarkMode");

    // let darkMode = sessionStorage.getItem("DarkMode");

    const reload = useRefresh();

    useEffect(() => {
        if (darkModestate == "Light") {
            setDarkMode("Dark");
        } else {
            setDarkMode("Light");
        }
    }, []);
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
    }, [currentUrl]);

    useEffect(() => {
        if (onModal === "login") {
            setBodyStyle("hidden");
            document.body.style.overflow = `${bodyStyle}`;
        } else {
            setBodyStyle("auto");
            document.body.style.overflow = `${bodyStyle}`;
        }
    }, [onModal, bodyStyle]);

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
                {onModal == "login" && <Shadow />}
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
