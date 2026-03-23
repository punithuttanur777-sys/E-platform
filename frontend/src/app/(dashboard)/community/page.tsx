"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Users, Trophy } from "lucide-react";

const tabs = [
  { id: "discussions", label: "Discussions", icon: MessageCircle },
  { id: "groups", label: "Study Groups", icon: Users },
  { id: "challenges", label: "Weekly Challenges", icon: Trophy },
];

const samplePosts = [
  { id: "1", title: "How does memoization work in recursion?", author: "Student1", upvotes: 12, answers: 5 },
  { id: "2", title: "Best approach for Two Sum?", author: "Student2", upvotes: 8, answers: 3 },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("discussions");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Community</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          Ask doubts, share solutions, join study groups
        </p>
      </div>

      <div className="flex gap-2 border-b border-zinc-200 dark:border-zinc-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
              activeTab === tab.id
                ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                : "border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "discussions" && (
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button>Ask Question</Button>
          </div>
          {samplePosts.map((post) => (
            <Card key={post.id} className="cursor-pointer hover:border-indigo-500/50">
              <CardContent className="p-6">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  by {post.author} · {post.upvotes} upvotes · {post.answers} answers
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "groups" && (
        <div className="text-center py-12 text-zinc-500">
          <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No study groups yet. Create one to collaborate with peers!</p>
          <Button className="mt-4">Create Study Group</Button>
        </div>
      )}

      {activeTab === "challenges" && (
        <Card>
          <CardContent className="p-8 text-center">
            <Trophy className="h-16 w-16 mx-auto text-amber-500 mb-4" />
            <h3 className="text-xl font-semibold">Weekly Coding Challenge</h3>
            <p className="text-zinc-500 dark:text-zinc-400 mt-2">
              Solve 5 problems this week to earn 100 XP and climb the leaderboard!
            </p>
            <Button className="mt-6">Join Challenge</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
