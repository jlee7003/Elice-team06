import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import { ROUTES_LIST } from "./routes/route";

const App = () => {
    return (
        <Router>
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
