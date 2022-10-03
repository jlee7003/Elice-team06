import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { sign, verify } from "../authentication/jwt-util";
import TokenService from "../services/tokenService";

const authToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let accessToken = req.headers.authorization?.split(" ")[1] ?? null;
        let refreshToken = req.headers.refresh;

        // accessToken 하고 refreshToken 둘 중 하나라도 값이 없는 경우
        if (accessToken == null || refreshToken == null || typeof refreshToken == "object") {
            throw new Error("no accessToken or refreshToken in header");
        }

        const accessPayload: JwtPayload | null = verify(accessToken);
        const refreshPayload: JwtPayload | null = verify(refreshToken);

        // accessToken 하고 refreshToken 둘다 만료된 경우
        if (accessPayload == null && refreshPayload == null) {
            throw new Error("expires accessToken and refreshToken");
        }

        // accessToken 이 만료되고, refreshToken은 유효한 경우
        if (accessPayload == null && refreshPayload != null) {
            const tokenService = TokenService.getInstance();
            const token = await tokenService.checkToken(refreshToken);

            if (token != null) {
                accessToken = sign({ userID: token.userID });
            }
        }

        // accessToken 가 유효하고, refreshToken이 무효한 경우
        if (accessPayload != null && refreshPayload == null) {
            refreshToken = sign({}, "14d");

            const tokenService = TokenService.getInstance();
            tokenService.addToken(accessPayload.userID, refreshToken);
        }

        if (accessPayload != null) {
            req.currentUserID = accessPayload.userID;
        }
        next();
    } catch (err) {
        next(err);
    }
};

export default authToken;
