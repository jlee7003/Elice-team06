import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes/.";
import userState from "@/recoil/user";
import useLogout from "@/hooks/useLogout";
import {
    HeaderContainer,
    HeaderMenuContainer,
    HeaderMenuItem,
    HeaderSticky,
    FlexBox,
} from "@/styles/common/Header-style";
import { Logo } from "@/styles/common";
import ThemeWrapper from "@/components/ThemeWrapper";
import ModalState from "@/recoil/modalState";
import DarkMode from "@/recoil/darkMode";
import LoginModal from "@/modal/LoginModal";
import HeaderStyle from "@/styles/global-style";

export interface Props {
    mode?: string;
}

function Header() {
    const navigate = useNavigate();

    const user = useRecoilValue(userState);
    const [onModal, setOnModal] = useRecoilState(ModalState);
    const [darkMode] = useRecoilState(DarkMode);
    const setLogout = useLogout();

    const onClickLogo = () => {
        navigate(ROUTES.Home.path);
    };

    const onClickLogout = () => {
        setLogout();
    };

    return (
        <HeaderSticky mode={darkMode ?? "Light"}>
            <HeaderContainer>
                <Logo onClick={onClickLogo} />
                {user ? (
                    <>
                        <div>
                            <span
                                style={{ fontSize: "20px", color: "#61be92", fontWeight: "bold" }}
                            >
                                {user?.nickname}
                            </span>{" "}
                            님 환영합니다!
                        </div>
                        {/* <div>{user?.introduce}</div> */}
                    </>
                ) : (
                    <></>
                )}
                <HeaderMenuContainer>
                    {/* 로그인 안했을 경우 */}

                    <HeaderMenuItem to={"/reqpage/pages/1"}>요청 게시판</HeaderMenuItem>
                    {user === null ? (
                        <HeaderMenuItem to={ROUTES.Login.path}>로그인/회원가입</HeaderMenuItem>
                    ) : (
                        <>
                            <HeaderMenuItem to={ROUTES.Mypage.path}>마이 페이지</HeaderMenuItem>
                            <HeaderMenuItem as="div">
                                <button onClick={() => setOnModal("login")}>로그아웃</button>
                                {onModal == "login" && (
                                    // <ModalFrame
                                    //     setOnModal={(bool) => setOnModal(bool)}
                                    //     logout={() => onClickLogout()}
                                    // />
                                    <LoginModal
                                        setOnModal={setOnModal}
                                        logout={onClickLogout}
                                    ></LoginModal>
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
