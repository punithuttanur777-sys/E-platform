import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import coursesRoutes from "./routes/courses.js";
import dashboardRoutes from "./routes/dashboard.js";
import aiRoutes from "./routes/ai.js";

const app = express();
const PORT = process.env.PORT || 8000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "LearnSmart API",
    status: "running",
    docs: "This is the backend API. Use /api/health, /api/auth, /api/courses, etc.",
    health: "/api/health",
  });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api/auth", authRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/ai", aiRoutes);

app.listen(PORT, () => {
  console.log(`LearnSmart API running at http://localhost:${PORT}`);
  console.log(`CORS enabled for ${FRONTEND_URL}`);
});
