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

import ThemeProvider from "@/UI/themeProvider";
import { useRecoilState } from "recoil";
import DarkMode from "@/recoil/darkMode";
export interface Props {
    mode?: string;
}
const App = () => {
    const [darkMode] = useRecoilState(DarkMode);
    const setToken = useSetRecoilState(token);
    const [visible, setVisible] = useRecoilState(visibleCommonComponent);
    const [themeMode, setThemeMode] = useRecoilState(DarkMode);
    const isLanding = window.location.href.split("/").includes("landing");

    useEffect(() => {
        // const refreshToken = sessionStorage.getItem("refreshToken");
        // if (refreshToken != null) {
        //     const API = Api.getInstance();
        //     API.post<{ accessToken: string; refreshToken: string }>(["api", "current"], {}).then(
        //         (res) => {
        //             setToken(res.data.accessToken);
        //         }
        //     );
        // }
    });

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
            return (prev = "Light");
        });
    }, [visible, themeMode]);

    return (
        <Router>
            <ThemeProvider>
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
            </ThemeProvider>
        </Router>
    );
};

export default App;
