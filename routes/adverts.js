import { Router } from "express";
import { createAdvert, deleteAdvert, getAdvert, getAdverts, updateAdvert } from "../controllers/adverts.js";
import { advertPicturesUpload } from "../middlewares/upload.js";

// Create vendor router
const advertRouter = Router();

// Define vendor routes
advertRouter.post("/adverts", advertPicturesUpload.array("pictures", 4), createAdvert);

advertRouter.get("/adverts/", getAdverts);

advertRouter.get('/adverts/:id',getAdvert);

advertRouter.delete('/adverts/:id',deleteAdvert);

advertRouter.patch('/adverts/:id',updateAdvert);

// Export router
export default advertRouter;
