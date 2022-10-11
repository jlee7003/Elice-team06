// // import mongoose, { Schema } from "mongoose";
// // import { v4 as uuidv4 } from "uuid";
// // import bcrypt from "bcrypt";
// // import Token from "./token";
// // import { sign } from "../authentication/jwt-util";

// // const userSchema = new Schema(
// //     {
// //         userID: { type: String, default: uuidv4() },
// //         name: { type: String, required: true },
// //         email: { type: String, required: true },
// //         password: { type: String, requird: true },
// //         tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
// //     },
// //     {
// //         timestamps: true,
// //     }
// // );

// // const isInvalidEmail = (email) => {
// //     const reg = /^[\w-\.]+@([\w-]+\.)+com$/;

// //     if (!reg.test(email)) {
// //         return true;
// //     }

// //     return false;
// // };

// // userSchema.statics.findUser = function (userData) {
// //     return this.findOne(userData).exec();
// // };

// // userSchema.statics.comparePassword = async function (userID, hashedPassword) {
// //     const userData = await this.findUser({ userID });

// //     if (userData == null) {
// //         return null;
// //     }

// //     return bcrypt.compare(userData.password, hashedPassword);
// // };

// // userSchema.statics.register = async function (userData) {
// //     try {
// //         if (isInvalidEmail(userData.email)) {
// //             return { ok: false };
// //         }

// //         const result = await this.findUser({ email: userData.email });
// //         if (result) {
// //             return { ok: false };
// //         }

// //         const password = userData.password;
// //         const hash = await bcrypt.hash(password, 10);

// //         userData.password = hash;

// //         this.create(userData);

// //         return { ok: true };
// //     } catch (err) {
// //         throw new Error(err);
// //     }
// // };

// // userSchema.statics.login = async function (email, password) {
// //     if (isInvalidEmail(email)) {
// //         return { ok: false };
// //     }
// //     try {
// //         const userData = await this.findUser({ email });
// //         if (userData == null) {
// //             return { ok: false };
// //         }

// //         const result = await bcrypt.compare(password, userData.password);

// //         if (result == null) {
// //             return { ok: false };
// //         }

// //         const accessToken = sign({ userID: userData.usereID });
// //         let refreshToken = sign({}, "14d");

// //         Token.findOneAndDelete({ userID: userData.userID }).exec(() => {
// //             Token.create({ userID: userData.userID, token: refreshToken });
// //         });

// //         return { ok: true, accessToken, refreshToken };
// //     } catch (err) {
// //         throw new Error(err);
// //     }
// // };

// // userSchema.statics.changePassword = async function (userID, password) {
// //     try {
// //         const userData = findUser({ userID });

// //         if (userData == null) {
// //             return { ok: false };
// //         }

// //         const hash = await bcrypt.hash(password, 10);

// //         await this.findOneAndUpdate({ userID }, { password: hash });

// //         return { ok: true };
// //     } catch (err) {
// //         throw new Error(err);
// //     }
// };

// // const User = mongoose.model("User", userSchema);

// // export default User;
