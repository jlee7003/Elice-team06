import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";
import votePostService from "../../services/votePostService";

const voteRoute = Router();

//게시글 투표수//
voteRoute.get(
    "/votes/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const result = await votePostService.getVotes({ postId });
        res.status(200).send(result);
    })
);

//게시글 투표, 투표 취소//
voteRoute.post(
    "/votes/:postId",
    // authToken,
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { nickname } = req.body;
        const result = await votePostService.vote({ postId, nickname });
        res.status(200).send(result);
    })
);

export default voteRoute;
