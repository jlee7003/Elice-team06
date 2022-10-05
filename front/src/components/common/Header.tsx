import React from "react";
import { Logo } from "@styles/common";
import {
    HeaderContainer,
    HeaderMenuContainer,
    HeaderMenuItem,
    HeaderAdminMenuItem,
    Header100,
} from "@styles/common/Header-style";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const login = () => {
        navigate("/login");
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
                    <HeaderMenuItem onClick={login}>로그인/회원가입</HeaderMenuItem>

                    {/* 로그인 했을 경우 */}
                    <HeaderMenuItem>요청 게시판</HeaderMenuItem>
                    <HeaderMenuItem>마이 페이지</HeaderMenuItem>
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
