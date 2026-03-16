import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Placeholder routes - extend with actual implementations
app.get("/api/dashboard/daily-plan", (req, res) => {
  res.json({
    plan: [
      { id: "1", type: "lesson", title: "Complete Lesson 3", estimatedMinutes: 15 },
      { id: "2", type: "coding", title: "Practice: Two Sum", estimatedMinutes: 20 },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
