import { Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

interface XPCardProps {
  xp: number;
  level: number;
}

export function XPCard({ xp, level }: XPCardProps) {
  const xpForNextLevel = level * 200;
  const progress = (xp % 200) / 200 * 100;

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/20">
            <Zap className="h-6 w-6 text-amber-500" />
          </div>
          <div className="flex-1">
            <p className="text-2xl font-bold">{xp.toLocaleString()} XP</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Level {level}</p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
              <div
                className="h-full rounded-full bg-amber-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
