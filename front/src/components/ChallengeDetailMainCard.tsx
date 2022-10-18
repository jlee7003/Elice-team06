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
} from "@/styles/pages/challengedetail-style";
import challengeBoardWriterData from "@/recoil/challengeBoardWriter";
import { useRef, useState, useEffect } from "react";
import Pagination from "./pagination";
import { addComment } from "@/api/challenge";
import { getComment } from "@/api/challenge";
import { useNavigate } from "react-router-dom";
import { commentState } from "@/recoil/commentState";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import userState from "@/recoil/user";
import errorRecoil from "@/recoil/errorRecoil";
import { ROUTES } from "@/routes";
import { isArray } from "lodash";
const ChallengeDetailMainCard = () => {
    // const [lists, setLists] = useState([] as any | undefined); // 백엔드와 통신하여 모든 데이터를 setLists 에 저장해서 사용
    const [limit, setLimit] = useState(5); // 한 페이지에 보여줄 데이터의 개수
    const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
    const [blockNum, setBlockNum] = useState(0); // 한 페이지에 보여 줄 페이지네이션의 개수를 block으로 지정하는 state. 초기 값은 0
    const offset = (page - 1) * limit;
    const [comments, setComments] = useRecoilState(commentState);
    const [counts, setCounts] = useState(0); // 데이터의 총 개수를 setCounts 에 저장해서 사용
    const setError = useSetRecoilState(errorRecoil);
    const user = useRecoilValue(userState);
    const navigate = useNavigate();
    const [userData, setUserData] = useRecoilState(challengeBoardWriterData);
    const commentsRef = useRef<HTMLInputElement>(null);
    let challengeId = 1;
    let start = 1;
    let end = 100000;
    let count = 1;
    const [joiner, setJoiner] = useState([
        {
            writer: "테스트",
        },
    ]);
    const getComments = () => {
        if (!sessionStorage.getItem("refresh")) {
            navigate(ROUTES.Home.path);
            return;
        }
        getComment(challengeId, start, end, count).then((res) => {
            if (res === null) {
                return;
            }
            setComments(res.data);
            const count = Object.keys(res.data).length;
            setCounts(count);
        });
    };

    let addCommentData = {
        description: "",
    };
    function addjoiner() {
        setJoiner((prev: { writer: any }[]) => {
            let joiners = [];
            if (prev.some((v) => v.writer === user?.nickname)) {
                joiners = [...prev];
            } else {
                joiners = [
                    ...prev,
                    {
                        writer: user?.nickname,
                    },
                ];
            }
            return joiners;
        });
    }

    const addComments = async () => {
        if (commentsRef.current == null) {
            return;
        }
        console.log(commentsRef.current.value);
        addCommentData = {
            description: commentsRef.current?.value,
        };
        const result: any = await addComment(addCommentData, challengeId);
        if (result?.response?.status != undefined) {
            console.log(result?.response?.data);
            setError({
                isError: true,
                message: result?.response?.data?.message,
            });
            return;
        }

        setCounts((prev: number) => {
            console.log("count", Object.keys(comments).length, count);
            return (prev = Object.keys(comments).length);
        });
        commentsRef.current.value = "";
        getComments();
        setPage(1);
    };

    useEffect(() => {
        getComments();
    }, []);

    return (
        <>
            <Main>
                <div>
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
                </div>
                <CommentContainer>
                    <SubTitle>챌린저스의 한마디</SubTitle>
                    {Object.values(comments)
                        .reverse()
                        .slice(offset, offset + limit)
                        .map((comment) => (
                            // {comments.slice(offset, offset + limit).map((comment) => (

                            // <CommentBox key={comment.data.id}>
                            //     <div>작성자</div>
                            //     <div>{comment.data.author}</div>
                            //     <div>{comment.data.description}</div>
                            // </CommentBox>
                            <CommentBox key={comment[0].id}>
                                <div>작성자</div>
                                <div>{comment[0].author}</div>
                                <div>{comment[0].description}</div>
                            </CommentBox>
                        ))}
                    {/* {Object.values(comments).map((comment) =>
                        comment.map((commen: any) => (
                            <CommentBox key={comment[0].id}>
                                <div>작성자</div>
                                <div>
                                    {comment[0].author}
                                    {comment[0].id}
                                </div>
                                <div>{comment[0].description}</div>
                            </CommentBox>
                        ))
                    )} */}
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
                <TargetLabel>{`소나무 100개 심어서 
공기를 정화시키자`}</TargetLabel>
                <SubTitle>챌린지 실천에 따른 효과</SubTitle>
                <Graph>graph</Graph>
                <SubTitle>참여중인 사람들</SubTitle>
                <div style={{ display: "flex" }}>
                    {joiner.length <= 4 ? (
                        joiner.map((comment) => (
                            <TargetLabel key={comment.writer} style={{ marginRight: "20px" }}>
                                {comment.writer}
                            </TargetLabel>
                        ))
                    ) : (
                        <FlexBox>
                            <TargetLabel>{joiner[0].writer}</TargetLabel>
                            <TargetLabel>{joiner[1].writer}</TargetLabel>
                            <TargetLabel>{joiner[2].writer}</TargetLabel>
                            <TargetLabel>{joiner[3].writer}</TargetLabel>
                            <TargetLabel>...외 {joiner.length - 4}명</TargetLabel>
                        </FlexBox>
                    )}
                </div>
                <OKButton onClick={addjoiner}>챌린지 참여하기</OKButton>
                <SubTitle>댓글 남기기</SubTitle>
                <span style={{ fontSize: "16px", fontWeight: "bold", margin: "0px 10px 0px 0px" }}>
                    작성자
                </span>
                <span style={{ fontSize: "16px", fontWeight: "bold", color: "#838383" }}>
                    {user?.nickname}
                </span>
                <Input placeholder="댓글을 작성하세요." name="comment" ref={commentsRef} />
                <CommentButton onClick={addComments}>댓글 등록</CommentButton>
            </Sub>
        </>
    );
};

export default ChallengeDetailMainCard;
