import Link from "next/link";
import { BookOpen, Bot, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-2xl">📚</span>
            <span>LearnSmart</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/login" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
              Log in
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Your AI-Powered
            <br />
            <span className="text-indigo-600 dark:text-indigo-400">Study Companion</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Learn smarter with adaptive courses, AI tutoring, coding practice, and spaced repetition.
            Track progress, earn streaks, and master any subject.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/register">
              <Button size="lg">Start Learning Free</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg">View Demo</Button>
            </Link>
          </div>
        </section>

        <section className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
          <div className="mx-auto max-w-6xl px-4 py-24">
            <h2 className="text-center text-2xl font-bold">Everything you need to learn</h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-zinc-600 dark:text-zinc-400">
              Courses, practice, AI help, and community — all in one place
            </p>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: BookOpen, title: "Adaptive Courses", desc: "Content that adjusts to your pace" },
                { icon: Bot, title: "AI Tutor", desc: "Explain like I'm 10, step-by-step help" },
                { icon: Zap, title: "Coding Practice", desc: "Problems with hints and solutions" },
                { icon: Users, title: "Community", desc: "Study groups and discussions" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                  <item.icon className="h-10 w-10 text-indigo-500" />
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12">
          <div className="mx-auto max-w-6xl px-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} LearnSmart. Built for learners.
          </div>
        </footer>
      </main>
    </div>
  );
}
