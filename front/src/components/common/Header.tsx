import React from "react";
import { Logo } from "@/styles/common";
import {
    HeaderContainer,
    HeaderMenuContainer,
    HeaderMenuItem,
    HeaderSticky,
} from "@/styles/common/Header-style";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/.";
import ThemeWrapper from "@/components/ThemeWrapper";

// import { useRecoilState } from "recoil";
// import DarkMode from "@/recoil/darkMode";
// export interface Props {
//     mode?: string;
// }
function Header() {
    // const [darkMode] = useRecoilState(DarkMode);
    const navigate = useNavigate();
    const login = () => {
        navigate(ROUTES.Login.path);
    };
    const RequestBoard = () => {
        navigate(ROUTES.ReqPage.path);
    };
    const home = () => {
        navigate(ROUTES.Home.path);
    };
    return (
        <HeaderSticky>
            <HeaderContainer>
                <Logo onClick={home} />
                <HeaderMenuContainer>
                    {/* 로그인 안했을 경우 */}
                    <HeaderMenuItem onClick={login}>로그인/회원가입</HeaderMenuItem>

                    {/* 로그인 했을 경우 */}
                    <HeaderMenuItem onClick={RequestBoard}>요청 게시판</HeaderMenuItem>
                    <HeaderMenuItem>마이 페이지</HeaderMenuItem>
                    <HeaderMenuItem>로그아웃</HeaderMenuItem>
                    <HeaderMenuItem>
                        {/* <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
                            DarkMode
                        </ThemeToggle> */}
                        <ThemeWrapper></ThemeWrapper>
                    </HeaderMenuItem>

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
        </HeaderSticky>
    );
}

export default Header;
