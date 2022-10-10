import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { ROUTES_LIST } from "./routes";
import token from "./recoil/token";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Api from "./api";
import { useRecoilState } from "recoil";
import visibleCommonComponent from "./recoil/visibleCommonComponent";

const App = () => {
    const setToken = useSetRecoilState(token);
    const [visible, setVisible] = useRecoilState(visibleCommonComponent);
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
    }, [visible]);

    return (
        <Router>
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
