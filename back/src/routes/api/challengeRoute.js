import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";

const challengeRoute = Router();

challengeRoute.get(
    "/challenges",
    asyncHandler(async (req, res) => {
        res.send("챌린지 목록");
    })
); //여기서 참여중인지 아닌지 여부로 참가 > 참여중 이런식으로 달라야함.

challengeRoute.get(
    "/:user_id/challenges",
    asyncHandler(async (req, res) => {
        res.send(`${user_id}님이 참여하고 있는 챌린지 목록`);
    })
);

challengeRoute.get(
    "/challenge/:challengeId",
    asyncHandler(async (req, res) => {
        const { challengeId } = req.params;
        res.send(`${challengeId}상세 페이지`);
    })
);

challengeRoute.post(
    "/challenge/create",
    asyncHandler(async (req, res) => {
        res.send("챌린지 등록!");
    })
);

challengeRoute.put(
    "/challenge/update/:challengeId",
    asyncHandler(async (req, res) => {
        const { challengeId } = req.params;

        res.send(`${challengeId}수정!`);
    })
);

challengeRoute.delete(
    "/challenge/delete/:challengeId",
    asyncHandler(async (req, res) => {
        res.send(`${challengeId}삭제!`);
    })
);

export default challengeRoute;
