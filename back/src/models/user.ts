import mongoose, { Schema } from "mongoose";
import { UserInterface } from "src/lib/interface";
import { v4 as uuidv4 } from "uuid";

const userSchema: Schema<UserInterface> = new Schema(
    {
        userID: { type: String, default: uuidv4() },
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, requird: true },
        tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model<UserInterface>("User", userSchema);

export default User;
