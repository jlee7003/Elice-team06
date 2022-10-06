import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";

const boardRoute = Router();

boardRoute.get(
    "/postlist",
    asyncHandler(async (req, res) => {
        res.send("게시글 목록");
    })
);

boardRoute.get(
    "/post/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        res.send(`${postId}게시글 상세`);
    })
);

boardRoute.post(
    "/post/create",
    asyncHandler(async (req, res) => {
        res.send("게시글 등록!");
    })
);

boardRoute.put(
    "/post/update/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;

        res.send(`${postId}게시글 수정!`);
    })
);

boardRoute.delete(
    "/post/delete/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        res.send(`${postId}게시글 삭제!`);
    })
);

export default boardRoute;
