"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Bot, StickyNote, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { VideoPlayer } from "@/components/course/VideoPlayer";
import { api } from "@/lib/api/client";

interface Lesson {
  id: string;
  title: string;
  duration: number;
}

export default function LessonPage() {
  const params = useParams();
  const { id: courseId, lessonId } = params;
  const [videoUrl, setVideoUrl] = useState("");
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    api.courses
      .getLesson(courseId as string, lessonId as string)
      .then((lesson) => setVideoUrl(lesson.videoUrl || ""))
      .catch(() => setVideoUrl(""));
  }, [courseId, lessonId]);

  useEffect(() => {
    api.courses
      .getLessons(courseId as string)
      .then((res) => setLessons((res.lessons as unknown as Lesson[]) || []))
      .catch(() => setLessons([]));
  }, [courseId]);

  return (
    <div className="space-y-6">
      <Link
        href={`/courses/${courseId}`}
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to course
      </Link>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <VideoPlayer url={videoUrl || ""} title={`Lesson ${lessonId}`} />

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <Bot className="h-4 w-4 mr-2" />
              Explain this concept
            </Button>
            <Button variant="outline" className="flex-1">
              <StickyNote className="h-4 w-4 mr-2" />
              Take note
            </Button>
            <Button variant="outline">
              <HelpCircle className="h-4 w-4 mr-2" />
              Quiz
            </Button>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
            <h3 className="font-semibold mb-4">Auto-generated notes</h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>• Arrays store elements in contiguous memory</li>
              <li>• Access time is O(1) by index</li>
              <li>• Insertion/deletion at end is O(1), in middle is O(n)</li>
            </ul>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
            <h3 className="font-semibold mb-4">Timestamps</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { time: "0:00", label: "Intro" },
                { time: "2:30", label: "Main concept" },
                { time: "8:00", label: "Summary" },
              ].map((ts) => (
                <button
                  key={ts.time}
                  className="rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 text-sm hover:bg-indigo-100 dark:hover:bg-indigo-500/20"
                >
                  {ts.time} - {ts.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="sticky top-6 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
            <h3 className="font-semibold mb-4">Lessons</h3>
            <ul className="space-y-2">
              {(lessons.length > 0 ? lessons : [{ id: "1", title: "Lesson 1", duration: 10 }, { id: "2", title: "Lesson 2", duration: 15 }, { id: "3", title: "Lesson 3", duration: 12 }, { id: "4", title: "Lesson 4", duration: 18 }]).map((l) => (
                <li key={l.id}>
                  <Link
                    href={`/courses/${courseId}/lessons/${l.id}`}
                    className={`block rounded-lg px-3 py-2 text-sm ${
                      String(l.id) === lessonId
                        ? "bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-medium"
                        : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
