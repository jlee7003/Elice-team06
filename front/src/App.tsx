import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSetRecoilState, useRecoilState } from "recoil";

import Api from "./api";
import { ROUTES_LIST } from "./routes";
import userState from "@/recoil/user";
import visibleCommonComponent from "./recoil/visibleCommonComponent";
import DarkMode from "@/recoil/darkMode";

import urlCheck from "./recoil/urlCheck";
import ModalState from "@/recoil/modalState";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import GlobalStyle from "@/styles/global-style";
import modalState from "./recoil/modalState";

export interface Props {
    mode?: string;
}

const App = () => {
    const setUser = useSetRecoilState(userState);

    const [darkMode] = useRecoilState(DarkMode);
    const [modalState] = useRecoilState(ModalState);
    const [visible, setVisible] = useRecoilState(visibleCommonComponent);
    const [themeMode, setThemeMode] = useRecoilState(DarkMode);
    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);
    // const isLanding = window.location.href.split("/").includes("landing");

    useEffect(() => {
        const refresh = sessionStorage.getItem("refresh");
        if (refresh === null) {
            return;
        }

        const API = Api.getInstance();

        API.getToken().then((user) => {
            setUser(user);
        });
    }, []);

    useEffect(() => {
        setVisible((prev) => {
            if (currentUrl.split("/").includes("landing")) {
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

    return (
        <Router>
            {/* {themeMode == "Common" ? (
                <GlobalStyle mode="Common" />
            ) : (
                <GlobalStyle mode={darkMode ?? "Light"} />
            )} */}
            <GlobalStyle mode={darkMode ?? "Light"} />
            {visible && <Header />}
            <Routes>
                {ROUTES_LIST.map(({ path, Component }, idx) => (
                    <Route key={idx} path={path} element={<Component />} />
                ))}
            </Routes>

            {visible && <Footer />}
        </Router>
    );
};

export default App;
