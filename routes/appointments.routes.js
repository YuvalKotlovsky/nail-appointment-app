import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

// POST /appointments
router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    console.error("🛑 Error saving appointment:", err);
    res
      .status(400)
      .json({ message: "Problem with nails appointment", error: err.message });
  }
});

export default router;
