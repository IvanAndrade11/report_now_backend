import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import routerUsers from "./routes/users.js";
import routerNews from "./routes/news.js";
// import routerUtils from "./routes/utils.js";
import "./bd.js";

const app = express();

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/api/users", routerUsers);
app.use("/api/news", routerNews);
// app.use("/api/utils", routerUtils);

app.listen(PORT);
console.log(`RUN SERVER IN PORT ${PORT}`);
