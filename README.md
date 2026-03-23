# LearnSmart - AI-Powered Adaptive E-Learning Platform

A modern, scalable AI-powered e-learning platform that acts as a **personalized study companion** for students. Integrates courses, notes, flashcards, quizzes, coding practice, AI tutoring, progress analytics, and community learning.

## Features

- **Personalized Dashboard** - Daily learning plan, weak topics, streaks, progress
- **Interactive Course Player** - Video lessons, auto-notes, timestamps, in-lesson quizzes
- **AI Tutor** - Answer questions, "Explain Like I'm 10", step-by-step help
- **Smart Notes & Flashcards** - Markdown notes, auto-summary, spaced repetition
- **Coding Practice** - Built-in editor, test cases, AI hints
- **Adaptive Learning** - Recommendations based on performance
- **Gamification** - XP, streaks, badges, leaderboards
- **Community** - Discussions, study groups, weekly challenges

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS, Zustand
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **AI**: OpenAI API

## Project Structure

```
E-platform/
├── docs/                 # Architecture & design docs
│   ├── ARCHITECTURE.md
│   ├── DATABASE_SCHEMA.md
│   ├── API_STRUCTURE.md
│   ├── UI_LAYOUT_DESIGN.md
│   ├── REACT_COMPONENT_STRUCTURE.md
│   └── DEVELOPMENT_ROADMAP.md
├── frontend/             # Next.js app
│   └── src/
│       ├── app/
│       ├── components/
│       ├── lib/
│       ├── store/
│       └── types/
└── api/                  # Express API
    └── src/
```

## Getting Started

**One command, one URL.**

### Run everything

```bash
npm run install:all   # First time only
npm run dev
```

Then open: **http://localhost:3000**

The backend runs on port 8000 in the background. All API requests are proxied through the frontend, so you only need this single link.

### Register or Login

Create an account on the register page, or log in with existing credentials.

## Environment Variables

**Backend** (`api/.env`):
- `PORT` - API port (default: 8000)
- `FRONTEND_URL` - Frontend URL for CORS (default: http://localhost:3000)
- `JWT_SECRET` - JWT signing secret
- `OPENAI_API_KEY` - OpenAI API key for AI Tutor (optional; fallback definitions work without it)

## Development Roadmap

See [docs/DEVELOPMENT_ROADMAP.md](docs/DEVELOPMENT_ROADMAP.md) for the full phased plan.

## License

MIT
