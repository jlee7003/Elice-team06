import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";
import votePostService from "../../services/votePostService";

const voteRoute = Router();

//게시글 투표수//
voteRoute.get(
    "/:boardId",
    asyncHandler(async (req, res) => {
        const { boardId } = req.params;
        const result = await votePostService.getVotes({ boardId });
        res.status(200).send(result);
    })
);

//게시글 투표, 투표 취소//
voteRoute.post(
    "/:boardId",
    authToken,
    asyncHandler(async (req, res) => {
        const { boardId } = req.params;
        const { nickname } = req.nickname;
        const result = await votePostService.vote({ boardId, nickname });
        res.status(200).send(result);
    })
);

export default voteRoute;
