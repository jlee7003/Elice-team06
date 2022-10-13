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
import urlCheck from "@/recoil/urlCheck";
export interface Props {
    mode?: string;
}
const App = () => {
    const [darkMode] = useRecoilState(DarkMode);
    const setToken = useSetRecoilState(token);
    const [visible, setVisible] = useRecoilState(visibleCommonComponent);
    const [themeMode, setThemeMode] = useRecoilState(DarkMode);
    const [currentUrl, setCurrentUrl] = useRecoilState(urlCheck);
    // const isLanding = window.location.href.split("/").includes("landing");

    useEffect(() => {
        const refresh = sessionStorage.getItem("refresh");
        if (refresh != null) {
            const API = Api.getInstance();
            API.post<{ accessToken: string; refreshToken: string }>(["api", "refresh"], {}).then(
                (res) => {
                    API.setToken(res.data.accessToken);
                }
            );
        }
    });

    console.log("Current URL", currentUrl);

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
    }, [visible, themeMode, currentUrl]);

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
