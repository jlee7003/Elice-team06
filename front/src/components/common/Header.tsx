import { Logo } from "@/styles/common";
import {
    HeaderContainer,
    HeaderMenuContainer,
    HeaderMenuItem,
    HeaderSticky,
    FlexBox,
} from "@/styles/common/Header-style";
import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "@/routes/.";
import ThemeWrapper from "@/components/ThemeWrapper";

function Header() {
    const navigate = useNavigate();
    const home = () => {
        navigate(ROUTES.Home.path);
    };
    return (
        <HeaderSticky>
            <HeaderContainer>
                <Logo onClick={home} />
                <HeaderMenuContainer>
                    {/* 로그인 안했을 경우 */}
                    <HeaderMenuItem to={ROUTES.Login.path}>로그인/회원가입</HeaderMenuItem>

                    {/* 로그인 했을 경우 */}
                    {/* <HeaderMenuItem to={ROUTES.Login.path}>요청 게시판</HeaderMenuItem> */}
                    <HeaderMenuItem to="">요청 게시판</HeaderMenuItem>
                    <HeaderMenuItem to="">마이 페이지</HeaderMenuItem>
                    <HeaderMenuItem to="">로그아웃</HeaderMenuItem>
                    {/* <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
                            DarkMode
                        </ThemeToggle> */}
                    <FlexBox>
                        <ThemeWrapper></ThemeWrapper>
                    </FlexBox>

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
