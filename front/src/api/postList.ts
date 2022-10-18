import API from "./index";
//import interface of comming data
import { PostLists } from "@/types/post";

//전체 게시글 목록을 불러오는 API
//query가 필요한 get.
export const AllPostList = async (params: string[]) => {
    const queryString = params.join("&");
    const result = await API.getQuery<PostLists>(["board/all", queryString]);
    return result;
};

//내가 등록한 게시글만 불러오기
export const MyPostList = async () => {
    const result = await API.get<PostLists>(["board", "myPost"]);
    return result;
};
//투표한(=좋아요 한) 게시글 목록 불러오기
export const LikePostList = async () => {
    const result = await API.get<PostLists>(["board", "likePost"]);
    return result;
};

//1.  챌린지 전체 목록
//2. 챌린지 댓글 목록
//3. 요청게시판 게시글 전체 목록
//4. 게시글 댓글 목록

//5? 내가 참여한 챌린지 목록
//6? 내가 투표한 게시글 목록
