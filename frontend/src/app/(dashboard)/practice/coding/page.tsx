"use client";

import { useState } from "react";
import Link from "next/link";
import { Code2, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SAMPLE_CODING_PROBLEMS, DIFFICULTY_COLORS } from "@/lib/constants";

export default function CodingPracticePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Coding Practice</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          Solve problems with AI hints and instant feedback
        </p>
      </div>

      <div className="grid gap-4">
        {SAMPLE_CODING_PROBLEMS.map((problem) => (
          <Link
            key={problem.id}
            href={`/practice/coding/${problem.slug}`}
            className="flex items-center justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:border-indigo-500/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/5 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                <Code2 className="h-6 w-6 text-indigo-500" />
              </div>
              <div>
                <h3 className="font-semibold">{problem.title}</h3>
                <Badge className={`mt-1 ${DIFFICULTY_COLORS[problem.difficulty]}`}>
                  {problem.difficulty}
                </Badge>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-zinc-400" />
          </Link>
        ))}
      </div>
    </div>
  );
}
