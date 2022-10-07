import { Main, Title, SubTitle, Contents, Comment } from "../styles/pages/challengedetail-style";
import { Logo } from "@styles/common";
import { useState, useEffect } from "react";
import styled from "styled-components";
// import Pagination from "./Pagination";
interface User {
    title: string;
    date: string;
    participants: string;
    contents: string;
    [key: string]: string;
}

const a = [
    {
        comment: "댓글1",
    },
    {
        comment: "댓글2",
    },
    {
        comment: "댓글3",
    },
    {
        comment: "댓글4",
    },
];

const ChallengeDetailMainCard = () => {
    // const [userData, setUserData] = useRecoilState<User>({
    const [userData, setUserData] = useState<User>({
        title: "자전거 이용하기",
        date: "10/01 ~ 11/10",
        participants: "100명",
        contents: `인류가 살아가면서 배출한 온실가스들이 다양한 환경 문제로 되돌아오고 있습니다. 우리는 위기의식을 느끼고 있고 이를 줄이기 위해 노력해야한다고 생각합니다. 하지만 개인이 노력하기에 동기부여가 충분하지 않습니다. 
저희 프로젝트는 탄소발자국 줄이기를 목표로 합니다. 개인이 모여 함께 실천하게 해주고 자신이 한 행동의 긍정적인 영향을 확인할 수 있는 웹서비스를 제공하고자 합니다.`,
    });

    return (
        <>
            <Main>
                <Title>{userData?.title}</Title>
                <SubTitle>
                    😊 챌린지 기간
                    <span> {userData?.date}</span>
                </SubTitle>
                <SubTitle style={{ marginBottom: "50px" }}>
                    😊 총 참가 인원
                    <span> {userData?.participants}</span>
                </SubTitle>
                <Contents>{userData?.contents}</Contents>
                <SubTitle>챌린저스의 한마디</SubTitle>
                {/* <Comment></Comment> */}
                {a.map((user) => (
                    <Comment key={user.comment}>{user.comment}</Comment>
                ))}
            </Main>
        </>
    );
};

export default ChallengeDetailMainCard;
