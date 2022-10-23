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
import BoardEditModal from "@/modal/EditModal";

//error handling
import { ROUTES } from "@/routes/.";
import { forEach } from "lodash";

/**
 * postList: 각 페이지당 갖고 있는 포스트들 데이터 (부모에서 받음)
 * currentPage: 현재 페이지 위치
 */
type formData = {
    title: string;
    description: string;
};
const PostCards = (prop: {
    postLists: PostLists | null;
    currentPage: number;
    deleteMode?: boolean;
}) => {
    const navigate = useNavigate();
    //user handling
    const user = useRecoilValue(userState);
    /**
     * Like handling
     */
    const [likesList, setLikesList] = useState(["0"]);
    const [likeData, setLikeData] = useState({});

    //modal handling
    const NO_DELETE_MODAL = 0;
    const [deleteModalOpen, setDeleteModalOpen] = useState(NO_DELETE_MODAL);
    //editing
    const NO_EDIT_MODAL = 0;
    const [editModalOpen, setEditModalOpen] = useState(NO_EDIT_MODAL);

    const [fetchData, setFetchData] = useState<formData | null>(null);
    const [postId, setpostId] = useState(null);

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
                initLikeData(result);
            });
        }
        return;
    }, []);

    /**Like:: initialize data before handling */
    const initLikeData = (likedLists) => {
        for (let page in postlist) {
            let post = postlist[page];
            for (let i = 0; i < post.length; i++) {
                if (likedLists.includes(String(post[i].id))) {
                    post[i]._count.VotePost -= 1;
                }
            }
        }
        setLikeData(
            likedLists.reduce((ori, value) => {
                return { ...ori, [value]: true };
            }, {})
        );
    };
    /**
     *         //promise error occured..why??
        likedLists.forEach((page) => {
            let post = postlist[page];
            post.forEach((p, idx) => {
                if (likedLists.includes(String(p[idx].id))) {
                    return (p[idx]._count.VotePost -= 1);
                }
            });
        });
     * 
     */

    /**
     * Delete handling
     */

    /** API */
    //LIKE
    const puttingLike = async (param: string, data: any) => {
        const result = await API.post<number>(["vote", param], data);
        return result;
    };
    //DELETE
    const deletingPost = async (param: string) => {
        const result = await API.delete<number>(["board", param]);
        window.location.reload();
        return result;
    };

    //GET
    const gettingPost = async (params: string) => {
        const result = await API.get(["board", params]);
        return result;
    };

    /**OnClick handling
     */
    //DELETE
    const onClickDelete = (target: number) => {
        deletingPost(target.toString());
    };

    //edit
    const onClickEdit = (target: number, data: any) => {
        gettingPost(target.toString());
    };
    const onClickGetData = (target: number) => {
        gettingPost(target.toString()).then((res) => {
            const data: any = res.data;
            let formData: formData = {
                title: "",
                description: "",
            };
            formData.title = data.title;
            formData.description = data.description;
            setFetchData(formData);
        });
    };

    //LIKE
    const onLikeClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (user) {
            //해당 게시글의 id (post_id 가져오고 postId로 rename)
            const { name: postId } = e.target as HTMLButtonElement;
            // find post by post_id
            let post;
            for (let page in postlist) {
                let posts = postlist[page];
                post = posts.find((postEle) => {
                    return String(postEle.id) === postId;
                });
                if (post !== undefined) break;
            }
            //put data
            puttingLike(postId, "");
            //post_id가 likeData에 있다면 true를 false로 바꾸고 없다면 true로 스위칭
            if (likeData.hasOwnProperty(postId)) {
                likeData[postId] = !likeData[postId];
            } else {
                likeData[postId] = true;
            }
            //값이 있다면 1을 / 없다면 0을 더한다.
            let totalLikes = post._count.VotePost + (likeData[postId] ? 1 : 0);
            //HTML의 요소의 innerHTML에 직접 간섭함
            (e.target as HTMLButtonElement).innerHTML = totalLikes;
        }
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

    /**Edit action */

    return (
        <>
            {postlist[currentPageNum] ? (
                <>
                    {postlist[currentPageNum].map((post, idx) => (
                        <Article key={idx}>
                            <ArtContainer>
                                <Contents>
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                </Contents>
                                <Box>
                                    <LikeButton name={post.id} onClick={onLikeClick}>
                                        {post._count.VotePost +
                                            (likeData.hasOwnProperty(post.id) && likeData[post.id]
                                                ? 1
                                                : 0)}
                                    </LikeButton>
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
                                                        setDeleteModalOpen(post.id);
                                                    }}
                                                >
                                                    삭제
                                                </DeleteButton>
                                                <DeleteButton
                                                    name={`${post.id}`}
                                                    onClick={() => {
                                                        setEditModalOpen(post.id);
                                                        onClickGetData(post.id);
                                                        setpostId(post.id);
                                                    }}
                                                >
                                                    수정
                                                </DeleteButton>
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </li>
                                </Details>
                            </DetailContainer>
                        </Article>
                    ))}
                    <AlertModal
                        modalOpen={deleteModalOpen}
                        trigger={onClickDelete}
                        closeModal={() => setDeleteModalOpen(0)}
                    ></AlertModal>
                    {fetchData && (
                        <BoardEditModal
                            modalOpen={editModalOpen}
                            trigger={onClickEdit}
                            closeModal={() => setEditModalOpen(0)}
                            fetchData={fetchData}
                            postId={postId}
                            setpostId={setpostId}
                        ></BoardEditModal>
                    )}
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default PostCards;
