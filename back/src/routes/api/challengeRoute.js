import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";

const challengeRoute = Router();

challengeRoute.get(
    "/challenges",
    asyncHandler(async (req, res) => {
        res.send("챌린지 목록");
    })
);

challengeRoute.get(
    "/:userEmail/challenges",
    asyncHandler(async (req, res) => {
        const { userEmail } = req.params;
        res.send(`${userEmail}님이 참여하고 있는 챌린지 목록`);
    })
);

challengeRoute.get(
    "/challenges/:challengeId",
    asyncHandler(async (req, res) => {
        const { challengeId } = req.params;
        res.send(`${challengeId}상세 페이지`);
    })
);

challengeRoute.post(
    "/challenges",
    asyncHandler(async (req, res) => {
        res.send("챌린지 등록!");
    })
);

challengeRoute.put(
    "/challenges/:challengeId",
    asyncHandler(async (req, res) => {
        const { challengeId } = req.params;

        res.send(`${challengeId}수정!`);
    })
);

challengeRoute.delete(
    "/challenges/:challengeId",
    asyncHandler(async (req, res) => {
        const { challengeId } = req.params;
        res.send(`${challengeId}삭제!`);
    })
);

export default challengeRoute;
