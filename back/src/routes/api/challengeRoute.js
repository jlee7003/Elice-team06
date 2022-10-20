import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";
import { challengeService } from "../../services/challengeService";

const challengeRoute = Router();

// Challenge API
challengeRoute.get(
    "/all",
    asyncHandler(async (req, res) => {
        try {
            const pagination = req.query;
            const challenges = await challengeService.getChallenges(pagination);
            res.status(200).send(challenges);
        } catch (error) {
            res.status(504).send(error);
        }
    })
);

challengeRoute.get(
    "/my",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const { nickname } = req.nickname;
            const myChallenges = await challengeService.findChallenge({ nickname });
            res.status(200).send(myChallenges);
        } catch (error) {
            res.status(504).send(error);
        }
    })
);

challengeRoute.get(
    "/:id",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const challenge = await challengeService.findChallenge({ challengeId: req.params.id });
            res.status(200).send(challenge);
        } catch (error) {
            res.status(404).send("잘못된 접근입니다.");
        }
    })
);

challengeRoute.post(
    "/",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const { nickname } = req.nickname;
            const input = req.body;
            input.proposer = nickname;
            const newChallenge = await challengeService.addChallenge(input);
            res.status(201).send(newChallenge);
        } catch (error) {
            res.status(504).send(error);
            console.log(error);
        }
    })
);

challengeRoute.put(
    "/:id",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const input = req.body;
            const updateChallenge = await challengeService.updateChallenge(req.params.id, input);
            res.status(201).send(updateChallenge);
        } catch (error) {
            res.status(404).send("잘못된 접근입니다.");
        }
    })
);

challengeRoute.delete(
    "/:id",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const deleteChallenge = await challengeService.deleteChallenge(req.params.id);
            res.status(200).send(deleteChallenge);
        } catch (error) {
            res.status(404).send("잘못된 접근입니다.");
        }
    })
);

// Challenge Join API
challengeRoute.post(
    "/:id/join",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const { nickname } = req.nickname;
            const joinChallenge = await challengeService.joinChallenge({
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
    "/my/comments",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const { nickname } = req.nickname;
            const mycomments = await challengeService.findComments({ nickname });
            res.status(200).send(mycomments);
        } catch (error) {
            res.status(504).send(error);
        }
    })
);

challengeRoute.get(
    "/:id/comment",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const pagination = req.query;
            const comments = await challengeService.findComments({
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
    "/:id/comment",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const { nickname } = req.nickname;
            const input = req.body;
            input.author = nickname;
            input.challenge_id = Number(req.params.id);

            const newComment = await challengeService.postComment(input);
            res.status(201).send(newComment);
        } catch (error) {
            res.status(404).send("잘못된 접근입니다.");
        }
    })
);

challengeRoute.put(
    "/:id/comment",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const input = req.body;
            const updateComment = await challengeService.updateComment(req.query.id, input);
            res.status(201).send(updateComment);
        } catch (error) {
            res.status(404).send("잘못된 접근입니다.");
        }
    })
);

challengeRoute.delete(
    "/:id/comment",
    authToken,
    asyncHandler(async (req, res) => {
        try {
            const deleteComment = await challengeService.deleteComment(req.query.id);
            res.status(201).send(deleteComment);
        } catch (error) {
            res.status(404).send("잘못된 접근입니다.");
        }
    })
);

export default challengeRoute;
