import express from "express";
import { COURSES } from "../data/courses.js";
import { optionalAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/daily-plan", optionalAuth, (req, res) => {
  res.json({
    plan: [
      { id: "1", type: "lesson", title: "Complete Lesson 3: Arrays", description: "Data Structures", estimatedMinutes: 15, priority: 1 },
      { id: "2", type: "coding", title: "Practice: Two Sum", description: "Coding challenge", estimatedMinutes: 20, priority: 2 },
      { id: "3", type: "flashcards", title: "Review 5 flashcards", description: "Recursion topic", estimatedMinutes: 10, priority: 3 },
    ],
  });
});

router.get("/streak", optionalAuth, (req, res) => {
  res.json({ streak: 7, lastActiveDate: new Date().toISOString().slice(0, 10) });
});

router.get("/recommendations", optionalAuth, (req, res) => {
  const recs = COURSES.slice(0, 3).map((c) => ({ ...c, progress: c.id === "1" ? 45 : c.id === "2" ? 80 : 0 }));
  res.json({ courses: recs });
});

router.get("/weak-topics", optionalAuth, (req, res) => {
  res.json({
    topics: [
      { topicId: "1", topicName: "Arrays", masteryScore: 65 },
      { topicId: "2", topicName: "Recursion", masteryScore: 58 },
      { topicId: "3", topicName: "OOP", masteryScore: 72 },
    ],
  });
});

router.get("/recent-activity", optionalAuth, (req, res) => {
  res.json({
    activity: [
      { id: "1", type: "quiz", title: "Completed Quiz", description: "Arrays Basics - 85%", timestamp: "2 hours ago" },
      { id: "2", type: "badge", title: "Earned Badge", description: "7-Day Streak", timestamp: "Yesterday" },
      { id: "3", type: "coding", title: "Solved Problem", description: "Two Sum", timestamp: "2 days ago" },
    ],
  });
});

export default router;
