import { Router } from "express";

import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";
import userService from "../../services/userService.js";

const userRoute = Router();

//회원 등록//
userRoute.post(
    "/signup",
    asyncHandler(async (req, res) => {
        const userData = req.body;
        const newUser = await userService.addUser({ userData });

        res.json(newUser);
    })
);

//로그인//
userRoute.post(
    "/login",
    asyncHandler(async (req, res) => {
        const { user_email, password } = req.body;

        const result = await userService.loginUser({ user_email, password });
        console.log(result);
        res.send(result);
    })
);

//로그아웃//
userRoute.post(
    "/logout",
    authToken,
    asyncHandler(async (req, res) => {
        const { user_email } = req.userId;
        res.send(`${user_email}로그아웃`);
    })
);

//비밀번호 변경//
userRoute.put(
    "/changePassword",
    authToken,
    asyncHandler(async (req, res) => {
        const { user_email } = req.userId;
        const { password, password_hint } = req.body;
        const result = await userService.changePassword({ user_email, password, password_hint });
        res.send(result);
    })
);

//엑세스 토큰 발급//
userRoute.post(
    "/refresh",
    authToken,
    asyncHandler(async (req, res) => {
        res.send({ ok: true, accessToken: req.userId });
    })
);

//유저 닉네임,소개글 가져오기//
userRoute.get(
    "/myInfo",
    authToken,
    asyncHandler(async (req, res) => {
        const { user_email } = req.userId;
        const userData = await userService.getUser({ user_email });

        res.json(userData);
    })
);

//유저 닉네임,소개글 수정//
userRoute.put(
    "/myInfo",
    authToken,
    asyncHandler(async (req, res) => {
        const { user_email } = req.userId;
        const { nickname, introduce, age, region, gender } = req.body;
        await userService.updateUser({ nickname, introduce, age, region, gender });

        res.send(`${user_email}님의 이름/설명 수정`);
    })
);

//유저 비밀번호 인증//
userRoute.get(
    "/myInfo/auth",
    authToken,
    asyncHandler(async (req, res) => {
        const { user_email } = req.userId;
        const { password } = req.body;
        const result = await userService.comparePassword({ user_email, password });
        res.send(result);
    })
);

//회원 탈퇴//
userRoute.put(
    "/myInfo/withdrawal",
    authToken,
    asyncHandler(async (req, res) => {
        const { user_email } = req.userId;
        await userService.withdrawal({ user_email });
        res.send(`${user_email}님 회원 탈퇴!`);
    })
);

export default userRoute;
