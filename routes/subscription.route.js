import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.post("/", authorize, createSubscription);

export default subscriptionRouter;
