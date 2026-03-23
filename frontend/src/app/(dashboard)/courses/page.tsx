"use client";

import { useState, useEffect } from "react";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { COURSE_CATEGORIES } from "@/lib/coursesData";
import { api } from "@/lib/api/client";
import { BookOpen } from "lucide-react";
import type { Course } from "@/types";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.courses
      .list(selectedCategory)
      .then((res) => setCourses(res.courses as unknown as Course[]))
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load courses"))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  const continueLearning = courses.filter((c) => (c.progress ?? 0) > 0);
  const filteredCourses = courses;

  if (loading && courses.length === 0) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
      </div>
    );
  }

  if (error && courses.length === 0) {
    return (
      <div className="rounded-lg border border-amber-500/50 bg-amber-50 dark:bg-amber-500/10 p-6">
        <p className="font-medium text-amber-800 dark:text-amber-200">Could not load courses</p>
        <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">{error}</p>
        <p className="text-sm text-zinc-500 mt-2">Make sure the backend is running: <code className="bg-zinc-200 dark:bg-zinc-800 px-1 rounded">cd api && npm run dev</code></p>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-2xl font-bold">Courses</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          Explore and continue your learning
        </p>
      </div>

      {/* Category filter tabs - horizontal scroll on mobile */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1">
        {COURSE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white"
                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Continue Learning - only if user has progress */}
      {continueLearning.length > 0 && selectedCategory === "All" && (
        <section>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-500" />
            Continue Learning
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {continueLearning.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      {/* All courses grid - scrollable */}
      <section>
        <h2 className="text-lg font-semibold mb-4">
          {selectedCategory === "All" ? "All Courses" : selectedCategory}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-6">
          Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""}
        </p>
      </section>
    </div>
  );
}
