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
        if (newUser.message) {
            console.log(newUser.message);

            return res.status(409).send(newUser);
        }

        res.status(200).send(newUser);
    })
);

//로그인//
userRoute.post(
    "/login",
    asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        const result = await userService.loginUser({ email, password });
        if (result.message) {
            return res.status(409).send(result);
        }

        res.status(200).send(result);
    })
);

//로그아웃//
userRoute.put(
    "/logout",
    asyncHandler(async (req, res) => {
        const { refreshtoken } = req.headers;
        console.log(332);
        const result = await userService.logoutUser(refreshtoken);
        if (result.message) {
            res.status(401).send(result);
        } else {
            res.status(200).send("로그아웃");
        }
    })
);

//비밀번호 변경//
userRoute.put(
    "/changePassword",
    authToken,
    asyncHandler(async (req, res) => {
        const { nickname } = req.nickname;
        const { password, password_hint } = req.body;
        const result = await userService.changePassword({ nickname, password, password_hint });
        if (result.message) {
            res.status(409).send(result);
        }
        res.status(200).send(result);
    })
);

// 엑세스 토큰 발급//
userRoute.get(
    "/refresh",
    authToken,
    asyncHandler(async (req, res) => {
        const { refreshtoken } = req.headers;
        const userData = await userService.getUser({ refreshtoken });

        res.status(200).send({ accessToken: req.nickname, ...userData });
    })
);

//유저 닉네임,소개글 가져오기//
userRoute.get(
    "/myInfo",
    authToken,
    asyncHandler(async (req, res) => {
        const { nickname } = req.nickname;
        const userData = await userService.getInfo({ nickname });

        res.status(200).send(userData);
    })
);

//유저 닉네임,소개글 수정//
userRoute.put(
    "/myInfo",
    authToken,
    asyncHandler(async (req, res) => {
        const { nickname } = req.nickname;
        const { updateData } = req.body;
        const result = await userService.updateUser({
            nickname,
            updateData,
        });
        if (result.message) {
            res.status(409).send(result);
        }

        res.status(200).send(result);
    })
);

//유저 비밀번호 인증//
userRoute.get(
    "/auth",
    authToken,
    asyncHandler(async (req, res) => {
        const { nickname } = req.nickname;
        const { password } = req.body;
        const result = await userService.comparePassword({ nickname, password });
        if (result.message) {
            res.status(409).send(result);
        }
        res.status(200).send(result);
    })
);

//회원 탈퇴//
userRoute.put(
    "/withdrawal",
    authToken,
    asyncHandler(async (req, res) => {
        const { nickname } = req.nickname;
        const result = await userService.withdrawal({ nickname });
        res.status(200).send(result);
    })
);

export default userRoute;
