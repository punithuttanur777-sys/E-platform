import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../middleware/auth.js";
import { loadUsers, saveUsers } from "../lib/userStore.js";

const router = express.Router();
const users = loadUsers(); // Persisted to data/users.json - survives API restarts

router.post("/register", (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }
  if (users.has(email)) {
    return res.status(400).json({ error: "Email already registered" });
  }
  const user = { id: String(users.size + 1), email, name: name || email.split("@")[0], role: "student" };
  users.set(email, { ...user, password });
  saveUsers(users);
  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ user: { id: user.id, email: user.email, name: user.name, role: user.role }, token });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }
  const stored = users.get(email);
  if (!stored || stored.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const user = { id: stored.id, email: stored.email, name: stored.name, role: stored.role };
  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ user, token });
});

router.get("/me", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(authHeader.slice(7), JWT_SECRET);
    const stored = [...users.values()].find((u) => u.email === decoded.email);
    if (!stored) return res.status(404).json({ error: "User not found" });
    res.json({ user: { id: stored.id, email: stored.email, name: stored.name, role: stored.role } });
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
});

export default router;
