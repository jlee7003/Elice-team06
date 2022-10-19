import { useState } from "react";
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

//real data interface
import { PostLists } from "@/types/post";
/**
 * postList: 각 페이지당 갖고 있는 포스트들 데이터 (부모에서 받음)
 * currentPage: 현재 페이지 위치
 */
const ReqeustCards = (prop: { postLists: PostLists | null; currentPage: number }) => {
    const [like, setLike] = useState(0);
    const postlist = prop.postLists;
    const currentPageNum = prop.currentPage + 1;

    return (
        <>
            {postlist ? (
                <>
                    {postlist[currentPageNum].map((post, idx) => (
                        <Article key={idx}>
                            <ArtContainer>
                                <Contents>
                                    <h3>{post.title}</h3>
                                    <p>{post.dsscription}</p>
                                </Contents>
                                <Box>
                                    <button>post.like</button>
                                    <span>post.vote</span>
                                </Box>
                            </ArtContainer>
                            <DetailContainer>
                                <Details>
                                    <li>
                                        <span>작성자</span>
                                        {post.author}
                                    </li>
                                    <li>
                                        <i></i>
                                        post.comments 개의 댓글
                                    </li>
                                    <li>
                                        <i></i>
                                        {post.view} views
                                    </li>
                                </Details>
                                <Time>{post.createdAt}</Time>
                            </DetailContainer>
                        </Article>
                    ))}
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default ReqeustCards;
