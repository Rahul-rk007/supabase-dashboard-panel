import express from "express";
import { getUsers } from "../controllers/userController.js";
import { authMiddleware, staffOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// only admin can view all users
router.get("/", authMiddleware, staffOnly, getUsers);

export default router;
