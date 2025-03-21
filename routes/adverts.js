import { Router } from "express";
import {
  createAdvert,
  deleteAdvert,
  getAdvert,
  getAdverts,
  updateAdvert,
} from "../controllers/adverts.js";
import { advertPicturesUpload } from "../middlewares/upload.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { isAuthorized } from "../middlewares/auth.js";

// Create vendor router
const advertRouter = Router();

// Define vendor routes
advertRouter.post(
  "/adverts",
  advertPicturesUpload.array("pictures", 4),
  isAuthenticated,
  isAuthorized(["superadmin", "admin", "vendor"]),
  createAdvert
);

advertRouter.get("/adverts/", getAdverts);

advertRouter.get("/adverts/:id", getAdvert);

advertRouter.delete(
  "/adverts/:id",
  isAuthenticated,
  isAuthorized(["superadmin", "admin", "vendor"]),
  deleteAdvert
);

advertRouter.patch(
  "/adverts/:id",
  isAuthenticated,
  isAuthorized(["superadmin", "admin", "vendor"]),
  updateAdvert
);

// Export router
export default advertRouter;
