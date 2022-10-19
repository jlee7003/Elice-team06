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
import { ChallengeBoardWriter } from "@/recoil/ChallengeBoardRecoil";
import { useRef, useState, useEffect } from "react";
import Pagination from "./pagination";
import { addComment, getComment, challengeJoin, getChallengeBoard } from "@/api/challenge";
import { commentState } from "@/recoil/commentState";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import userState from "@/recoil/user";
import errorRecoil from "@/recoil/errorRecoil";
import ModalState from "@/recoil/modalState";
import DidLoginModal from "@/modal/DidLoginModals";

const ChallengeDetailMainCard = () => {
    const [limit, setLimit] = useState(5); // 한 페이지에 보여줄 데이터의 개수
    const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
    const [blockNum, setBlockNum] = useState(0); // 한 페이지에 보여 줄 페이지네이션의 개수를 block으로 지정하는 state. 초기 값은 0
    const offset = (page - 1) * limit;
    const [comments, setComments] = useRecoilState(commentState);
    const [counts, setCounts] = useState(0); // 데이터의 총 개수를 setCounts 에 저장해서 사용
    const setError = useSetRecoilState(errorRecoil);
    const user = useRecoilValue(userState);

    const [userData, setUserData] = useRecoilState(ChallengeBoardWriter);
    const commentsRef = useRef<HTMLInputElement>(null);
    const [onModal, setOnModal] = useRecoilState(ModalState);

    let challengeId = 1;
    let start = 1;
    let end = 100000;
    let count = 1;
    const token = sessionStorage.getItem("refresh");
    const [joiner, setJoiner] = useState([
        {
            writer: "테스트",
        },
    ]);
    const getComments = async () => {
        await getComment(challengeId, start, end, count).then((res) => {
            if (res === null) {
                return;
            }
            setComments(res.data);
            const count = Object.keys(res.data).length;
            setCounts(count);
        });
    };

    const getBoardData = async () => {
        await getChallengeBoard(challengeId).then((res) => {
            if (res === null) {
                return;
            }
            console.log("getChallengeBoard", res.data);
            setUserData(res.data);
        });
    };
    console.log(userData);

    let addCommentData = {
        description: "",
    };
    async function addjoiner() {
        const result: any = await challengeJoin(challengeId);
        console.log(result);
        getBoardData();
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
        const timer = setTimeout(() => {
            getComments();
            getBoardData();
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {!token && <DidLoginModal setOnModal={setOnModal}>로그인을 해주세요</DidLoginModal>}
            <Main>
                <div>
                    <Title>{userData?.title}</Title>
                    <SubTitle>
                        😊 챌린지 기간
                        <span>
                            {" "}
                            {userData?.start_date}~{userData?.due_date}
                        </span>
                    </SubTitle>
                    <SubTitle style={{ marginBottom: "50px" }}>
                        😊 총 참가 인원
                        <span> {userData?.Challenger.length}</span>
                    </SubTitle>
                    <Contents>{userData?.description}</Contents>
                </div>
                <CommentContainer>
                    <SubTitle>챌린저스의 한마디</SubTitle>
                    {Object.values(comments)
                        .reverse()
                        .slice(offset, offset + limit)
                        .map((comment) => (
                            <CommentBox key={comment[0].id}>
                                <div>작성자</div>
                                <div>{comment[0].author}</div>
                                <div>{comment[0].description}</div>
                            </CommentBox>
                        ))}
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
                <Graph>graph</Graph>
                <SubTitle>참여중인 사람들</SubTitle>
                <div style={{ display: "flex" }}>
                    {userData?.Challenger.length <= 4 ? (
                        userData?.Challenger.map((proposer: any) => (
                            <TargetLabel key={proposer.nickname} style={{ marginRight: "20px" }}>
                                {proposer.nickname}
                            </TargetLabel>
                        ))
                    ) : (
                        <FlexBox>
                            <TargetLabel>{userData?.Challenger[0]}</TargetLabel>
                            <TargetLabel>{userData?.Challenger[1]}</TargetLabel>
                            <TargetLabel>{userData?.Challenger[2]}</TargetLabel>
                            <TargetLabel>{userData?.Challenger[3]}</TargetLabel>
                            <TargetLabel>...외 {userData?.Challenger.length - 4}명</TargetLabel>
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
