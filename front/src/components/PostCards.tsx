import { useState, useEffect, MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import API from "@/api/.";

/*styles*/
import {
    ArtContainer,
    Article,
    Contents,
    Details,
    Box,
    Time,
    DetailContainer,
    DeleteButton,
    LikeButton,
} from "@/styles/common/requestCard-style";

//interface for data
import { PostLists } from "@/types/post";
import { userState } from "@/recoil/user";

//import Modal
import AlertModal from "@/modal/AlertModal";

//error handling
import { ROUTES } from "@/routes/.";

/**
 * postList: 각 페이지당 갖고 있는 포스트들 데이터 (부모에서 받음)
 * currentPage: 현재 페이지 위치
 */

const PostCards = (prop: {
    postLists: PostLists | null;
    currentPage: number;
    deleteMode: boolean;
}) => {
    const navigate = useNavigate();
    //user handling
    const user = useRecoilValue(userState);
    /**
     * Like handling
     * 가져온 데이터에 현재 상태(추천 on/off)를 더하여 조작
     */
    const [likesList, setLikesList] = useState(["0"]);
    const [isUserLike, setIsUserLike] = useState(false);
    const [handlieLikeNum, sethandlieLikeNum] = useState(0);
    /**
     * Delete handling
     */
    //modal handling
    const NO_MODAL = 0;
    const [modalOpen, setModalOpen] = useState(NO_MODAL);
    //관리자 모드에서 삭제하기 기능?
    //const deleteModeOn = prop.deleteMode;

    //get props *need refactoring
    const postlist = prop.postLists;
    const currentPageNum = prop.currentPage + 1;

    /**Getting & Checking Data */
    useEffect(() => {
        if (user) {
            const getLikedData = async () => {
                const result = await API.get(["board", "likePost"]);
                //null checking(1)
                if (result === null) {
                    navigate(ROUTES.ErrorPage.path);
                    return; //to alret
                }
                return result.data;
            };
            getLikedData().then((res: any) => {
                //undefined checking(2)
                if (res === undefined) {
                    navigate(ROUTES.ErrorPage.path);
                    return; //to alret
                }
                //getting post's id
                const likedPostslist = res.map((likedpost: any) => {
                    return likedpost.post_id;
                });
                //converting num->string
                const result = likedPostslist.map((i: number) => i.toString());
                setLikesList(result);
            });
        }
        return;
    }, []);

    /** API */
    //LIKE
    const puttingLike = async (param: string, data: any) => {
        const result = await API.post<number>(["vote", param], data);
        return result;
    };
    //DELETE
    const deletingPost = async (param: string) => {
        const result = await API.delete<number>(["board", param]);
        return result;
    };

    /**OnClick handling
     */
    //DELETE
    const onClickDelete = (target: number) => {
        //console.log("target", target);
        deletingPost(target.toString());
        //const el = e.target as HTMLButtonElement;
        //const v = el.getAttribute("data-post-id");
        //console.log(v);
        //deletingPost(name);
    };
    //LIKE
    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (user) {
            //해당 게시글의 id(post_id 가져오기)
            const { name } = e.target as HTMLButtonElement;
            puttingLike(name, "");
            const isAlreadyLiked = likesList.includes(name);
            //console.log("과거에 이미 추천? ", isAlreadyLiked);
            //console.log("현재 페이지에서 추천?:", isUserLike);
            //이미 추천했으면 아무것도 안 함
            if (isAlreadyLiked) {
                //console.log("이미 추천했어요! 추천하면 안돼!!");
                //console.log("과거에 이미 추천했니? ", isAlreadyLiked);
                //console.log("현재 페이지에서 추천했었니?:", isUserLike);
                return;
            }
            //아직 추천을 안 했고 지금 추천상태인지 체크
            //기존 데이터에 따르면 추천 안 했는데 현재 페이지에서 추천을 했는데 클릭한 거니까 1) 추천상태를 false로 바꾸고 2. 더한 값을 빼줘야 함
            if (isUserLike) {
                //console.log("현재 페이지에서 추천했는데 뺐어요!!");
                setIsUserLike(false);
                return sethandlieLikeNum(0);
            }
            //기존 데이터에서 추천도 안했고 현재 상태도 추천을 안했다 그러면 추천해야지
            //console.log("불러온 데이터에도 이력이 없고 이 화면에서도 추천취소든or처음이든 암튼 추천해요!");
            setIsUserLike(true);
            sethandlieLikeNum(1);
            return;
        }
        return;
    };
    /**Delete action *
     * /
    /** Style */
    //DATE formatting
    const formatDate = (createdAt: string) => {
        const dt = new Date(createdAt);
        return `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()} ${
            dt.getHours() < 12 ? "오전" : "오후"
        } ${String(dt.getHours() % 12).padStart(2, "0")}:${String(dt.getMinutes()).padStart(
            2,
            "0"
        )}`;
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
                                    <LikeButton name={`${post.id}`} onClick={onClick}>
                                        {post._count.VotePost + handlieLikeNum}
                                    </LikeButton>

                                    {/* {deleteModeOn ? (
                                    <>
                                        <span>
                                            <input type="checkbox" name={`${post.id}`}></input>
                                        </span>
                                    </>
                                ) : (
                                    <></>
                                )} */}
                                </Box>
                            </ArtContainer>
                            <DetailContainer>
                                <Details>
                                    <li>
                                        <span>작성자</span>
                                        <span>{post.author}</span>
                                    </li>
                                    <li>
                                        <Time>{formatDate(post.createdAt)}</Time>
                                    </li>
                                    <li>
                                        {user?.nickname === post.author ? (
                                            <>
                                                <DeleteButton
                                                    name={`${post.id}`}
                                                    onClick={() => {
                                                        setModalOpen(post.id);
                                                    }}
                                                >
                                                    삭제
                                                </DeleteButton>
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </li>
                                    {/* <li>
                                    <i></i>
                                    post.comments 개의 댓글
                                </li>
                                <li>
                                    <i></i>
                                    {post.view} views
                                </li> */}
                                </Details>
                            </DetailContainer>
                        </Article>
                    ))}
                    <AlertModal
                        modalOpen={modalOpen}
                        trigger={onClickDelete}
                        closeModal={() => setModalOpen(0)}
                    ></AlertModal>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default PostCards;

/**
 *
 *원본
 *
 */
