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
    "/report/:postId/:user_name",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { user_name } = req.params;
        res.send(`${postId}게시글에 ${user_name}님이 신고했습니다.`);
    })
);

reportRoute.delete(
    "/report/delete/:reportId",
    asyncHandler(async (req, res) => {
        const { reportId } = req.params;
        res.send(`${reportId}신고 취소!`);
    })
);

export default reportRoute;
