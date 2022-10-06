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
    "/vote/:postId/:user_id",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { user_name } = req.params;
        res.send(`${postId}게시글에 ${user_name}님이 투표했습니다.`);
    })
);

voteRoute.delete(
    "/vote/delete/:voteId",
    asyncHandler(async (req, res) => {
        const { voteId } = req.params;
        res.send(`${voteId}투표 취소!`);
    })
);

export default voteRoute;
