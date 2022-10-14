/*lib*/
import { useRecoilState } from "recoil";
import { useState } from "react";
import { Posts } from "@/lib/dummyPosts";
/*styles*/
import {
    ArtContainer,
    Article,
    Contents,
    Details,
    Box,
    Time,
    DetailContainer,
} from "@/styles/common/requestCard-style";

/*icons*/

//인터페이스는 함수밖으로

const ReqeustCards = (prop: { value: Posts }) => {
    // const [user, setUser] = useRecoilState(userData);
    // const [post, setPost]=useState([]);
    // // const boards:boradsInfo(user)=()=>{
    // const postList=useMemo(()=>{},)

    // }
    const posts = prop.value[1];
    //value가 nav 페이지에 따라 바뀌어야 함
    //prop: { value: Posts }?
    //map의 키를 무엇으로? 인덱스?

    return (
        <div>
            {posts.map((post, idx) => (
                <Article key={idx}>
                    <ArtContainer>
                        <Contents>
                            <h3>{post.title}</h3>
                            <p>{post.summary}</p>
                        </Contents>
                        <Box>
                            <button>{post.like}</button>
                            <span>{post.vote}</span>
                        </Box>
                    </ArtContainer>
                    <DetailContainer>
                        <Details>
                            <li>
                                <span>작성자</span>
                                {post.writer}
                            </li>
                            <li>
                                <i></i>
                                {post.comments}개의 댓글
                            </li>
                            <li>
                                <i></i>
                                {post.views} views
                            </li>
                        </Details>
                        <Time>{post.timestamp}</Time>
                    </DetailContainer>
                </Article>
            ))}
        </div>
    );
};

export default ReqeustCards;
