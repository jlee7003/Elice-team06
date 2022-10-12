import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";
import commentPostService from "../../services/commentPostService";

const commentPostRoute = Router();

//특정 게시글 댓글 목록//
commentPostRoute.get(
    "/comments/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const result = await commentPostService.getComments({ postId });
        res.status(200).send(result);
    })
);

//유저가 쓴 댓글 목록//
commentPostRoute.get(
    "/comments",
    // authToken,
    asyncHandler(async (req, res) => {
        const { user_email } = req.body;
        const result = await commentPostService.getMyComments({ user_email });
        res.status(200).send(result);
    })
);

//댓글 등록//
commentPostRoute.post(
    "/comments/:postId",
    // authToken,
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { user_email, description } = req.body;
        const result = await commentPostService.addComment({ postId, user_email, description });
        res.status(200).send(result);
    })
);
//댓글 수정//
commentPostRoute.put(
    "/comments/:commentId",
    // authToken,
    asyncHandler(async (req, res) => {
        const { commentId } = req.params;
        const updateData = req.body;
        const result = await commentPostService.updateComment({ commentId, updateData });

        res.status(200).send(result);
    })
);
//댓글 삭제//
commentPostRoute.delete(
    "/comments/:commentId",
    //authToken,
    asyncHandler(async (req, res) => {
        const { commentId } = req.params;
        const result = await commentPostService.removeComment({ commentId });
        res.status(200).send(result);
    })
);

export default commentPostRoute;
