import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";
import commentPostService from "../../services/commentPostService";

const commentPostRoute = Router();

//특정 게시글 댓글 목록//
commentPostRoute.get(
    "/board/:boardId",
    asyncHandler(async (req, res) => {
        const { boardId } = req.params;
        const result = await commentPostService.getComments({ boardId });
        res.status(200).send(result);
    })
);

//유저가 쓴 댓글 목록//
commentPostRoute.get(
    "/my",
    // authToken,
    asyncHandler(async (req, res) => {
        const { nickname } = req.body;
        const result = await commentPostService.getMyComments({ nickname });
        res.status(200).send(result);
    })
);

//댓글 등록//
commentPostRoute.post(
    "/board/:boardId",
    // authToken,
    asyncHandler(async (req, res) => {
        const { boardId } = req.params;
        const { nickname, description } = req.body;
        const result = await commentPostService.addComment({ boardId, nickname, description });
        res.status(200).send(result);
    })
);
//댓글 수정//
commentPostRoute.put(
    "/:commentId",
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
    "/:commentId",
    //authToken,
    asyncHandler(async (req, res) => {
        const { commentId } = req.params;
        const result = await commentPostService.removeComment({ commentId });
        res.status(200).send(result);
    })
);

export default commentPostRoute;
