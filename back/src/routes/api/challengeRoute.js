import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";
import { challengeService } from "../../services/challengeService";

const challengeRoute = Router();

challengeRoute.get(
    "/challenges",
    asyncHandler(async (req, res) => {
        try {
            const challenges = await challengeService.getchls();
            res.status(200).send(challenges);
        } catch (error) {
            res.status(504).send(error);
        }
    })
);

challengeRoute.get(
    "/mychallenges",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const { user_email } = req.userId;
            const myChallenges = await challengeService.findchl({ user_email: user_email });
            res.status(200).send(myChallenges);
        } catch (error) {
            res.status(504).send(error);
        }
    })
);

challengeRoute.get(
    "/challenge/:id",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const challenge = await challengeService.findchl({ challengeId: req.params.id });
            res.status(200).send(challenge);
        } catch (error) {
            res.status(404).send("잘못된 접근입니다.");
        }
    })
);

challengeRoute.post(
    "/challenge",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const { user_email } = req.userId;
            const input = req.body;
            input.proposer = user_email;

            const newChallenge = await challengeService.addchl(input);
            res.status(201).send(newChallenge);
        } catch (error) {
            res.status(504).send(error);
        }
    })
);

challengeRoute.put(
    "/challenge/:id",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const challengeId = req.params.id;
            const input = req.body;
            const updateChallenge = await challengeService.updatechl(challengeId, input);

            res.status(201).send(updateChallenge);
        } catch (error) {
            res.status(404).send("잘못된 접근입니다.");
        }
    })
);

challengeRoute.delete(
    "/challenge/:id",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const challengeId = req.params.id;

            const deleteChallenge = await challengeService.deletechl(challengeId);
            res.status(200).send(deleteChallenge);
        } catch (error) {
            res.status(404).send("잘못된 접근입니다.");
        }
    })
);

export default challengeRoute;
