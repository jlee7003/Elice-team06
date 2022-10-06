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

export default userRoute;
