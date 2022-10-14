import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";

import reportPostService from "../../services/reportPostService";

const reportPostRoute = Router();

//신고 수//
reportPostRoute.get(
    "/reports/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const result = await reportPostService.getReports({ postId });
        res.status(200).send(result);
    })
);

//신고 , 신고 취소//
reportPostRoute.post(
    "/reports/:postId",
    // authToken,
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { user_email, description } = req.body;
        const result = await reportPostService.report({ postId, user_email, description });
        res.status(200).send(result);
    })
);

export default reportPostRoute;
