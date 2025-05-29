import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors());
app.use(express.json());
import appointmentRoutes from "./routes/appointments.routes.js";
app.use("/appointments", appointmentRoutes);

//First communication test
app.get("/", (req, res) => {
  res.send("The server work");
});
// Connecting to the database (we'll try this now - it will fail if there is no URI yet)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connect to MongoDB"))
  .catch((err) => console.error("Error connecting to the database:", err));

// Starting the server
app.listen(PORT, () => {
  console.log(`${PORT}`);
});
