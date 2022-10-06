import express from "express";
import cors from "cors";
import errorMiddleware from "./middlewares/errorMiddleware";
import userRoute from "./routes/api/userRoute";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoute);

app.use(errorMiddleware);

export default app;
