import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";

const voteRoute = Router();

voteRoute.get(
    "/votes/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        res.send(`${postId}게시글의 투표수`);
    })
);

voteRoute.post(
    "/votes/:postId/:userEmail",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { userEmail } = req.params;
        res.send(`${postId}게시글에 ${userEmail}님이 투표했습니다.`);
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
