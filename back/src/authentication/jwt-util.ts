import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

interface UserData {
    id: string;
}

dotenv.config();

const secret: string = process.env.JWT_SECRET ?? "";

export const sign = (payload: {} | { userID: string }, expiresIn: string = "1h") => {
    return jwt.sign(payload, secret, {
        algorithm: "HS256",
        expiresIn,
    });
};

export const verify = (token: string) => {
    try {
        const decoded = jwt.verify(token, secret);
        return {
            ok: true,
            decoded,
        };
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return null;
        }

        throw new Error(err);
    }
};
