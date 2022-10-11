import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import postVoteService from "../../services/postVoteService";

const voteRoute = Router();

voteRoute.get(
    "/votes/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        res.send(`${postId}게시글의 투표수`);
    })
);

voteRoute.post(
    "/votes/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { user_email } = req.body;
        const result = await postVoteService.addVote({ postId, user_email });
        res.send(result);
    })
);

voteRoute.delete(
    "/votes/:voteId",
    asyncHandler(async (req, res) => {
        const { voteId } = req.params;
        res.send(`${voteId}투표 취소!`);
    })
);

export default voteRoute;
