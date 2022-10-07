import express from "express";
import cors from "cors";
import errorMiddleware from "./middlewares/errorMiddleware";

import userRoute from "./routes/api/userRoute";
import challengeRoute from "./routes/api/challengeRoute";
import boardRoute from "./routes/api/boardRoute";
import commentRoute from "./routes/api/commentRoute";
import voteRoute from "./routes/api/voteRoute";
import reportRoute from "./routes/api/reportRoute";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoute);
app.use("/api", challengeRoute);
app.use("/api", boardRoute);
app.use("/api", commentRoute);
app.use("/api", voteRoute);
app.use("/api", reportRoute);

app.use(errorMiddleware);

export default app;
