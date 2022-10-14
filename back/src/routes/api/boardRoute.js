import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";
import boardService from "../../services/boardService";

const boardRoute = Router();

//전체 게시글 목록// -->페이지네이션 ==> 갯수로 출력하는건 가능
boardRoute.get(
    "/posts",
    asyncHandler(async (req, res) => {
        const start = req.query.start;
        const end = req.query.end;
        const post = req.query.post;
        const result = await boardService.getPosts({ start, end, post });

        res.status(200).send(result);
    })
);

//특정 게시글 상세//
boardRoute.get(
    "/posts/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const result = await boardService.getPost({ postId });
        res.status(200).send(result);
    })
);

//자신이 등록한 게시글 목록//
boardRoute.get(
    "/myPosts",
    // authToken,
    asyncHandler(async (req, res) => {
        const { user_email } = req.body;
        const postData = await boardService.getPost({ author_email: user_email });
        res.status(200).send(postData);
    })
);

//자신이 투표한 게시글 목록//---> VotePost 제작해야함.
boardRoute.get(
    "/likePosts",
    // authToken,
    asyncHandler(async (req, res) => {
        const { user_email } = req.body;
        const result = await boardService.getLikePost({ user_email });

        res.status(200).send(result);
    })
);

//게시글 방문수 up//
boardRoute.post(
    "/:postId/views",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const result = await boardService.viewCount({ postId });
        res.status(200).send(result);
    })
);

//게시글 등록//
boardRoute.post(
    "/posts",
    // authToken,
    asyncHandler(async (req, res) => {
        const postData = req.body;
        // const { nickname } = req.userId;
        const result = await boardService.addPost({ postData });
        res.status(200).send(result);
    })
);

//게시글 수정//
boardRoute.put(
    "/posts/:postId",
    // authToken,
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { title, description } = req.body;
        const result = await boardService.updatePost({ postId, title, description });

        res.status(200).send(result);
    })
);

//게시글 삭제//
boardRoute.delete(
    "/posts/:postId",
    // authToken,
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const result = await boardService.deletePost({ postId });
        res.status(200).send(result);
    })
);

export default boardRoute;
