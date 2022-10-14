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
        if (newUser === null) {
            return res.status(409).send("이미 존재하는 유저입니다.");
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
        if (result === null) {
            return res.status(409).send("이메일/비밀번호 오류");
        }
        res.status(200).send(result);
    })
);

//로그아웃//---->헤더에서 토큰 정보 빼오기
userRoute.post(
    "/logout",
    asyncHandler(async (req, res) => {
        const { refreshtoken } = req.headers;
        console.log(refreshtoken);

        const value = await userService.logoutUser(refreshtoken);
        if (value === "500") {
            console.log("중복 로그인 중");
            res.status(500).send("중복 로그인 중"); //1번 : 구 로그인 / token 만료된 상태나 마찬가지
        } else {
            res.status(200).send("로그아웃"); //2번 : 최근 로그인
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
        res.status(200).send(result);
    })
);

// 엑세스 토큰 발급//
userRoute.post(
    "/refresh",
    asyncHandler(async (req, res) => {
        const { refreshtoken } = req.headers;

        const userData = await userService.getUser({ refreshtoken });
        res.status(200).send({ accessToken: req.nickname, ...userData });
    })
);

//---//
//유저 닉네임,소개글 가져오기// -->(유저 테이블 분리 후 라우터/서비스 분리 예정)
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
    // authToken,
    asyncHandler(async (req, res) => {
        // const { nickname } = req.nickname;
        const { nickname, updateData } = req.body;
        const result = await userService.updateUser({
            nickname,
            updateData,
        });

        res.status(200).send(result);
    })
);

//유저 비밀번호 인증//
userRoute.get(
    "/myInfo/auth",
    authToken,
    asyncHandler(async (req, res) => {
        const { nickname } = req.nickname;
        const { password } = req.body;
        const result = await userService.comparePassword({ nickname, password });
        res.status(200).send(result);
    })
);

//회원 탈퇴//
userRoute.put(
    "/myInfo/withdrawal",
    authToken,
    asyncHandler(async (req, res) => {
        const { nickname } = req.nickname;
        const result = await userService.withdrawal({ nickname });
        res.status(200).send(result);
    })
);

export default userRoute;
