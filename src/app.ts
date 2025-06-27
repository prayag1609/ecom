import express from "express";
import cookieParser from "cookie-parser";
import passport from "passport";

import "./controller/config/passport";
import routes from "./routes/index";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.send("🔵 Server is running");
});

export default app;
