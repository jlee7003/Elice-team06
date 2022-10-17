import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";

import reportPostService from "../../services/reportPostService";

const reportPostRoute = Router();

//신고 수//
reportPostRoute.get(
    "/:boardId",
    asyncHandler(async (req, res) => {
        const { boardId } = req.params;
        const result = await reportPostService.getReports({ boardId });
        res.status(200).send(result);
    })
);

//신고 , 신고 취소//
reportPostRoute.post(
    "/:boardId",
    authToken,
    asyncHandler(async (req, res) => {
        const { boardId } = req.params;
        const { nickname } = req.nickname;
        const { description } = req.body;
        const result = await reportPostService.report({ boardId, nickname, description });
        res.status(200).send(result);
    })
);

export default reportPostRoute;
