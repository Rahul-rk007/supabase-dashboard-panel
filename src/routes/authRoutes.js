import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

// Register user (admin or staff)
router.post("/register", register);

// Login user
router.post("/login", login);

export default router;
