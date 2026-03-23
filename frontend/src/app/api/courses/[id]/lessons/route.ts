import { NextRequest, NextResponse } from "next/server";
import { getLessonsForCourse } from "@/lib/courses-api-data";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const lessons = getLessonsForCourse(id);
  return NextResponse.json({ lessons });
}
