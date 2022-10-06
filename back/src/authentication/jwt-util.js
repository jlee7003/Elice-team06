import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.JWT_SECRET ?? "";

export const sign = (payload, expiresIn = "1h") => {
    return jwt.sign(payload, secret, {
        algorithm: "HS256",
        expiresIn,
    });
};

export const verify = (token) => {
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
