import React from "react";
import { Logo } from "@styles/common";
import { HeaderContainer, HeaderMenuContainer, HeaderMenuItem } from "@styles/common/Header-style";
function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <HeaderMenuContainer>
                <HeaderMenuItem>요청 게시판</HeaderMenuItem>
                <HeaderMenuItem>마이 페이지</HeaderMenuItem>
                <HeaderMenuItem>로그아웃</HeaderMenuItem>
            </HeaderMenuContainer>
        </HeaderContainer>
    );
}

export default Header;
