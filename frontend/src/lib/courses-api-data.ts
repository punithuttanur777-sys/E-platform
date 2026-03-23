import { COURSES } from "./coursesData";
import { LESSON_VIDEOS } from "./lessonVideos";

// Unsplash thumbnails by category
const THUMBNAILS: Record<string, string> = {
  Programming: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
  "Web Development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
  "Data Science": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
  "AI & ML": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
  DevOps: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400",
  Design: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
};

export function getCoursesWithThumbnails(category?: string) {
  let list = COURSES.map((c) => ({
    ...c,
    thumbnail: THUMBNAILS[c.category] || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
  }));
  if (category && category !== "All") {
    list = list.filter((c) => c.category === category);
  }
  return list;
}

export function getCourseById(id: string) {
  const c = COURSES.find((x) => x.id === id);
  if (!c) return null;
  return {
    ...c,
    thumbnail: THUMBNAILS[c.category] || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
  };
}

// Standard 4 lessons per course - demo structure
const DEFAULT_LESSONS = [
  { id: "1", title: "Introduction & Overview", duration: 10 },
  { id: "2", title: "Core Concepts", duration: 15 },
  { id: "3", title: "Hands-on Practice", duration: 12 },
  { id: "4", title: "Summary & Next Steps", duration: 18 },
];

export function getLessonsForCourse(_courseId: string) {
  return DEFAULT_LESSONS;
}

export function getLessonVideo(lessonId: string): string {
  return LESSON_VIDEOS[lessonId] || "https://www.youtube.com/watch?v=8Kp-8OGwphY";
}
