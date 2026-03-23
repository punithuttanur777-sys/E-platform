import { NextRequest, NextResponse } from "next/server";
import { getCoursesWithThumbnails } from "@/lib/courses-api-data";

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category") || undefined;
  const courses = getCoursesWithThumbnails(category);
  return NextResponse.json({ courses });
}
