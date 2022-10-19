import { Banner } from "@/styles/banner";
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
//styles
import {
    Container,
    ChallengeContainter,
    MyChallenges,
    LikeChallenges,
    BoardsContainer,
    SideBar,
    MySec,
    MenuContainer,
    Buttons,
    Menu,
    ChallengeIcon,
    UserIcon,
} from "@/styles/pages/mypage-style";
import { CategoryTitle } from "@/styles/pages/home-style";
//components
import ChallengeCard from "@/components/ChallengeCard";
import ReqeustCards from "@/components/RequestCards";
//user's data
import { useRecoilState, useRecoilValue } from "recoil";
import userState from "@/recoil/user";

import post from "@/lib/dummyPosts";

//현재 post는 전체 게시글 데이터를 받아오는 더미데이터로 향후 특정유저의 포스트만 모아놓는 더미데이터와 유저 더미데이터를 만들어서 사용할 예정

const Mypage = () => {
    // const [user, setUser] = useRecoilState(userState);
    const user = useRecoilValue(userState);
    const navigate = useNavigate();
    console.log("user:", user);

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as HTMLButtonElement;
        const url = `/${name}`;
        navigate(url);
    };

    return (
        <div>
            <Container>
                <SideBar>
                    <MySec>
                        <span>
                            <p>{user?.nickname}</p>
                            <span></span>
                        </span>
                        <span>{user?.introduce}</span>
                    </MySec>
                    <MenuContainer>
                        <Menu>
                            <span>마이페이지</span>
                            <Buttons name="MyChallengeList" onClick={onClick}>
                                <ChallengeIcon />
                                도전한 챌린지
                            </Buttons>
                            <Buttons name="MyPosts" onClick={onClick}>
                                <ChallengeIcon />
                                투표한 챌린지
                            </Buttons>
                        </Menu>
                        <Menu>
                            <span>회원정보</span>
                            <Buttons name="editMyInfo" onClick={onClick}>
                                <UserIcon />
                                회원정보 변경
                            </Buttons>
                            <Buttons name="withdrawal" onClick={onClick}>
                                <UserIcon />
                                회원정보 탈퇴
                            </Buttons>
                        </Menu>
                    </MenuContainer>
                </SideBar>
                <ChallengeContainter>
                    <MyChallenges>
                        <CategoryTitle>내가 도전한 챌린지</CategoryTitle>
                        <div>
                            <ChallengeCard level="beginner" />
                            <ChallengeCard level="intermediate" />
                            <ChallengeCard level="advanced" />
                            <ChallengeCard />
                        </div>
                    </MyChallenges>
                    <LikeChallenges>
                        <CategoryTitle>좋아요 한 챌린지</CategoryTitle>
                        <BoardsContainer>
                            <ReqeustCards value={post} />
                        </BoardsContainer>
                    </LikeChallenges>
                </ChallengeContainter>
            </Container>
        </div>
    );
};

export default Mypage;
