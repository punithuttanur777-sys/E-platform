# API Structure

## Base URL
- Development: `http://localhost:8000/api`
- Production: `https://api.yourplatform.com/v1`

## Authentication
All protected routes require: `Authorization: Bearer <JWT_TOKEN>`

---

## Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register user |
| POST | `/auth/login` | Login, returns JWT |
| POST | `/auth/refresh` | Refresh token |
| POST | `/auth/logout` | Invalidate token |
| GET | `/auth/me` | Current user profile |
| POST | `/auth/oauth/google` | Google OAuth |

---

## Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users/:id` | Get user (Admin/self) |
| PATCH | `/users/:id` | Update profile |
| GET | `/users/:id/progress` | Get progress summary |
| GET | `/users/:id/streak` | Get streak info |

---

## Courses
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/courses` | List courses (filter, search) |
| GET | `/courses/:id` | Course details |
| GET | `/courses/:id/lessons` | Course lessons |
| POST | `/courses` | Create (Instructor) |
| PATCH | `/courses/:id` | Update (Instructor) |
| DELETE | `/courses/:id` | Delete (Instructor) |

---

## Lessons
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/lessons/:id` | Lesson content |
| GET | `/lessons/:id/quiz` | In-lesson quiz |
| POST | `/lessons` | Create (Instructor) |
| PATCH | `/lessons/:id` | Update (Instructor) |

---

## Progress
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/progress` | User's all progress |
| GET | `/progress/course/:courseId` | Course progress |
| POST | `/progress/lesson` | Update lesson progress |
| GET | `/progress/weak-topics` | Weak topics list |
| GET | `/progress/mastery` | Topic mastery levels |

---

## Dashboard (Adaptive)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/dashboard/daily-plan` | Today's recommended plan |
| GET | `/dashboard/recommendations` | Recommended lessons |
| GET | `/dashboard/streak` | Streak & XP summary |
| GET | `/dashboard/recent-activity` | Recent activity feed |
| GET | `/dashboard/upcoming` | Upcoming quizzes/challenges |

---

## Quizzes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/quizzes/:id` | Get quiz |
| POST | `/quizzes/:id/submit` | Submit attempt |
| GET | `/quizzes/:id/results` | Get results |
| POST | `/quizzes` | Create (Instructor) |

---

## AI Tutor
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/ai/chat` | Send message, get response |
| POST | `/ai/explain` | Explain concept (with optional simplify) |
| POST | `/ai/generate-practice` | Generate practice questions |
| GET | `/ai/conversations` | List conversations |
| GET | `/ai/conversations/:id` | Get conversation |

---

## Notes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/notes` | User's notes |
| GET | `/notes/:id` | Single note |
| POST | `/notes` | Create note |
| PATCH | `/notes/:id` | Update note |
| DELETE | `/notes/:id` | Delete note |
| POST | `/notes/:id/summarize` | AI auto-summary |
| POST | `/notes/:id/to-flashcards` | Convert to flashcards |

---

## Flashcards
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/flashcards` | User's flashcards |
| GET | `/flashcards/review` | Due for review (spaced repetition) |
| POST | `/flashcards` | Create flashcard |
| POST | `/flashcards/:id/review` | Submit review (quality 1-5) |
| PATCH | `/flashcards/:id` | Update |
| DELETE | `/flashcards/:id` | Delete |

---

## Coding
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/coding/problems` | List problems |
| GET | `/coding/problems/:id` | Problem details |
| POST | `/coding/problems/:id/submit` | Submit code |
| POST | `/coding/problems/:id/hint` | Get AI hint |
| GET | `/coding/submissions` | User submissions |

---

## Gamification
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/gamification/xp` | User XP & level |
| GET | `/gamification/streak` | Streak info |
| GET | `/gamification/badges` | Earned badges |
| GET | `/gamification/leaderboard` | Leaderboard |
| GET | `/gamification/achievements` | All achievements |

---

## Community
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/community/posts` | List posts |
| GET | `/community/posts/:id` | Post with answers |
| POST | `/community/posts` | Create post |
| POST | `/community/posts/:id/answer` | Add answer |
| POST | `/community/posts/:id/vote` | Upvote |
| GET | `/community/groups` | Study groups |
| POST | `/community/groups` | Create group |
| POST | `/community/groups/:id/join` | Join group |
| GET | `/community/challenges` | Weekly challenges |
| POST | `/community/challenges/:id/join` | Join challenge |

---

## Analytics (Instructor/Admin)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/analytics/course/:id` | Course analytics |
| GET | `/analytics/students` | Student overview (Admin) |
| GET | `/analytics/platform` | Platform usage (Admin) |
