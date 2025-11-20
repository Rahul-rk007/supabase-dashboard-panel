import express from "express";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";
// import menuRoutes from "./routes/menuRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";

const app = express();
app.use(express.json());

// routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/restaurants", restaurantRoutes);
// app.use("/menu", menuRoutes);
// app.use("/orders", orderRoutes);

export default app;
