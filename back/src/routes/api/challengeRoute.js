import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";
import { challengeService } from "../../services/challengeService";

const challengeRoute = Router();

// Challenge API
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
            const { nickname } = req.userId;
            const myChallenges = await challengeService.findchl({ nickname });
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
            const { nickname } = req.userId;
            const input = req.body;
            input.proposer = nickname;

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
            const input = req.body;
            const updateChallenge = await challengeService.updatechl(req.params.id, input);
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
            const deleteChallenge = await challengeService.deletechl(req.params.id);
            res.status(200).send(deleteChallenge);
        } catch (error) {
            res.status(404).send("잘못된 접근입니다.");
        }
    })
);

// Challenge Join API
challengeRoute.post(
    "/challenge/:id/join",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const { nickname } = req.userId;
            const joinChallenge = await challengeService.joinchl({
                nickname,
                challengeId: req.params.id,
            });
            res.status(201).send(joinChallenge);
        } catch (error) {
            res.status(404).send("잘못된 접근입니다.");
        }
    })
);

// Challenge Comment API
challengeRoute.get(
    "/mycomments",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const { nickname } = req.userId;
            const mycomments = await challengeService.findcomments({ nickname });
            res.status(200).send(mycomments);
        } catch (error) {
            res.status(504).send(error);
        }
    })
);

challengeRoute.get(
    "/challenge/:id/comment",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const pagination = req.query;
            const comments = await challengeService.findcomments({
                challengeId: req.params.id,
                pagination,
            });
            res.status(200).send(comments);
        } catch (error) {
            res.status(504).send(error);
        }
    })
);

challengeRoute.post(
    "/challenge/:id/comment",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const { nickname } = req.userId;
            const input = req.body;
            input.author = nickname;
            input.challenge_id = Number(req.params.id);

            const newComment = await challengeService.postcomment(input);
            res.status(201).send(newComment);
        } catch (error) {
            res.status(404).send("잘못된 접근입니다.");
        }
    })
);

challengeRoute.put(
    "/challenge/:id/comment",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const input = req.body;
            const updateComment = await challengeService.updatecomment(req.query.id, input);
            res.status(201).send(updateComment);
        } catch (error) {
            res.status(404).send("잘못된 접근입니다.");
        }
    })
);

challengeRoute.delete(
    "/challenge/:id/comment",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const deleteComment = await challengeService.deletecomment(req.query.id);
            res.status(201).send(deleteComment);
        } catch (error) {
            res.status(404).send("잘못된 접근입니다.");
        }
    })
);

export default challengeRoute;
