import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { ROUTES_LIST } from "./routes";
import token from "./recoil/token";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Api from "./api";
import GlobalStyle from "@/styles/global-style";
import visibleCommonComponent from "./recoil/visibleCommonComponent";

import { useRecoilState } from "recoil";
import DarkMode from "@/recoil/darkMode";

export interface Props {
    mode?: string;
}

const App = () => {
    const [darkMode] = useRecoilState(DarkMode);
    console.log(darkMode);
    const setToken = useSetRecoilState(token);
    const [visible, setVisible] = useRecoilState(visibleCommonComponent);
    const [themeMode, setThemeMode] = useRecoilState(DarkMode);
    const isLanding = window.location.href.split("/").includes("landing");

    useEffect(() => {
        const refresh = sessionStorage.getItem("refresh");

        if (refresh === undefined) {
            return;
        }

        const API = Api.getInstance();
        API.getToken();
    }, []);

    useEffect(() => {
        setVisible((prev) => {
            if (isLanding) {
                return (prev = false);
            }
            return (prev = true);
        });
        setThemeMode((prev: string) => {
            if (isLanding) {
                return (prev = "Common");
            }
            return (prev = prev);
        });
    }, [visible, themeMode]);

    return (
        <Router>
            {themeMode == "Common" ? (
                <GlobalStyle mode="Common" />
            ) : (
                <GlobalStyle mode={darkMode ?? "Light"} />
            )}
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
