import { Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

interface StreakCardProps {
  streak: number;
  lastActiveDate?: string;
}

export function StreakCard({ streak, lastActiveDate }: StreakCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20">
            <Flame className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <p className="text-2xl font-bold">{streak}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Day streak</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
