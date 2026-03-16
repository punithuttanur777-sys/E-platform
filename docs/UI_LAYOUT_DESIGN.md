# UI Layout Design

## Design Inspiration
- **Notion**: Clean, minimal, sidebar navigation
- **Coursera**: Course cards, progress indicators
- **Khan Academy**: Friendly, approachable, progress mastery
- **Duolingo**: Gamification, streaks, playful elements

## Design System

### Colors (Dark Mode Primary)
- Background: `#0f0f12` (main), `#18181b` (cards)
- Surface: `#27272a`
- Primary: `#6366f1` (indigo)
- Accent: `#22c55e` (success), `#f59e0b` (warning)
- Text: `#fafafa` (primary), `#a1a1aa` (secondary)

### Typography
- Font: Inter / Geist (modern, readable)
- Headings: 600-700 weight
- Body: 400, 14-16px

### Components
- Rounded corners: 8-12px
- Shadows: Subtle, elevated cards
- Spacing: 8px grid

---

## Page Layouts

### 1. App Shell
```
┌─────────────────────────────────────────────────────────────┐
│  Sidebar (collapsible)         │  Main Content Area          │
│  ┌─────────────┐               │  ┌─────────────────────────┐│
│  │ Logo        │               │  │  Top Bar (breadcrumb,   ││
│  │ Dashboard   │               │  │  search, notifications)   ││
│  │ My Learning │               │  └─────────────────────────┘│
│  │ Courses     │               │  ┌─────────────────────────┐│
│  │ Practice    │               │  │                         ││
│  │  - Coding   │               │  │  Page Content           ││
│  │  - Quizzes  │               │  │                         ││
│  │ Notes       │               │  │                         ││
│  │ AI Tutor    │               │  │                         ││
│  │ Community   │               │  │                         ││
│  │ ─────────── │               │  │                         ││
│  │ Profile     │               │  │                         ││
│  │ Settings    │               │  │                         ││
│  └─────────────┘               │  └─────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

### 2. Student Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│  Welcome back, [Name]! 👋                                     │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐             │
│  │  Streak: 7  │ │  XP: 1,240  │ │  Level: 5   │             │
│  ├─────────────┤ ├─────────────┤ ├─────────────┤             │
│  │  🔥 🔥 🔥   │ │  ████████   │ │  ████████   │             │
│  └─────────────┘ └─────────────┘ └─────────────┘             │
│                                                              │
│  Today's Plan                    │  Weak Topics               │
│  ┌─────────────────────────────┐ │  ┌─────────────────────┐ │
│  │ 1. Complete Lesson 3         │ │  │ • Arrays (65%)       │ │
│  │ 2. Practice: Two Sum        │ │  │ • Recursion (58%)    │ │
│  │ 3. Review 5 flashcards     │ │  │ • OOP (72%)          │ │
│  └─────────────────────────────┘ │  └─────────────────────┘ │
│                                                              │
│  Continue Learning               │  Recent Activity           │
│  ┌─────────────────────────────┐ │  ┌─────────────────────┐ │
│  │ [Course Card - Progress]    │ │  │ • Completed Quiz     │ │
│  │ [Course Card - Progress]    │ │  │ • Earned badge       │ │
│  └─────────────────────────────┘ │  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 3. Course Player
```
┌─────────────────────────────────────────────────────────────┐
│  [← Back]  Course Title > Lesson Title                       │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────┐ │  Lesson Content           │
│  │                             │ │  ┌─────────────────────┐ │
│  │     VIDEO PLAYER            │ │  │ Auto-generated notes │ │
│  │     [▶] 0:00 / 12:34        │ │  │ • Key point 1        │ │
│  │                             │ │  │ • Key point 2        │ │
│  └─────────────────────────────┘ │  └─────────────────────┘ │
│  Timestamps: 0:00 Intro | 2:30 Main | 8:00 Summary          │
│  [🤖 Explain this] [📝 Take note] [❓ Quiz]                 │
├─────────────────────────────────────────────────────────────┤
│  Lessons (accordion)            │  Resources                 │
│  ✓ 1. Introduction              │  • Slides                  │
│  ✓ 2. Basics                    │  • Code repo               │
│  ▶ 3. Current lesson            │                            │
│  ○ 4. Next lesson               │                            │
└─────────────────────────────────────────────────────────────┘
```

### 4. AI Tutor Chat
```
┌─────────────────────────────────────────────────────────────┐
│  AI Tutor                    [Explain Like I'm 10 ✓] [New]  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐│
│  │ User: What is recursion?                                 ││
│  │ AI: Recursion is when a function calls itself...         ││
│  │ User: Can you explain like I'm 10?                       ││
│  │ AI: Imagine you have a Russian doll. Inside it...        ││
│  └─────────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Ask anything...                              [Send]      ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

### 5. Coding Practice
```
┌─────────────────────────────────────────────────────────────┐
│  Two Sum - Easy                    [Run] [Submit] [Hint]     │
├─────────────────────────────────────────────────────────────┤
│  Problem Description          │  Code Editor                 │
│  ┌────────────────────────────┐│  ┌─────────────────────────┐│
│  │ Given an array of integers ││  │ function twoSum(nums,   ││
│  │ nums and an integer target,││  │   target) {              ││
│  │ return indices of the two ││  │   // Your code here     ││
│  │ numbers that add up to    ││  │ }                        ││
│  │ target.                   ││  └─────────────────────────┘│
│  └────────────────────────────┘│  Test Cases: 2/3 passed    │
└─────────────────────────────────────────────────────────────┘
```
