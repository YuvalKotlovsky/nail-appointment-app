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

// בדיקת תקשורת ראשונית
app.get("/", (req, res) => {
  res.send("שרת פועל תקין 🎉");
});

// חיבור למסד (כרגע ננסה – זה ייכשל אם אין עדיין URI)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("📦 מחובר ל-MongoDB"))
  .catch((err) => console.error("שגיאה בחיבור למסד:", err));

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`${PORT}`);
});
