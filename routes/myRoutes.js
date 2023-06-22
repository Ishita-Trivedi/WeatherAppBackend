import express from "express";
import { contact } from "../controllers/otherController.js";

const myRoutes = express.Router();

myRoutes.route("/contact").post(contact);

export default myRoutes;