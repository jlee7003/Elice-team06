import mongoose, { Schema } from "mongoose";
import { Token } from "../lib/interface";

const tokenSchema = new Schema<Token>({
    userID: { type: String, required: true, unique: true },
    token: { type: String, required: true, unique: true },
});

const Token = mongoose.model<Token>("Token", tokenSchema);

export default Token;
