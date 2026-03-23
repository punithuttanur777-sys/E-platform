export type UserRole = "student" | "instructor" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  preferences?: {
    theme: "light" | "dark" | "system";
    notifications: boolean;
  };
}

export interface StudentProfile {
  userId: string;
  streak: number;
  totalXP: number;
  level: number;
  weakTopics: WeakTopic[];
  badges: Badge[];
}

export interface WeakTopic {
  topicId: string;
  topicName: string;
  masteryScore: number;
  lastPracticed?: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail?: string;
  instructorId: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: number;
  topics: string[];
  progress?: number;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  order: number;
  type: "video" | "text" | "coding" | "quiz";
  content: {
    videoUrl?: string;
    transcript?: string;
    timestamps?: { time: number; label: string }[];
    markdown?: string;
  };
  duration: number;
  completed?: boolean;
}

export interface DailyPlanItem {
  id: string;
  type: "lesson" | "quiz" | "coding" | "flashcards";
  title: string;
  description: string;
  courseId?: string;
  lessonId?: string;
  estimatedMinutes: number;
  priority: number;
}

export interface ActivityItem {
  id: string;
  type: "lesson" | "quiz" | "badge" | "coding";
  title: string;
  description: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

export interface CodingProblem {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  topics: string[];
  starterCode: string;
  hints: string[];
}
