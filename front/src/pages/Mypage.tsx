import { Banner } from "@/styles/banner";
import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/user";
import {
    Container,
    ChallengeContainter,
    MyChallenges,
    LikeChallenges,
    Boards,
    SideBar,
    MySec,
    Menus,
    Buttons,
} from "@/styles/pages/mypage-style";
import ChallengeCard from "@/components/ChallengeCard";
const Mypage = () => {
    const [user, setUser] = useRecoilState(userAtom);

    return (
        <div>
            <Banner />
            <Container>
                <SideBar>
                    <MySec>
                        <p>{user.name}</p>
                        <p>{user.desc}</p>
                    </MySec>
                    <Menus>
                        <Buttons>첼린지(현재페이지)</Buttons>
                        <Buttons>회원정보 변경</Buttons>
                    </Menus>
                </SideBar>
                <ChallengeContainter>
                    <MyChallenges>
                        <p>내가 도전한 챌린지!</p>
                        <div>
                            <ChallengeCard level="beginner" />
                            <ChallengeCard level="intermediate" />
                            <ChallengeCard level="advanced" />
                            <ChallengeCard />
                        </div>
                    </MyChallenges>
                    <LikeChallenges>
                        <p>좋아요 한 챌린지!</p>
                        <Boards />
                    </LikeChallenges>
                </ChallengeContainter>
            </Container>
        </div>
    );
};

export default Mypage;
