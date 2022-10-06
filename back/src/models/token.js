import mongoose, { Schema } from "mongoose";

const tokenSchema = new Schema({
    userID: { type: String, required: true, unique: true },
    token: { type: String, required: true, unique: true },
});

tokenSchema.statics.addToken = function (userID, token) {
    try {
        this.create({ userID, token });
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
