import { Banner } from "@/styles/banner";
import { MouseEvent } from "react";
import { useState, useEffect } from "react";
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
    CategoryContent,
} from "@/styles/pages/mypage-style";
import { CategoryTitle } from "@/styles/pages/home-style";
import { Main } from "@/components/common/Main";
//components
import ChallengeCard from "@/components/ChallengeCard";
import PostCards from "@/components/PostCards";
//user's data
import { useRecoilState, useRecoilValue } from "recoil";
import { MyChallengeList } from "@/recoil/ChallengeRecoil";
import { userState } from "@/recoil/user";
//API import
import API from "@/api/.";
import post from "@/lib/dummyPosts";
//error handling
import { ROUTES } from "@/routes/.";
//현재 post는 전체 게시글 데이터를 받아오는 더미데이터로 향후 특정유저의 포스트만 모아놓는 더미데이터와 유저 더미데이터를 만들어서 사용할 예정
import dateFormat from "@/lib/dateFormat";

const Mypage = () => {
    // const [user, setUser] = useRecoilState(userState);
    const user = useRecoilValue(userState);
    const navigate = useNavigate();
    const [myChallengeList, setMyChallengeList] = useRecoilState(MyChallengeList);
    // console.log("user:", user);

    // useEffect(() => {
    //     //API로 정보 받아오기
    //     const getAllPosts = async (param: string) => {
    //         const result = await API.get<PostLists>(["board", "myPost"]);
    //         //응답이 null 경우 체크()
    //         if (result === null) {
    //             navigate(ROUTES.ErrorPage.path);
    //             return; //to alret
    //         }
    //         return result.data;
    //     }; //promise로 받는 것을 핸들링
    //     getAllPosts(query).then((res) => {
    //         //응답이 undefined 경우 체크(2)
    //         if (res === undefined) {
    //             navigate(ROUTES.ErrorPage.path);
    //             return; //to alret
    //         }
    //         console.log("useEffect(API) is running in boardPage");
    //         setPostList(res);
    //     });
    // }, []);

    useEffect(() => {
        API.get(["challenge", "my?start=1&end=5&count=1"]).then((res: any) => {
            return setMyChallengeList(res.data);
        });
    }, [myChallengeList]);

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as HTMLButtonElement;
        let url = `/${name}`;
        if (name == "changePassword") {
            url = `/Auth`;
            navigate(url, {
                state: {
                    id: name,
                },
            });
        }

        navigate(url, {
            state: {
                id: name,
            },
        });
    };

    return (
        <Main>
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
                            <Buttons name="Auth" onClick={onClick}>
                                <UserIcon />
                                회원정보 변경
                            </Buttons>
                            <Buttons name="changePassword" onClick={onClick}>
                                <UserIcon />
                                비밀번호 변경
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
                        <CategoryContent>
                            {/* <ChallengeCard level="beginner" />
                            <ChallengeCard level="intermediate" />
                            <ChallengeCard level="advanced" />
                            <ChallengeCard /> */}
                            {Object.values(myChallengeList)
                                .slice(0, 8)
                                .map((comment, idx) => (
                                    <ChallengeCard
                                        key={idx}
                                        id={comment[0].id}
                                        level="beginner"
                                        //   grade={true}
                                        title={comment[0].title}
                                        date={dateFormat(
                                            comment[0].start_date,
                                            comment[0].due_date
                                        )}
                                        count={comment[0]._count.Challenger}
                                        // mode={darkMode ?? "Light"}
                                    />
                                ))}
                        </CategoryContent>
                    </MyChallenges>
                    <LikeChallenges>
                        <CategoryTitle>내가 등록한 게시글 목록</CategoryTitle>
                        <BoardsContainer>
                            <PostCards postLists={null} currentPage={1} deleteMode={false} />
                        </BoardsContainer>
                    </LikeChallenges>
                </ChallengeContainter>
            </Container>
        </Main>
    );
};

export default Mypage;
