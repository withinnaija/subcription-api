import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRoute = Router();

userRoute.get("/", getUsers);
userRoute.get("/:id", getUser);

export default userRoute;
