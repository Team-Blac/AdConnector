import { Router } from "express";
import {
  getAuthenticatedUser,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/user.js";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";

// Create user router
const userRouter = Router();

// Define routes
userRouter.post("/auth/register", registerUser);

userRouter.post("/auth/login", loginUser);

userRouter.patch(
  "/users/:id",
  isAuthenticated,
  isAuthorized(["admin", "superadmin"]),
  updateUser
);

userRouter.get("/users/me", isAuthenticated, getAuthenticatedUser);

// Export router
export default userRouter;
