import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { ROUTES_LIST } from "./routes/route";
import token from "./recoil/token";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Api from "./api";

const App = () => {
    const setToken = useSetRecoilState(token);

    useEffect(() => {
        const refreshToken = sessionStorage.getItem("refreshToken");

        if (refreshToken != null) {
            const API = Api.getInstance();
            API.post(["api", "current"], {}, "refreshed").then((res) => {
                setToken(res.data.accessToken);
            });
        }
    });

    return (
        <Router>
            <Header />
            <Routes>
                {ROUTES_LIST.map(({ path, Component }, idx) => (
                    <Route key={idx} path={path} element={<Component />} />
                ))}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
