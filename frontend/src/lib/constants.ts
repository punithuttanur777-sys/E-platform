export const APP_NAME = "LearnSmart";
export const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export const DIFFICULTY_COLORS = {
  beginner: "bg-emerald-500/20 text-emerald-400",
  intermediate: "bg-amber-500/20 text-amber-400",
  advanced: "bg-rose-500/20 text-rose-400",
  easy: "bg-emerald-500/20 text-emerald-400",
  medium: "bg-amber-500/20 text-amber-400",
  hard: "bg-rose-500/20 text-rose-400",
} as const;

export const SAMPLE_CODING_PROBLEMS = [
  { id: "1", title: "Two Sum", slug: "two-sum", difficulty: "easy" as const },
  { id: "2", title: "Reverse Array", slug: "reverse-array", difficulty: "easy" as const },
  { id: "3", title: "Move Zeros", slug: "move-zeros", difficulty: "easy" as const },
  { id: "4", title: "Palindrome", slug: "palindrome", difficulty: "easy" as const },
  { id: "5", title: "Maximum Subarray", slug: "maximum-subarray", difficulty: "medium" as const },
];
