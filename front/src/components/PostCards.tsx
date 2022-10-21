import { useState, useEffect, MouseEvent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
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
import { PostLists, LikedLists } from "@/types/post";
import { userState } from "@/recoil/user";
//API import
import API from "@/api/.";
//error handling
import { ROUTES } from "@/routes/.";
/**
 * postList: 각 페이지당 갖고 있는 포스트들 데이터 (부모에서 받음)
 * currentPage: 현재 페이지 위치
 */

const PostCards = (prop: { postLists: PostLists | null; currentPage: number }) => {
    const navigate = useNavigate();
    const user = useRecoilValue(userState);
    const postlist = prop.postLists;
    const currentPageNum = prop.currentPage + 1;
    const [like, setLike] = useState(0);
    const [userLiked, setUserLiked] = useState<LikedLists | null>(null);

    // useEffect(() => {
    //     const putLike = async(params);
    // }, []);

    //이미 투표했는지 체크
    // useEffect(() => {
    //     const getLikedData = async () => {
    //         const result = await API.get(["board", "likePost"]);
    //         //응답이 null 경우 체크()
    //         if (result === null) {
    //             navigate(ROUTES.ErrorPage.path);
    //             return; //to alret
    //         }
    //         return result.data;
    //     };
    //     getLikedData().then((res) => {
    //         //응답이 undefined 경우 체크(2)
    //         if (res === undefined) {
    //             navigate(ROUTES.ErrorPage.path);
    //             return; //to alret
    //         }
    //         console.log("res", res);
    //         //setUserLiked(res);
    //     });
    // });

    const onClick = () => {
        //클릭을하면 아이디 소유자가 추천을 했는지 확인을 해봐야 함
        console.log("userLiked ", userLiked);
        console.log("like ", like);
        setLike(like + 1);
    };

    return (
        <>
            {postlist ? (
                <>
                    {postlist[currentPageNum].map((post, idx) => (
                        <Article key={idx}>
                            <ArtContainer>
                                <Contents>
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                </Contents>
                                <Box>
                                    <button onClick={onClick}>{post._count.VotePost}</button>
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

export default PostCards;
