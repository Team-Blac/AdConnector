import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.js";

// Create user router
const userRouter = Router();

// Define routes
userRouter.post("/auth/register", registerUser);

userRouter.post("/auth/login", loginUser);

// Export router
export default userRouter;
