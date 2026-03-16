# Database Schema

## Technology: MongoDB (with Mongoose) / PostgreSQL option

---

## Collections / Tables

### Users
```javascript
{
  _id: ObjectId,
  email: String (unique),
  passwordHash: String,
  name: String,
  avatar: String (URL),
  role: Enum ['student', 'instructor', 'admin'],
  preferences: {
    theme: 'light' | 'dark' | 'system',
    notifications: Boolean,
    language: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Student Profiles (extends User context)
```javascript
{
  userId: ObjectId (ref: User),
  learningGoals: [String],
  dailyGoalMinutes: Number,
  streak: Number,
  lastActiveDate: Date,
  totalXP: Number,
  level: Number,
  badges: [{ badgeId, earnedAt }],
  weakTopics: [{ topicId, masteryScore, lastPracticed }],
  studyGroups: [ObjectId]
}
```

### Courses
```javascript
{
  _id: ObjectId,
  title: String,
  slug: String (unique),
  description: String,
  thumbnail: String,
  instructorId: ObjectId (ref: User),
  category: String,
  difficulty: Enum ['beginner', 'intermediate', 'advanced'],
  duration: Number (minutes),
  topics: [String],
  isPublished: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Lessons
```javascript
{
  _id: ObjectId,
  courseId: ObjectId (ref: Course),
  title: String,
  order: Number,
  type: Enum ['video', 'text', 'coding', 'quiz'],
  content: {
    videoUrl: String,
    transcript: String,
    timestamps: [{ time: Number, label: String }],
    markdown: String,
    codeTemplate: String
  },
  duration: Number,
  topics: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Lesson Progress
```javascript
{
  userId: ObjectId,
  lessonId: ObjectId,
  courseId: ObjectId,
  completed: Boolean,
  progressPercent: Number,
  timeSpent: Number,
  lastAccessedAt: Date,
  quizScore: Number (if applicable)
}
```

### Quizzes
```javascript
{
  _id: ObjectId,
  lessonId: ObjectId (optional),
  courseId: ObjectId,
  title: String,
  type: Enum ['lesson', 'topic', 'assessment'],
  questions: [{
    questionId: ObjectId,
    order: Number,
    type: 'mcq' | 'true_false' | 'short_answer' | 'code',
    question: String,
    options: [String],
    correctAnswer: Mixed,
    points: Number,
    explanation: String
  }],
  passingScore: Number,
  timeLimit: Number,
  createdAt: Date
}
```

### Quiz Attempts
```javascript
{
  userId: ObjectId,
  quizId: ObjectId,
  answers: [{ questionId, answer, correct }],
  score: Number,
  totalPoints: Number,
  timeSpent: Number,
  completedAt: Date
}
```

### Notes
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  lessonId: ObjectId,
  courseId: ObjectId,
  content: String (Markdown),
  highlights: [{ text: String, color: String }],
  autoSummary: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Flashcards
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  noteId: ObjectId (optional),
  courseId: ObjectId,
  front: String,
  back: String,
  topic: String,
  nextReview: Date,
  interval: Number,
  easeFactor: Number,
  repetitions: Number,
  createdAt: Date
}
```

### Coding Problems
```javascript
{
  _id: ObjectId,
  title: String,
  slug: String,
  description: String,
  difficulty: Enum ['easy', 'medium', 'hard'],
  topics: [String],
  starterCode: String,
  solution: String,
  testCases: [{
    input: Mixed,
    expectedOutput: Mixed,
    isHidden: Boolean
  }],
  hints: [String],
  explanation: String,
  createdAt: Date
}
```

### Coding Submissions
```javascript
{
  userId: ObjectId,
  problemId: ObjectId,
  code: String,
  language: String,
  passed: Boolean,
  testResults: [Object],
  executionTime: Number,
  submittedAt: Date
}
```

### AI Conversations
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  context: {
    lessonId: ObjectId,
    courseId: ObjectId,
    topic: String
  },
  messages: [{
    role: 'user' | 'assistant',
    content: String,
    timestamp: Date
  }],
  simplifiedMode: Boolean, // "Explain Like I'm 10"
  createdAt: Date,
  updatedAt: Date
}
```

### Achievements / Badges
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  icon: String,
  xpReward: Number,
  criteria: Object, // e.g. { type: 'streak', value: 7 }
  createdAt: Date
}
```

### Community Posts
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  type: Enum ['question', 'solution', 'discussion'],
  title: String,
  content: String,
  courseId: ObjectId (optional),
  topic: String,
  tags: [String],
  upvotes: Number,
  answers: [ObjectId],
  createdAt: Date,
  updatedAt: Date
}
```

### Study Groups
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  courseId: ObjectId,
  creatorId: ObjectId,
  members: [ObjectId],
  maxMembers: Number,
  createdAt: Date
}
```

### Weekly Challenges
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  type: Enum ['quiz', 'coding', 'reading'],
  startDate: Date,
  endDate: Date,
  xpReward: Number,
  participants: [ObjectId],
  leaderboard: [{ userId, score }],
  createdAt: Date
}
```
