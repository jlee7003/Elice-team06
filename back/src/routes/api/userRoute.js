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
    "/current",
    authToken,
    asyncHandler(async (req, res) => {
        res.send({ ok: true, accessToken: req.userID });
    })
);

//토큰 넣어야하나.?
userRoute.get(
    "/myInfo/:user_id",
    asyncHandler(async (req, res) => {
        const { user_id } = req.params;
        res.send(`${user_id}님의 이름/설명 회원 정보`);
    })
);

userRoute.put(
    "/myInfo/update/:user_id",
    asyncHandler(async (req, res) => {
        const { user_id } = req.params;
        res.send(`${user_id}님의 이름/설명 수정`);
    })
);

//여기서 비밀번호 확인하기
userRoute.get(
    "/myInfo/auth/:user_id",
    asyncHandler(async (req, res) => {
        const { user_id } = req.params;
        res.send(`${user_id}님의 비밀번호 인증 확인`);
    })
);

userRoute.delete(
    "/myInfo/withDrawal/:user_id",
    asyncHandler(async (req, res) => {
        const { user_id } = req.params;
        res.send(`${user_id}님 회원 탈퇴!`);
    })
);

export default userRoute;
