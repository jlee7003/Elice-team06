import { Banner } from "@/styles/banner";
import { MouseEvent, useRef } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//styles
import { BoardsContainer } from "@/styles/pages/mypage-style";
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
import { CategoryTitle } from "@/styles/pages/home-style";
import { Main } from "@/components/common/Main";
//user's data
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "@/recoil/user";
//API import
import API from "@/api/.";
import { myInfo } from "@/api/user";
//error handling
import { ROUTES } from "@/routes/.";
//import Modal
import AlertModal from "@/modal/AlertModal";
import BoardEditModal from "@/modal/EditModal";

import dateFormat from "@/lib/dateFormat";
type formData = {
    title: string;
    description: string;
};
const MyPosts = () => {
    // const [user, setUser] = useRecoilState(userState);
    const user = useRecoilValue(userState);
    const navigate = useNavigate();
    const [myBoardPostList, setmyBoardPostList] = useState<any>();
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

    const [userInfo, setUserInfo] = useState<{
        nickname?: string;
        introduce?: string;
        age?: string;
        region?: string;
        gender?: string;
        profile_image?: string | null;
    } | null>(null);

    //내가 등록한 정보 받아오기
    useEffect(() => {
        const getAllMyPosts = async () => {
            const result = await API.get(["board", "myPost"]);
            if (result === null) {
                navigate(ROUTES.ErrorPage.path);
                return;
            }
            return result.data;
        };
        getAllMyPosts().then((res: any) => {
            if (res == undefined) {
                navigate(ROUTES.ErrorPage.path);
                return; //to alret
            }
            const postList = [];
            const converting = res.map((post: any) => {
                postList.push(post);
            });
            setmyBoardPostList(postList);
        });
    }, []);

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        const { name } = e.target as HTMLButtonElement;
        let url = `/${name}`;
        if (name == "changePassword") {
            url = `/Auth`;
            navigate(url, {
                state: {
                    id: name,
                },
            });
        }

        navigate(url, {
            state: {
                id: name,
            },
        });
    };

    //from PostCards, same
    /** API */
    //LIKE
    const puttingLike = async (param: string, data: any) => {
        const result = await API.post<number>(["vote", param], data);
        return result;
    };
    //GET
    const gettingPost = async (params: string) => {
        const result = await API.get(["board", params]);
        return result;
    };
    //DELETE
    const deletingPost = async (param: string) => {
        const result = await API.delete<number>(["board", param]);
        window.location.reload();
        return result;
    };
    //DELETE
    const onClickDelete = (target: number) => {
        deletingPost(target.toString());
    };
    //edit
    const onClickEdit = (target: number, data: any) => {
        gettingPost(target.toString());
    };
    //LIKE
    const onLikeClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (user) {
            //해당 게시글의 id (post_id 가져오고 postId로 rename)
            const { name: postId } = e.target as HTMLButtonElement;
            // find post by post_id
            let post;
            for (let page in myBoardPostList) {
                let posts = myBoardPostList[page];
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
            <Main>
                <CategoryTitle>내가 등록한 게시글 목록</CategoryTitle>
                {myBoardPostList && (
                    <BoardsContainer>
                        {myBoardPostList.map((post, idx) => {
                            return (
                                <Article key={idx}>
                                    <ArtContainer>
                                        <Contents>
                                            <h3>{post.title}</h3>
                                            <p>{post.description}</p>
                                        </Contents>
                                        <Box>
                                            <LikeButton name={post.id} onClick={onLikeClick}>
                                                {post._count.VotePost +
                                                    (likeData.hasOwnProperty(post.id) &&
                                                    likeData[post.id]
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
                                        </Details>
                                    </DetailContainer>
                                </Article>
                            );
                        })}
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
                    </BoardsContainer>
                )}
            </Main>
        </>
    );
};

export default MyPosts;
