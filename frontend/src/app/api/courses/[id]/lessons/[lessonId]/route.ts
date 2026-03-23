import { NextRequest, NextResponse } from "next/server";
import { getLessonsForCourse, getLessonVideo } from "@/lib/courses-api-data";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string; lessonId: string }> }
) {
  const { id, lessonId } = await params;
  const lessons = getLessonsForCourse(id);
  const lesson = lessons.find((l) => l.id === lessonId);
  if (!lesson) {
    return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
  }
  const videoUrl = getLessonVideo(lessonId);
  return NextResponse.json({ ...lesson, videoUrl });
}
