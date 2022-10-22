import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

import API from "@/api/index";
import { addCommentResult, ChallengeJoinResult, ChallengeBoardModel } from "@/types/challengeTypes";
import { ROUTES } from "@/routes";
import { getComment } from "@/api/challenge";
import { commentState } from "@/recoil/ChallengeRecoil";
import Pagination from "./pagination";

import { ChallengeBoardWriter } from "@/recoil/ChallengeRecoil";
import { userState } from "@/recoil/user";
import errorRecoil from "@/recoil/errorRecoil";
import ModalState from "@/recoil/modalState";

import {
    Main,
    Title,
    SubTitle,
    Contents,
    CommentBox,
    Sub,
    TargetLabel,
    Graph,
    OKButton,
    FlexBox,
    Input,
    CommentButton,
    CommentContainer,
    NoComments,
    LastLabel,
} from "@/styles/pages/challengedetail-style";

const ChallengeDetailMainCard = () => {
    const [limit] = useState(5); // 한 페이지에 보여줄 데이터의 개수
    const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
    const [blockNum, setBlockNum] = useState(0); // 한 페이지에 보여 줄 페이지네이션의 개수를 block으로 지정하는 state. 초기 값은 0
    const offset = (page - 1) * limit;
    const [comments, setComments] = useRecoilState(commentState);
    const [counts, setCounts] = useState(0); // 데이터의 총 개수를 setCounts 에 저장해서 사용

    const [userData, setUserData] = useRecoilState(ChallengeBoardWriter);
    const token = sessionStorage.getItem("refresh");
    const setOnModal = useSetRecoilState(ModalState);
    const setError = useSetRecoilState(errorRecoil);
    const user = useRecoilValue(userState);
    const location = useLocation();
    const navigate = useNavigate();
    let challengeId = location.state.id;
    const commentsRef = useRef<HTMLInputElement>(null);

    let d = new Date(userData?.start_date);
    let e = new Date(userData?.due_date);
    const startDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    const endDate = `${e.getFullYear()}-${e.getMonth() + 1}-${e.getDate()}`;

    const getComments = async () => {
        let start = 1;
        let end = 100000;
        let count = 1;
        await getComment(challengeId, start, end, count).then((res) => {
            if (res === null) {
                navigate(ROUTES.ErrorPage.path);
            } else {
                setComments(res.data);
                const count = Object.keys(res.data).length;
                setCounts(count);
            }
        });
    };

    const getBoardData = () => {
        API.get<ChallengeBoardModel>(["challenge", challengeId.toString()]).then((res) => {
            console.log(res);
            if (res === null) {
                navigate(ROUTES.ErrorPage.path);
            } else {
                setUserData(res.data);
            }
        });
    };

    function addjoiner() {
        API.post<ChallengeJoinResult>(
            ["challenge", challengeId.toString(), "join"],
            challengeId
        ).then((result) => {
            if (result === null) {
                navigate(ROUTES.ErrorPage.path);
            } else {
                getBoardData();
            }
        });
    }

    const addComments = async () => {
        let addCommentData = {
            description: "",
        };

        if (commentsRef.current == null) {
            return;
        }

        if (commentsRef.current.value == "") {
            alert("댓글을 입력하세요");
            return;
        }

        addCommentData = {
            description: commentsRef.current?.value,
        };

        const result: any = await API.post<addCommentResult>(
            [`challenge/${challengeId.toString()}/comment`],
            addCommentData
        );

        if (result?.response?.status != undefined) {
            setError({
                isError: true,
                message: result?.response?.data?.message,
            });
            return;
        }

        setCounts((prev: number) => {
            return (prev = Object.keys(comments).length);
        });

        commentsRef.current.value = "";

        getComments();

        setPage(1);
    };

    useEffect(() => {
        getComments();
        getBoardData();
    }, []);

    return (
        <>
            {userData == null ? (
                <></>
            ) : (
                <>
                    <Main>
                        <div style={{ height: "580px" }}>
                            <Title>{userData?.title}</Title>
                            <SubTitle>
                                😊 챌린지 기간
                                <span>
                                    {startDate}~{endDate}
                                </span>
                            </SubTitle>
                            <SubTitle style={{ marginBottom: "30px" }}>
                                😊 총 참가 인원
                                <span> {userData?.Challenger.length}</span>
                            </SubTitle>
                            <Contents>{userData?.description}</Contents>
                        </div>
                        <CommentContainer>
                            <SubTitle>챌린저스의 한마디</SubTitle>

                            {Object.values(comments).length != 0 ? (
                                <div style={{ height: "300px" }}>
                                    {Object.values(comments)
                                        .reverse()
                                        .slice(offset, offset + limit)
                                        .map((comment: any) => (
                                            <CommentBox key={comment[0].id}>
                                                <div>작성자</div>
                                                <div
                                                    style={{
                                                        fontSize: "1em",
                                                        height: "24px",
                                                        width: "137px",
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                    }}
                                                >
                                                    {comment[0].author}
                                                </div>
                                                <div>{comment[0].description}</div>
                                            </CommentBox>
                                        ))}
                                </div>
                            ) : (
                                <NoComments>첫 댓글을 달아주세요 !</NoComments>
                            )}
                            <Pagination
                                limit={limit}
                                page={page}
                                setPage={setPage}
                                blockNum={blockNum}
                                setBlockNum={setBlockNum}
                                counts={counts}
                            />
                        </CommentContainer>
                    </Main>
                    <Sub>
                        <SubTitle>챌린지 목표</SubTitle>
                        <TargetLabel>{userData?.goal}</TargetLabel>
                        <SubTitle>챌린지 실천에 따른 효과</SubTitle>
                        <Graph></Graph>
                        <SubTitle>참여중인 사람들</SubTitle>
                        <div style={{ display: "flex" }}>
                            {userData?.Challenger.length <= 3
                                ? userData?.Challenger.map((proposer: any) => (
                                      <TargetLabel
                                          key={proposer.nickname}
                                          style={{ marginRight: "20px" }}
                                      >
                                          {proposer.nickname}
                                      </TargetLabel>
                                  ))
                                : userData?.Challenger.slice(0, 4).map((proposer: any) => (
                                      <TargetLabel
                                          key={proposer.nickname}
                                          style={{ marginRight: "20px" }}
                                      >
                                          {proposer.nickname}
                                      </TargetLabel>
                                  ))}
                            {userData?.Challenger.length <= 4 ? (
                                <></>
                            ) : (
                                <LastLabel>...외 {userData?.Challenger.length - 4}명</LastLabel>
                            )}

                            {}
                        </div>
                        <OKButton onClick={addjoiner}>챌린지 참여하기</OKButton>
                        <SubTitle>댓글 남기기</SubTitle>
                        <span
                            style={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                margin: "0px 10px 0px 0px",
                            }}
                        >
                            작성자
                        </span>
                        <span style={{ fontSize: "16px", fontWeight: "bold", color: "#838383" }}>
                            {user?.nickname}
                        </span>
                        <Input placeholder="댓글을 작성하세요." name="comment" ref={commentsRef} />
                        <CommentButton onClick={addComments}>댓글 등록</CommentButton>
                    </Sub>
                </>
            )}
        </>
    );
};

export default ChallengeDetailMainCard;
