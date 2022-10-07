import { Router } from "express";
import { User } from "../../models";
import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";

const userRoute = Router();

userRoute.post(
    "/register",
    asyncHandler(async (req, res) => {
        const userData = req.body;

        const result = await User.register(userData);

        res.send(result);
    })
);

userRoute.post(
    "/login",
    asyncHandler(async (req, res) => {
        const { email, password } = req.body;

        const result = await User.login(email, password);

        res.send(result);
    })
);

userRoute.post(
    "/changePassword",
    authToken,
    asyncHandler(async (req, res) => {
        const result = await User.changePassword(req.userID, req.body.password);

        res.send(result);
    })
);

userRoute.post(
    "/refresh",
    authToken,
    asyncHandler(async (req, res) => {
        res.send({ ok: true, accessToken: req.userID });
    })
);

userRoute.get(
    "/myInfo/:userEmail",
    asyncHandler(async (req, res) => {
        const { userEmail } = req.params;
        res.send(`${userEmail}님의 이름/설명 회원 정보`);
    })
);

userRoute.put(
    "/myInfo/:userEmail",
    asyncHandler(async (req, res) => {
        const { userEmail } = req.params;
        res.send(`${userEmail}님의 이름/설명 수정`);
    })
);

//여기서 비밀번호 확인하기
userRoute.get(
    "/myInfo/auth/:userEmail",
    asyncHandler(async (req, res) => {
        const { userEmail } = req.params;
        res.send(`${userEmail}님의 비밀번호 인증 확인`);
    })
);

userRoute.delete(
    "/myInfo/withDrawal/:userEmail",
    asyncHandler(async (req, res) => {
        const { userEmail } = req.params;
        res.send(`${userEmail}님 회원 탈퇴!`);
    })
);

export default userRoute;
