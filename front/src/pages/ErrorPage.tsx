import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, LoadingBox, LoadingText } from "@/styles/pages/error-style";
import { Loading } from "@/styles/common";
import { ROUTES } from "@/routes";

const ErrorPage = () => {
    const navigate = useNavigate();

    /* 3초 뒤 리다이렉트 코드 */
    useEffect(() => {
        setTimeout(() => {
            navigate(ROUTES.Home.path, { replace: true });
        }, 1000);
    });

    return (
        <Container>
            <LoadingBox>
                <Loading />
                <LoadingText>
                    3초 후 <br /> 홈으로 새로고침 됩니다...
                </LoadingText>
            </LoadingBox>
        </Container>
    );
};

export default ErrorPage;
