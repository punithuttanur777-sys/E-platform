import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { CheckCircle2, Circle } from "lucide-react";
import type { DailyPlanItem } from "@/types";

const samplePlan: DailyPlanItem[] = [
  { id: "1", type: "lesson", title: "Complete Lesson 3: Arrays", description: "Data Structures course", courseId: "1", lessonId: "3", estimatedMinutes: 15, priority: 1 },
  { id: "2", type: "coding", title: "Practice: Two Sum", description: "Coding challenge", estimatedMinutes: 20, priority: 2 },
  { id: "3", type: "flashcards", title: "Review 5 flashcards", description: "Recursion topic", estimatedMinutes: 10, priority: 3 },
];

export function DailyPlan() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today&apos;s Plan</CardTitle>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Your personalized learning plan
        </p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {samplePlan.map((item, i) => (
            <li key={item.id} className="flex items-start gap-3">
              <div className="mt-0.5">
                {i === 0 ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                ) : (
                  <Circle className="h-5 w-5 text-zinc-300 dark:text-zinc-600" />
                )}
              </div>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {item.description} · ~{item.estimatedMinutes} min
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
