import express from "express";
import userRouter from "./routes/user.route.js";
import boardRouter from "./routes/board.route.js";
import pinRouter from "./routes/pin.route.js";
import commentRouter from "./routes/comment.route.js";

const port = 3000;

const app = express();

app.use("/users", userRouter);
app.use("/pins", userRouter);
app.use("/boards", userRouter);
app.use("/comments", userRouter);

app.use("/test", (req, res) => {
  return res.json("Hello from backend API");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
