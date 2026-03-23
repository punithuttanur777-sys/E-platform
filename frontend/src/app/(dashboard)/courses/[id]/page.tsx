"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Play, CheckCircle2, Circle } from "lucide-react";
import { Progress } from "@/components/ui/Progress";
import { api } from "@/lib/api/client";

interface Lesson {
  id: string;
  title: string;
  duration: number;
  completed?: boolean;
}

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id as string;
  const [course, setCourse] = useState<Record<string, unknown> | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.courses.get(courseId), api.courses.getLessons(courseId)])
      .then(([c, l]) => {
        setCourse(c as Record<string, unknown>);
        setLessons((l.lessons as unknown as Lesson[]) || []);
      })
      .catch(() => setCourse(null))
      .finally(() => setLoading(false));
  }, [courseId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="rounded-lg border border-rose-500/50 bg-rose-50 dark:bg-rose-500/10 p-6">
        <p className="font-medium">Course not found</p>
        <Link href="/courses" className="text-sm text-indigo-600 mt-2 inline-block">Back to courses</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link
        href="/courses"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to courses
      </Link>

      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center">
          <button
            onClick={() => router.push(`/courses/${courseId}/lessons/1`)}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 dark:bg-zinc-800/90 shadow-lg hover:scale-105 transition-transform"
          >
            <Play className="h-8 w-8 text-indigo-600 ml-1" />
          </button>
        </div>
        <div className="p-6 bg-white dark:bg-zinc-900">
          <h1 className="text-2xl font-bold">{String(course.title ?? "Course")}</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">
            {String(course.description ?? "Start learning with video lessons and practice.")}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-sm text-zinc-500">
              {Number(course.progress ?? 0)}% complete
            </span>
            <Progress value={Number(course.progress ?? 0)} className="flex-1 max-w-xs" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Lessons</h2>
        <ul className="space-y-2">
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <Link
                href={`/courses/${courseId}/lessons/${lesson.id}`}
                className="flex items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {lesson.completed !== false ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  ) : (
                    <Circle className="h-5 w-5 text-zinc-400" />
                  )}
                  <span className="font-medium">{lesson.title}</span>
                </div>
                <span className="text-sm text-zinc-500">{lesson.duration} min</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
