import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";
import postCommentService from "../../services/postCommentService";

const commentRoute = Router();

commentRoute.get(
    "/comments/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        res.send(`${postId}게시글의 댓글 목록`);
    })
);

//댓글 등록//
commentRoute.post(
    "/comments/:postId",
    // authToken,
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { user_email, description } = req.body;
        const result = await postCommentService.addComment({ postId, user_email, description });
        res.status(200).send(result);
    })
);

//댓글 삭제//
commentRoute.delete(
    "/comments/:commentId",
    asyncHandler(async (req, res) => {
        const { commentId } = req.params;
        res.send(`${commentId}댓글 삭제!`);
    })
);

//댓글 수정//
commentRoute.put(
    "/comments/:commentId",
    asyncHandler(async (req, res) => {
        const { commentId } = req.params;

        res.send(`${commentId}댓글 수정!`);
    })
);

export default commentRoute;
