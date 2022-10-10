import { sign, verify } from "../authentication/jwt-util";
import { Token } from "../models";

const authToken = async (req, res, next) => {
    try {
        let accessToken = req.headers.authorization?.split(" ")[1] ?? null;
        let refreshToken = req.headers.refresh;

        if (accessToken === null || refreshToken === null || typeof refreshToken !== "string") {
            throw new Error("no accessToken or refreshToken in header");
        }

        if (accessToken === "refreshed") {
            const result = await Token.checkToken(refreshToken);

            if (result) {
                req.userId = result.userId;
                next();
                return;
            }
        }

        let accessPayload = verify(accessToken);
        const refreshPayload = verify(refreshToken);

        // accessToken 하고 refreshToken 둘다 만료된 경우
        if (accessPayload === null && refreshPayload === null) {
            throw new Error("expires accessToken and refreshToken");
        }

        // accessToken 이 만료되고, refreshToken은 유효한 경우
        if (accessPayload === null && refreshPayload !== null) {
            const token = await Token.checkToken(refreshToken);

            if (token != null) {
                accessToken = sign({ userId: token.userId });
            }
        }

        // accessToken 가 유효하고, refreshToken이 무효한 경우
        if (accessPayload !== null && refreshPayload === null) {
            refreshToken = sign({}, "14d");

            Token.addToken(accessPayload.userId, refreshToken);
        }

        if (accessPayload !== null) {
            req.userId = accessPayload.userId;
        }
        next();
    } catch (err) {
        next(err);
    }
};

export default authToken;
