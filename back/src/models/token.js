import mongoose, { Schema } from "mongoose";

const tokenSchema = new Schema({
    userId: { type: String, required: true, unique: true },
    token: { type: String, required: true, unique: true },
});

tokenSchema.statics.addToken = function (userId, token) {
    try {
        this.create({ userId, token });
    } catch (err) {
        throw new Error(err);
    }
};

tokenSchema.statics.removeToken = function (token) {
    try {
        this.token.deleteOne({ token });
    } catch (err) {
        throw new Error(err);
    }
};

tokenSchema.statics.checkToken = function (token) {
    return this.findOne({ token });
};

const Token = mongoose.model("Token", tokenSchema);

export default Token;
