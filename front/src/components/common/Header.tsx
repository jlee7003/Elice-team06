import React from "react";
import { Logo } from "@/styles/common";
import {
    HeaderContainer,
    HeaderMenuContainer,
    HeaderMenuItem,
    Header100,
} from "@/styles/common/Header-style";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/.";
function Header() {
    const navigate = useNavigate();

    const login = () => {
        navigate(ROUTES.Login.path);
    };
    const RequestBoard = () => {
        navigate(ROUTES.Reqpage.path);
    };
    const home = () => {
        navigate("/");
    };

    return (
        <Header100>
            <HeaderContainer>
                <Logo onClick={home} />
                <HeaderMenuContainer>
                    {/* 로그인 안했을 경우 */}
                    <HeaderMenuItem onClick={login} style={{ marginRight: "54px" }}>
                        로그인/회원가입
                    </HeaderMenuItem>

                    {/* 로그인 했을 경우 */}
                    <HeaderMenuItem onClick={RequestBoard} style={{ marginRight: "54px" }}>
                        요청 게시판
                    </HeaderMenuItem>
                    <HeaderMenuItem style={{ marginRight: "54px" }}>마이 페이지</HeaderMenuItem>
                    <HeaderMenuItem>로그아웃</HeaderMenuItem>

                    {/* 관리자일 경우  */}
                    {/* <HeaderMenuItem>요청 게시판</HeaderMenuItem>
                <HeaderAdminMenuItem>
                    <span
                        style={{
                            background: "#8000807d",
                        }}
                    >
                        마이 페이지
                    </span>
                </HeaderAdminMenuItem>
                <HeaderMenuItem>로그아웃</HeaderMenuItem> */}
                </HeaderMenuContainer>
            </HeaderContainer>
        </Header100>
    );
}

export default Header;
