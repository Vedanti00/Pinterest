import express from "express";
import userRouter from "./routes/user.route.js";
import boardRouter from "./routes/board.route.js";
import pinRouter from "./routes/pin.route.js";
import commentRouter from "./routes/comment.route.js";
import connectDB from "./utils/connectDB.js";

const port = 3000;

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/pins", userRouter);
app.use("/boards", userRouter);
app.use("/comments", userRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${port}`);
});
