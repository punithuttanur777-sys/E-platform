"use client";

import { useState, useEffect } from "react";
import { StreakCard } from "@/components/dashboard/StreakCard";
import { XPCard } from "@/components/dashboard/XPCard";
import { DailyPlan } from "@/components/dashboard/DailyPlan";
import { WeakTopics } from "@/components/dashboard/WeakTopics";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { api } from "@/lib/api/client";
import type { Course } from "@/types";

export default function DashboardPage() {
  const [recommendations, setRecommendations] = useState<Course[]>([]);

  useEffect(() => {
    api.courses
      .list()
      .then((res) => {
        const withProgress = (res.courses as unknown as Course[]).filter((c) => (c.progress ?? 0) > 0);
        setRecommendations(withProgress.slice(0, 2));
      })
      .catch(() => setRecommendations([]));
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Welcome back! 👋</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          Here&apos;s your personalized learning plan for today
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StreakCard streak={7} />
        <XPCard xp={1240} level={5} />
        <div className="sm:col-span-2 lg:col-span-1 flex items-center justify-center rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-500">Level 5</p>
            <p className="text-sm text-zinc-500">Keep going!</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <DailyPlan />
          <div>
            <h2 className="text-lg font-semibold mb-4">Continue Learning</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {recommendations.length > 0
                ? recommendations.map((course) => <CourseCard key={course.id} course={course} />)
                : (
                  <>
                    <CourseCard course={{ id: "1", title: "Data Structures & Algorithms", slug: "dsa", description: "Master arrays, linked lists, trees, and graphs", instructorId: "1", category: "Programming", difficulty: "beginner", duration: 480, topics: ["Arrays", "Linked Lists", "Trees"], progress: 45 }} />
                    <CourseCard course={{ id: "2", title: "JavaScript Fundamentals", slug: "js-fundamentals", description: "From basics to advanced concepts", instructorId: "1", category: "Web Development", difficulty: "beginner", duration: 360, topics: ["Variables", "Functions", "Async"], progress: 80 }} />
                  </>
                )}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <WeakTopics />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
