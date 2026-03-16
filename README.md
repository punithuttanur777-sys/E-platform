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

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Backend API

```bash
cd api
npm install
# Create .env with OPENAI_API_KEY, MONGODB_URI
npm run dev
```

API runs at [http://localhost:8000](http://localhost:8000)

### Demo Login

Use any email/password on the login page for a demo experience. The app uses mock data for demonstration.

## Environment Variables

**Frontend** (`frontend/.env.local`):
- `OPENAI_API_KEY` - OpenAI API key for AI Tutor (get from https://platform.openai.com/api-keys)
- `NEXT_PUBLIC_API_URL` - API base URL (default: http://localhost:8000/api)

**Backend** (`api/.env`):
- `PORT` - API port (default: 8000)
- `MONGODB_URI` - MongoDB connection string
- `OPENAI_API_KEY` - OpenAI API key for AI tutor
- `JWT_SECRET` - JWT signing secret

## Development Roadmap

See [docs/DEVELOPMENT_ROADMAP.md](docs/DEVELOPMENT_ROADMAP.md) for the full phased plan.

## License

MIT
