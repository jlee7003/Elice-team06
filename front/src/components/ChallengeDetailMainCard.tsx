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
} from "@/styles/pages/challengedetail-style";
import { useRecoilState } from "recoil";
import challengeBoardWriterData from "@/recoil/challengeBoardWriter";
import { useRef, useState } from "react";
import Pagination from "./pagination";
import commentState from "@/recoil/commentState";
interface User {
    title: string;
    date: string;
    participants: string;
    contents: string;
    [key: string]: string;
}

const ChallengeDetailMainCard = () => {
    const [lists, setLists] = useState([] as any | undefined); // 백엔드와 통신하여 모든 데이터를 setLists 에 저장해서 사용
    const [limit, setLimit] = useState(5); // 한 페이지에 보여줄 데이터의 개수
    const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
    const [blockNum, setBlockNum] = useState(0); // 한 페이지에 보여 줄 페이지네이션의 개수를 block으로 지정하는 state. 초기 값은 0
    const offset = (page - 1) * limit;
    const [comments, setComments] = useRecoilState(commentState);
    const [counts, setCounts] = useState(0); // 데이터의 총 개수를 setCounts 에 저장해서 사용

    const [userData, setUserData] = useRecoilState(challengeBoardWriterData);
    const commentsRef = useRef<HTMLInputElement>(null);
    const [joiner, setJoiner] = useState([
        {
            writer: "테스트",
        },
    ]);
    function addjoiner() {
        setJoiner([
            ...joiner,
            {
                writer: "작성자",
            },
        ]);
    }
    let value: any;
    const [text, setText] = useState("");
    // const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    //     value = e.target.value;
    //     setText(value);
    //     // console.log(value);
    // };
    const addComments = () => {
        if (commentsRef.current == null) {
            return;
        }
        console.log(commentsRef.current.value);
        setComments([
            {
                writer: "작성자",
                comment: commentsRef.current.value,
            },
            ...comments,
        ]);
        setCounts(comments.length);
        commentsRef.current.value = "";
        setPage(1);
    };

    return (
        <>
            <Main>
                <div style={{ height: "60%" }}>
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
                <div style={{ height: "40%", position: "relative" }}>
                    <SubTitle>챌린저스의 한마디</SubTitle>
                    {comments.slice(offset, offset + limit).map((comment) => (
                        // <CommentBox key={comment.id} >
                        <CommentBox key={comment.comment}>
                            <div>작성자</div>
                            <div>{comment.writer}</div>
                            <div>{comment.comment}</div>
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
                </div>
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
                            <TargetLabel style={{ marginRight: "20px" }}>
                                {joiner[0].writer}
                            </TargetLabel>
                            <TargetLabel style={{ marginRight: "20px" }}>
                                {joiner[1].writer}
                            </TargetLabel>
                            <TargetLabel style={{ marginRight: "20px" }}>
                                {joiner[2].writer}
                            </TargetLabel>
                            <TargetLabel style={{ marginRight: "20px" }}>
                                {joiner[3].writer}
                            </TargetLabel>
                            <TargetLabel style={{ marginRight: "20px" }}>
                                ...외 {joiner.length - 4}명
                            </TargetLabel>
                        </FlexBox>
                    )}
                </div>
                <OKButton onClick={addjoiner}>챌린지 참여하기</OKButton>
                <SubTitle>댓글 남기기</SubTitle>
                <span style={{ fontSize: "14px", fontWeight: "bold", margin: "0px 10px 0px 0px" }}>
                    작성자
                </span>
                <span style={{ fontSize: "13px", fontWeight: "bold", color: "#838383" }}>
                    내 아이디
                </span>
                <Input placeholder="댓글을 작성하세요." name="comment" ref={commentsRef} />
                <CommentButton onClick={addComments}>댓글 등록</CommentButton>
            </Sub>
        </>
    );
};

export default ChallengeDetailMainCard;
