"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Play, Send, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DIFFICULTY_COLORS } from "@/lib/constants";

const problems: Record<string, { title: string; description: string; difficulty: string; starterCode: string }> = {
  "two-sum": {
    title: "Two Sum",
    difficulty: "easy",
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`,
    starterCode: `function twoSum(nums, target) {
  // Your code here
  return [];
}`,
  },
  "reverse-array": {
    title: "Reverse Array",
    difficulty: "easy",
    description: "Given an array, return the array in reverse order.",
    starterCode: `function reverseArray(arr) {
  // Your code here
  return [];
}`,
  },
  "move-zeros": {
    title: "Move Zeros",
    difficulty: "easy",
    description: "Move all zeros to the end of the array while maintaining the relative order of non-zero elements.",
    starterCode: `function moveZeros(nums) {
  // Your code here
  return nums;
}`,
  },
  "palindrome": {
    title: "Palindrome",
    difficulty: "easy",
    description: "Check if a string is a palindrome (reads the same forwards and backwards).",
    starterCode: `function isPalindrome(s) {
  // Your code here
  return false;
}`,
  },
  "maximum-subarray": {
    title: "Maximum Subarray",
    difficulty: "medium",
    description: "Find the contiguous subarray with the largest sum (Kadane's algorithm).",
    starterCode: `function maxSubArray(nums) {
  // Your code here
  return 0;
}`,
  },
};

export default function CodingProblemPage() {
  const params = useParams();
  const slug = params.slug as string;
  const problem = problems[slug] || problems["two-sum"];
  const [code, setCode] = useState(problem.starterCode);
  const [output, setOutput] = useState<string | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    setOutput(null);
    await new Promise((r) => setTimeout(r, 800));
    setOutput("Test cases: 2/3 passed\n\nRun your code against all test cases by clicking Submit.");
    setLoading(false);
  };

  const handleHint = async () => {
    setLoading(true);
    setHint(null);
    await new Promise((r) => setTimeout(r, 600));
    setHint("Try using a hash map to store seen values. For each number, check if (target - number) exists in the map.");
    setLoading(false);
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col">
      <Link
        href="/practice/coding"
        className="mb-4 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to problems
      </Link>

      <div className="flex flex-1 gap-6 min-h-0">
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-xl font-bold">{problem.title}</h1>
            <Badge className={DIFFICULTY_COLORS[problem.difficulty as keyof typeof DIFFICULTY_COLORS]}>
              {problem.difficulty}
            </Badge>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col">
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                <h3 className="font-medium text-sm">Problem</h3>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <pre className="text-sm whitespace-pre-wrap font-mono text-zinc-600 dark:text-zinc-400">
                  {problem.description}
                </pre>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col">
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex justify-between items-center">
                <h3 className="font-medium text-sm">Code</h3>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={handleHint} disabled={loading}>
                    <Lightbulb className="h-4 w-4 mr-1" />
                    Hint
                  </Button>
                  <Button size="sm" onClick={handleRun} disabled={loading}>
                    <Play className="h-4 w-4 mr-1" />
                    Run
                  </Button>
                  <Button size="sm">Submit</Button>
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full p-4 font-mono text-sm bg-zinc-50 dark:bg-zinc-900 resize-none focus:outline-none"
                  spellCheck={false}
                />
              </div>
            </div>
          </div>

          {(output || hint) && (
            <div className="mt-4 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
              {hint && (
                <div className="mb-2">
                  <p className="text-sm font-medium text-amber-600 dark:text-amber-400">💡 Hint</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{hint}</p>
                </div>
              )}
              {output && (
                <div>
                  <p className="text-sm font-medium">Output</p>
                  <pre className="text-sm whitespace-pre-wrap text-zinc-600 dark:text-zinc-400 mt-1 font-mono">
                    {output}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
