import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { BookOpen, Trophy, Code2 } from "lucide-react";
import type { ActivityItem } from "@/types";

const sampleActivity: ActivityItem[] = [
  { id: "1", type: "quiz", title: "Completed Quiz", description: "Arrays Basics - 85%", timestamp: "2 hours ago" },
  { id: "2", type: "badge", title: "Earned Badge", description: "7-Day Streak", timestamp: "Yesterday" },
  { id: "3", type: "coding", title: "Solved Problem", description: "Two Sum", timestamp: "2 days ago" },
];

const iconMap = {
  lesson: BookOpen,
  quiz: BookOpen,
  badge: Trophy,
  coding: Code2,
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Your learning journey
        </p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {sampleActivity.map((item) => {
            const Icon = iconMap[item.type];
            return (
              <li key={item.id} className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                  <Icon className="h-4 w-4 text-indigo-500" />
                </div>
                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.description}</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">{item.timestamp}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
