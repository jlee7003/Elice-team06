import {
    HeaderContainer,
    HeaderMenuContainer,
    HeaderMenuItem,
    HeaderSticky,
    FlexBox,
} from "@/styles/common/Header-style";
import { useNavigate, Link } from "react-router-dom";
import { useRecoilValue, useResetRecoilState, useRecoilState } from "recoil";
import userState from "@/recoil/user";
import { ROUTES } from "@/routes/.";
import Api from "@/api/.";
import { Logo } from "@/styles/common";
import ThemeWrapper from "@/components/ThemeWrapper";
import { useState } from "react";
import ModalState from "@/recoil/modalState";
import TestModal from "@/modal/TestModal";
function Header() {
    // const [onModal, setOnModal] = useState(false);
    const [onModal, setOnModal] = useRecoilState(ModalState);
    const resetUser = useResetRecoilState(userState);
    const navigate = useNavigate();
    const user = useRecoilValue(userState);

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
                {user ? (
                    <div>
                        <span style={{ fontSize: "20px", color: "green" }}>{user?.nickname}</span>{" "}
                        님 환영합니다!
                    </div>
                ) : (
                    <></>
                )}
                <HeaderMenuContainer>
                    {/* 로그인 안했을 경우 */}

                    {user === null ? (
                        <HeaderMenuItem to={ROUTES.Login.path}>로그인/회원가입</HeaderMenuItem>
                    ) : (
                        <>
                            <HeaderMenuItem to={ROUTES.ReqPage.path}>요청 게시판</HeaderMenuItem>
                            <HeaderMenuItem to={ROUTES.Mypage.path}>마이 페이지</HeaderMenuItem>
                            <HeaderMenuItem as="div">
                                <button onClick={() => setOnModal(true)}>로그아웃</button>
                                {onModal && (
                                    // <Draggable>
                                    <TestModal
                                        setOnModal={(bool) => setOnModal(bool)}
                                        logout={() => onClickLogout()}
                                    />
                                    // </Draggable>
                                )}
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
