import { Router } from "express";
import { reviewController } from "../controllers/review.js";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";

const reviewRouter = Router();

reviewRouter.post('/adverts/:advertId/review',isAuthenticated,reviewController);

export default reviewRouter;