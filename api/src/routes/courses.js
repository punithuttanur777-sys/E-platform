import express from "express";
import { COURSES, LESSON_VIDEOS, getLessonsForCourse } from "../data/courses.js";
import { optionalAuth } from "../middleware/auth.js";

const router = express.Router();

// User progress (in-memory, keyed by userId)
const userProgress = new Map();
function getProgress(userId, courseId) {
  return userProgress.get(`${userId}-${courseId}`) ?? 0;
}

router.get("/", optionalAuth, (req, res) => {
  const { category } = req.query;
  let list = COURSES;
  if (category && category !== "All") {
    list = list.filter((c) => c.category === category);
  }
  const demoProgress = (id) => (id === "1" ? 45 : id === "2" ? 80 : 0);
  const courses = list.map((c) => ({
    ...c,
    progress: req.user ? getProgress(req.user.userId, c.id) : demoProgress(c.id),
  }));
  res.json({ courses });
});

router.get("/:id", optionalAuth, (req, res) => {
  const course = COURSES.find((c) => c.id === req.params.id);
  if (!course) return res.status(404).json({ error: "Course not found" });
  const progress = req.user ? getProgress(req.user.userId, course.id) : (course.id === "1" ? 45 : course.id === "2" ? 80 : 0);
  res.json({ ...course, progress });
});

router.get("/:id/lessons", (req, res) => {
  const lessons = getLessonsForCourse(req.params.id);
  res.json({ lessons });
});

router.get("/:id/lessons/:lessonId", (req, res) => {
  const lessons = getLessonsForCourse(req.params.id);
  const lesson = lessons.find((l) => l.id === req.params.lessonId);
  if (!lesson) return res.status(404).json({ error: "Lesson not found" });
  const videoUrl = LESSON_VIDEOS[req.params.lessonId] || "";
  res.json({ ...lesson, videoUrl });
});

export default router;
