"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Progress } from "@/components/ui/Progress";

const skillData = [
  { topic: "Arrays", mastery: 75 },
  { topic: "Recursion", mastery: 58 },
  { topic: "OOP", mastery: 72 },
  { topic: "Async", mastery: 85 },
];

const weeklyStudy = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 1.5 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 2 },
  { day: "Fri", hours: 1 },
  { day: "Sat", hours: 4 },
  { day: "Sun", hours: 2 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          Track your progress and skill growth
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Topic Mastery</CardTitle>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Your mastery level per topic
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {skillData.map((item) => (
                <li key={item.topic}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.topic}</span>
                    <span className="text-zinc-500">{item.mastery}%</span>
                  </div>
                  <Progress value={item.mastery} />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Study Time (This Week)</CardTitle>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Hours spent learning
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2 h-40">
              {weeklyStudy.map((d) => (
                <div key={d.day} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full rounded-t bg-indigo-500/80 min-h-[20px] transition-all"
                    style={{ height: `${(d.hours / 4) * 100}%` }}
                  />
                  <span className="text-xs text-zinc-500 mt-2">{d.day}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-500 mt-4 text-center">
              Total: {weeklyStudy.reduce((a, b) => a + b.hours, 0)} hours
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quiz Performance</CardTitle>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Average score trend
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-48 text-zinc-400">
            <p>Quiz performance chart (integrate with chart library)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
