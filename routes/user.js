import { Router } from "express";
import { getAuthenticatedUser, loginUser, registerUser } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

// Create user router
const userRouter = Router();

// Define routes
userRouter.post("/auth/register", registerUser);

userRouter.post("/auth/login", loginUser);

userRouter.get("/users/me", isAuthenticated, getAuthenticatedUser);

// Export router
export default userRouter;