import { Card, CardContent } from "@/components/ui/Card";
import Link from "next/link";
import { FileQuestion, ChevronRight } from "lucide-react";

const quizzes = [
  { id: "1", title: "Arrays Basics", course: "Data Structures", questions: 10, completed: true, score: 85 },
  { id: "2", title: "Recursion", course: "Data Structures", questions: 8, completed: false },
  { id: "3", title: "JavaScript Fundamentals", course: "JavaScript", questions: 15, completed: false },
];

export default function QuizzesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Quizzes</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          Test your knowledge with adaptive quizzes
        </p>
      </div>

      <div className="grid gap-4">
        {quizzes.map((quiz) => (
          <Link key={quiz.id} href={`/practice/quizzes/${quiz.id}`}>
            <Card className="hover:border-indigo-500/50 transition-colors">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                    <FileQuestion className="h-6 w-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{quiz.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {quiz.course} · {quiz.questions} questions
                      {quiz.completed && ` · Score: ${quiz.score}%`}
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-zinc-400" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
