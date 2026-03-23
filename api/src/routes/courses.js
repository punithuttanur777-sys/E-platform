import express from "express";
import courses from "../data/courses.js";
import { optionalAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", optionalAuth, (req, res) => {
  const { category } = req.query;

  let list = courses;

  if (category && category !== "All") {
    list = list.filter((c) => c.category === category);
  }

  const courseList = list.map((c) => c);

  res.json(courseList);
});

export default router;
