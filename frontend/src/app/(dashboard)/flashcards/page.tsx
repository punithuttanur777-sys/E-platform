"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RotateCw } from "lucide-react";

const sampleCards = [
  { id: "1", front: "What is the time complexity of array access by index?", back: "O(1) - constant time" },
  { id: "2", front: "What is recursion?", back: "A function that calls itself to solve a smaller subproblem" },
  { id: "3", front: "What is the base case in recursion?", back: "The condition that stops the recursion" },
];

export default function FlashcardsPage() {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = sampleCards[current];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Flashcards</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">
          Spaced repetition for better retention
        </p>
      </div>

      <div className="w-full max-w-md">
        <Card
          className="h-64 cursor-pointer transition-shadow hover:shadow-lg"
          onClick={() => setFlipped(!flipped)}
        >
          <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
            <p className="text-lg font-medium">
              {flipped ? card.back : card.front}
            </p>
            <p className="text-sm text-zinc-500 mt-2">Click to flip</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={() => {
            setCurrent((c) => Math.max(0, c - 1));
            setFlipped(false);
          }}
          disabled={current === 0}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => setFlipped(!flipped)}
        >
          <RotateCw className="h-4 w-4 mr-2" />
          Flip
        </Button>
        <Button
          onClick={() => {
            setCurrent((c) => Math.min(sampleCards.length - 1, c + 1));
            setFlipped(false);
          }}
          disabled={current === sampleCards.length - 1}
        >
          Next
        </Button>
      </div>

      <p className="text-sm text-zinc-500">
        Card {current + 1} of {sampleCards.length}
      </p>
    </div>
  );
}
