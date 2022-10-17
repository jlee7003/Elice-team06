import express from "express";
import cors from "cors";
import errorMiddleware from "./middlewares/errorMiddleware";

import userRoute from "./routes/api/userRoute";
import challengeRoute from "./routes/api/challengeRoute";
import boardRoute from "./routes/api/boardRoute";
import commentPostRoute from "./routes/api/commentPostRoute";
import votePostRoute from "./routes/api/votePostRoute";
import reportPostRoute from "./routes/api/reportPostRoute";
import dataRoute from "./routes/api/dataRoute";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/board", boardRoute);
app.use("/comment", commentPostRoute);
app.use("/vote", votePostRoute);
app.use("/report", reportPostRoute);
app.use("/challenge", challengeRoute);
app.use("/data", dataRoute);

app.use(errorMiddleware);

export default app;
