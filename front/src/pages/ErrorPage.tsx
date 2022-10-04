import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/", { replace: true });
        }, 3000);
    });

    return (
        <div>
            <h3>error</h3>
        </div>
    );
};

export default ErrorPage;
