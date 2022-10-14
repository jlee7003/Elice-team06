import { Banner } from "@/styles/banner";
import { useRecoilState } from "recoil";
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
import ReqeustCards from "@/components/RequestCards";
import post from "@/lib/dummyPosts";
//현재 post는 전체 게시글 데이터를 받아오는 더미데이터로 향후 특정유저의 포스트만 모아놓는 더미데이터와 유저 더미데이터를 만들어서 사용할 예정
const Mypage = () => {
    // const [user, setUser] = useRecoilState(userState);

    return (
        <div>
            <Banner />
            <Container>
                <SideBar>
                    <MySec>
                        {/* <p>user.name</p>
                        <p>user.desc</p> */}
                    </MySec>
                    <Menus>
                        <Buttons>첼린지 현재페이지</Buttons>
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
                        <ReqeustCards value={post} />
                    </LikeChallenges>
                </ChallengeContainter>
            </Container>
        </div>
    );
};

export default Mypage;
