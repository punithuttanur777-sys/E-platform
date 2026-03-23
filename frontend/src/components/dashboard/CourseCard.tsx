import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import { Badge } from "@/components/ui/Badge";
import { Play } from "lucide-react";
import type { Course } from "@/types";
import { DIFFICULTY_COLORS } from "@/lib/constants";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md hover:border-indigo-500/50">
        <div className="aspect-video bg-zinc-900 relative overflow-hidden">
          {course.thumbnail ? (
            <img
              src={course.thumbnail}
              alt={course.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-white/90 dark:bg-white/80 p-3 shadow-lg backdrop-blur-sm">
              <Play className="h-6 w-6 text-indigo-600 fill-indigo-600" />
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge className={DIFFICULTY_COLORS[course.difficulty]}>
              {course.difficulty}
            </Badge>
            <span className="text-xs text-zinc-500">{course.duration} min</span>
          </div>
          <h3 className="font-semibold line-clamp-2">{course.title}</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
            {course.description}
          </p>
          {course.progress !== undefined && (
            <div className="mt-3">
              <Progress value={course.progress} showLabel />
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
