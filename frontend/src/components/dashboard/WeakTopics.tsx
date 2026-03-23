import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";
import { AlertTriangle } from "lucide-react";
import type { WeakTopic } from "@/types";

const sampleWeakTopics: WeakTopic[] = [
  { topicId: "1", topicName: "Arrays", masteryScore: 65 },
  { topicId: "2", topicName: "Recursion", masteryScore: 58 },
  { topicId: "3", topicName: "OOP", masteryScore: 72 },
];

export function WeakTopics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          Weak Topics
        </CardTitle>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Focus on these to improve
        </p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {sampleWeakTopics.map((topic) => (
            <li key={topic.topicId}>
              <div className="flex justify-between text-sm mb-1">
                <span>{topic.topicName}</span>
                <span className="text-zinc-500">{topic.masteryScore}%</span>
              </div>
              <Progress value={topic.masteryScore} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
