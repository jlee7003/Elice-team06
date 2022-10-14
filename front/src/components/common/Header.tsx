import { useNavigate, Link } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import userState from "@/recoil/user";
import { ROUTES } from "@/routes/.";
import Api from "@/api/.";
import { Logo } from "@/styles/common";
import {
    HeaderContainer,
    HeaderMenuContainer,
    HeaderMenuItem,
    HeaderSticky,
    FlexBox,
} from "@/styles/common/Header-style";
import ThemeWrapper from "@/components/ThemeWrapper";

function Header() {
    const navigate = useNavigate();
    const user = useRecoilValue(userState);
    const resetUser = useResetRecoilState(userState);

    const onClickLogo = () => {
        navigate(ROUTES.Home.path);
    };

    const onClickLogout = () => {
        const API = Api.getInstance();

        API.resetToken();
        resetUser();
    };

    return (
        <HeaderSticky>
            <HeaderContainer>
                <Logo onClick={onClickLogo} />
                <HeaderMenuContainer>
                    {/* 로그인 안했을 경우 */}

                    {user === null ? (
                        <HeaderMenuItem to={ROUTES.Login.path}>로그인/회원가입</HeaderMenuItem>
                    ) : (
                        <>
                            <HeaderMenuItem to={ROUTES.ReqPage.path}>요청 게시판</HeaderMenuItem>
                            <HeaderMenuItem to={ROUTES.Mypage.path}>마이 페이지</HeaderMenuItem>
                            <HeaderMenuItem as="button" onClick={onClickLogout}>
                                로그아웃
                            </HeaderMenuItem>
                        </>
                    )}
                    {/* <HeaderMenuItem to={ROUTES.Login.path}>요청 게시판</HeaderMenuItem> */}
                    {/* <ThemeToggle toggle={toggleTheme} mode={ThemeMode}>
                            DarkMode
                        </ThemeToggle> */}
                    <FlexBox>
                        <ThemeWrapper />
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
