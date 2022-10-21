import { useState, useEffect } from "react";
import { Container, LogoContainer, TopImage } from "../styles/pages/userInfo-style";
import { myInfo } from "@/api/user";
import { Logo } from "@/styles/common";
import { Info } from "@/recoil/user";
import UserInfoForm from "@/components/UserInfoForm";
const UserInfo = () => {
    const [userInfo, setUserInfo] = useState<Info | null>(null);

    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        await myInfo().then((res) => {
            if (res === null) {
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
