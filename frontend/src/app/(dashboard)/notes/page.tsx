"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StickyNote, Plus } from "lucide-react";

const sampleNotes = [
  { id: "1", title: "Arrays - Key Concepts", course: "Data Structures", updated: "2 hours ago" },
  { id: "2", title: "Recursion Basics", course: "Data Structures", updated: "Yesterday" },
  { id: "3", title: "Async/Await", course: "JavaScript", updated: "2 days ago" },
];

export default function NotesPage() {
  const [notes] = useState(sampleNotes);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Notes</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">
            Your notes with auto-summary and flashcards
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Note
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <Card key={note.id} className="cursor-pointer hover:border-indigo-500/50 transition-colors">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20">
                  <StickyNote className="h-5 w-5 text-indigo-500" />
                </div>
                <div>
                  <h3 className="font-semibold">{note.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{note.course}</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">{note.updated}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
