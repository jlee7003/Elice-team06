import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";

const reportRoute = Router();

reportRoute.get(
    "/reports/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        res.send(`${postId}게시글의 신고수`);
    })
);

reportRoute.post(
    "/reports/:postId/:userEmail",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { userEmail } = req.params;
        res.send(`${postId}게시글에 ${userEmail}님이 신고했습니다.`);
    })
);

reportRoute.delete(
    "/reports/:reportId",
    asyncHandler(async (req, res) => {
        const { reportId } = req.params;
        res.send(`${reportId}신고 취소!`);
    })
);

export default reportRoute;
