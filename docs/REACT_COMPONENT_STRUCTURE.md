# React Component Structure

## Folder Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Auth routes group
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/        # Protected dashboard
│   │   ├── layout.tsx
│   │   ├── page.tsx        # Student dashboard
│   │   ├── courses/
│   │   ├── courses/[id]/
│   │   ├── lessons/[id]/
│   │   ├── practice/
│   │   │   ├── coding/
│   │   │   └── quizzes/
│   │   ├── notes/
│   │   ├── flashcards/
│   │   ├── ai-tutor/
│   │   ├── community/
│   │   └── analytics/
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing
├── components/
│   ├── ui/                 # Base UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Progress.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   ├── AppShell.tsx
│   │   └── ThemeToggle.tsx
│   ├── dashboard/
│   │   ├── DailyPlan.tsx
│   │   ├── WeakTopics.tsx
│   │   ├── StreakCard.tsx
│   │   ├── ProgressChart.tsx
│   │   ├── RecentActivity.tsx
│   │   └── CourseCard.tsx
│   ├── course/
│   │   ├── VideoPlayer.tsx
│   │   ├── LessonSidebar.tsx
│   │   ├── AutoNotes.tsx
│   │   ├── TimestampList.tsx
│   │   └── InLessonQuiz.tsx
│   ├── ai/
│   │   ├── ChatInterface.tsx
│   │   ├── MessageBubble.tsx
│   │   └── ExplainButton.tsx
│   ├── notes/
│   │   ├── NoteEditor.tsx
│   │   ├── HighlightToolbar.tsx
│   │   └── NoteCard.tsx
│   ├── flashcards/
│   │   ├── FlashcardReview.tsx
│   │   ├── FlashcardCard.tsx
│   │   └── SpacedRepetitionControls.tsx
│   ├── coding/
│   │   ├── CodeEditor.tsx
│   │   ├── ProblemDescription.tsx
│   │   ├── TestResults.tsx
│   │   └── HintModal.tsx
│   ├── gamification/
│   │   ├── XPBadge.tsx
│   │   ├── StreakDisplay.tsx
│   │   ├── AchievementCard.tsx
│   │   └── Leaderboard.tsx
│   └── community/
│       ├── PostCard.tsx
│       ├── CommentThread.tsx
│       └── StudyGroupCard.tsx
├── lib/
│   ├── api/                # API client
│   ├── auth/               # Auth utilities
│   ├── utils.ts
│   └── constants.ts
├── hooks/
│   ├── useAuth.ts
│   ├── useProgress.ts
│   ├── useTheme.ts
│   └── useLocalStorage.ts
├── store/                  # State (Zustand/Context)
│   └── ...
└── types/
    └── index.ts
```

## Key Component Hierarchy

### Dashboard Page
```
DashboardPage
├── AppShell
│   ├── Sidebar
│   └── TopBar
└── DashboardContent
    ├── WelcomeHeader
    ├── StatsRow (StreakCard, XPCard, LevelCard)
    ├── Grid
    │   ├── DailyPlan
    │   ├── WeakTopics
    │   ├── ContinueLearning (CourseCard[])
    │   └── RecentActivity
    └── ProgressChart
```

### Course Player
```
CoursePlayerPage
├── AppShell
├── Breadcrumb
├── VideoSection
│   ├── VideoPlayer
│   ├── TimestampList
│   └── ActionBar (ExplainButton, NoteButton, QuizButton)
├── ContentPanel
│   ├── AutoNotes
│   └── LessonSidebar
└── QuizModal (conditional)
```
