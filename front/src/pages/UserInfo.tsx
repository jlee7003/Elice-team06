import { useState, useEffect } from "react";
import { Container, LogoContainer, TopImage } from "../styles/pages/userInfo-style";
import { myInfo } from "@/api/user";
import { Logo } from "@/styles/common";
import { Info } from "@/recoil/user";
import UserInfoForm from "@/components/UserInfoForm";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes";
const UserInfo = () => {
    const [userInfo, setUserInfo] = useState<Info | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        await myInfo().then((res) => {
            if (res === null) {
                navigate(ROUTES.ErrorPage.path);
                return;
            }
            setUserInfo({
                age: res?.data?.age,
                gender: res?.data?.gender,
                introduce: res?.data?.introduce,
                nickname: res?.data?.nickname,
                profile_image: null,
                region: res?.data?.region,
            });
        });
    };

    return (
        <>
            {userInfo !== null && (
                <>
                    <TopImage />
                    <Container>
                        <div>
                            <LogoContainer>
                                <Logo />
                            </LogoContainer>
                            <UserInfoForm userInfo={userInfo} />
                        </div>
                    </Container>
                </>
            )}
        </>
    );
};

export default UserInfo;
