import { Router } from "express";
import { createAdvert, deleteAdvert, getAdvert, getAdverts, updateAdvert } from "../controllers/vendors.js";

// Create vendor router
const vendorRouter = Router();

// Define vendor routes
vendorRouter.post("/adverts", createAdvert);

vendorRouter.get("/adverts/", getAdverts);

vendorRouter.get('/adverts/:id',getAdvert);

vendorRouter.delete('/adverts/:id',deleteAdvert);

vendorRouter.patch('/adverts/:id',updateAdvert);

// Export router
export default vendorRouter;
