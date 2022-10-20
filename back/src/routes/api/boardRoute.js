import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";
import boardService from "../../services/boardService";

const boardRoute = Router();

//전체 게시글 목록//
boardRoute.get(
    "/all",
    asyncHandler(async (req, res) => {
        const { start, end, count } = req.query;
        const result = await boardService.getPosts({ start, end, count });
        res.status(200).send(result);
    })
);

//자신이 등록한 게시글 목록//
boardRoute.get(
    "/myPost",
    authToken,
    asyncHandler(async (req, res) => {
        const { nickname } = req.nickname;
        const result = await boardService.getMyPost({ nickname });
        res.status(200).send(result);
    })
);

//자신이 투표한 게시글 목록
boardRoute.get(
    "/likePost",
    authToken,
    asyncHandler(async (req, res) => {
        const { nickname } = req.nickname;
        const result = await boardService.getLikePost({ nickname });
        res.status(200).send(result);
    })
);

//자신이 투표한 게시글 목록//--pagination
boardRoute.get(
    "/likePost/pagination",
    authToken,
    asyncHandler(async (req, res) => {
        const { nickname } = req.nickname;
        const { start, end, count } = req.query;
        const result = await boardService.getLikePagination({ nickname, start, end, count });

        res.status(200).send(result);
    })
);

//특정 게시글 상세//
boardRoute.get(
    "/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const result = await boardService.getPost({ postId });
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
    "/",
    authToken,
    asyncHandler(async (req, res) => {
        const postData = req.body;
        const { nickname } = req.nickname;
        const result = await boardService.addPost({ nickname, postData });
        res.status(200).send(result);
    })
);

//게시글 수정//
boardRoute.put(
    "/:postId",
    authToken,
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { title, description } = req.body;
        const result = await boardService.updatePost({ postId, title, description });

        res.status(200).send(result);
    })
);

//게시글 삭제//
boardRoute.delete(
    "/:postId",
    authToken,
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const result = await boardService.deletePost({ postId });
        res.status(200).send(result);
    })
);

export default boardRoute;
