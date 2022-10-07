import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";

const boardRoute = Router();

boardRoute.get(
    "/posts",
    asyncHandler(async (req, res) => {
        res.send("게시글 목록");
    })
);

boardRoute.get(
    "/posts/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        res.send(`${postId}게시글 상세`);
    })
); //투표 했는지 아닌지 여부로 쪼금씩 달라져야함
boardRoute.get(
    "/:userEmail/posts",
    asyncHandler(async (req, res) => {
        const { userEmail } = req.params;
        res.send(`${userEmail}님이 투표한 게시글 목록`);
    })
);

boardRoute.post(
    "/posts",
    asyncHandler(async (req, res) => {
        res.send("게시글 등록!");
    })
);

boardRoute.put(
    "/posts/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;

        res.send(`${postId}게시글 수정!`);
    })
);

boardRoute.delete(
    "/posts/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        res.send(`${postId}게시글 삭제!`);
    })
);

export default boardRoute;
