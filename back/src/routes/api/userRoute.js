import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";
import userService from "../../services/userService.js";
import { upload } from "../../middlewares/imageUpload";

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
        const { id, password } = req.body;
        const result = await userService.loginUser({ id, password });
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
        const result = await userService.logoutUser(refreshtoken);
        if (result.message) {
            res.status(401).send(result);
        } else {
            res.status(200).send("로그아웃");
        }
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

//총 이용자 수, 챌린지 가입자 수
userRoute.get(
    "/about",
    asyncHandler(async (req, res) => {
        const result = await userService.getAbout();
        res.status(200).send(result);
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
        console.log(nickname, updateData);
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

//이메일로 Id 찾기//
userRoute.post(
    "/find/id",
    asyncHandler(async (req, res) => {
        const { email } = req.body;
        const result = await userService.findId({ email });
        if (result.message) {
            res.status(409).send(result);
        }
        res.status(200).send(result);
    })
);
//Id,이메일 인증 => 비밀번호 찾기//
userRoute.post(
    "/auth/user",
    asyncHandler(async (req, res) => {
        const { id, email } = req.body;
        const result = await userService.authId({ id, email });
        if (result.message) {
            res.status(409).send(result);
        }
        res.status(200).send(result);
    })
);

//유저 비밀번호 인증//
userRoute.get(
    "/auth/password",
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

//비밀번호 변경//
userRoute.put(
    "/changePassword",
    authToken,
    asyncHandler(async (req, res) => {
        const { nickname } = req.nickname;
        const { password, new_password } = req.body;
        console.log(password, new_password, nickname);
        const result = await userService.changePassword({
            nickname,
            password,
            new_password,
        });
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
//유저 이미지 얻기//
userRoute.get(
    "/image",
    authToken,
    asyncHandler(async (req, res) => {
        const { nickname } = req.nickname;
        const profileImage = await userService.getImage({ nickname });

        res.status(200).send(profileImage);
    })
);
//유저 이미지 수정//
userRoute.put(
    "/image",
    authToken,
    upload.single("userImage"),
    asyncHandler(async (req, res) => {
        const { nickname } = req.nickname;
        const { path, filename } = req.file;
        const updatedImage = await userService.updateImage({ nickname, filename });

        res.status(200).send(updatedImage);
    })
);
//유저 이미지 삭제//
userRoute.delete(
    "/image",
    authToken,
    asyncHandler(async (req, res) => {
        const { nickname } = req.nickname;
        const deletedImage = await userService.deleteImage({ nickname });

        res.status(200).send(deletedImage);
    })
);

export default userRoute;
