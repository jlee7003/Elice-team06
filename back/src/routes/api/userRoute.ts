import { Router, Request, Response } from "express";
import UserService from "src/services/userService";
import asyncHandler from "src/lib/util/asyncHandler";
import authToken from "../../middlewares/authToken";

const userRoute: Router = Router();
const userServies = UserService.getInstance();

userRoute.post(
    "/register",
    asyncHandler(async (req: Request, res: Response) => {
        const userData = req.body;

        const result = await userServies.register(userData);

        res.send(result);
    })
);

userRoute.post(
    "/login",
    asyncHandler(async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const result = await userServies.login(email, password);

        res.send(result);
    })
);

userRoute.post(
    "/changePassword",
    authToken,
    asyncHandler(async (req: Request, res: Response) => {
        const result = await userServies.changePassword(req.currentUserID, req.body.password);

        res.send(result);
    })
);

export default userRoute;
