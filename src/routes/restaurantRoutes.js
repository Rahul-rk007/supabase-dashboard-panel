import express from "express";
import { createRestaurant } from "../controllers/restaurantController.js";
import { auth } from "../middleware/auth.js";
import { role } from "../middleware/role.js";

const router = express.Router();

router.post("/", auth, role(["admin"]), createRestaurant);

export default router;
