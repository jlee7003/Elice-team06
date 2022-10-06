import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import { ROUTES_LIST } from "./routes/route";
import Api from "./api";
import {  useRecoilState } from "recoil";
import visibleCommonComponent from './recoil/visibleCommonComponent'



const App = () => {
    const [visible, setVisible] = useRecoilState(visibleCommonComponent)

    const isLanding = window.location.href.split('/').includes('landing')

    useEffect(() => {
        const refreshToken = localStorage.getItem("key");

        if (refreshToken != null) {
            const API = Api.getInstance();
            API.post(["api", "current"], {}).then((res) => {
                console.log(res);
            });
        }
    });

    useEffect(()=>{
        setVisible(prev => {
            if(isLanding){
                return prev = false
            }
            return prev = true;
        })
    }, [visible])

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
