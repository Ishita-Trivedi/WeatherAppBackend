import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

export const app = express();

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

import { myRoutes } from "./routes/myRoutes.js";

app.use("/api/v1", myRoutes);
