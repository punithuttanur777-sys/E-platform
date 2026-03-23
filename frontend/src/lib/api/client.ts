// Use relative /api - Next.js rewrites proxy to backend. Single URL: localhost:3000
const API_BASE = "/api";

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("learnsmart-token");
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE}${endpoint}`;
  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(url, { ...options, headers, cache: "no-store" });
  const text = await res.text();
  let data: T;
  try {
    data = text ? JSON.parse(text) : ({} as T);
  } catch {
    throw new Error(text || "Invalid response");
  }
  if (!res.ok) {
    throw new Error((data as { error?: string })?.error || `Request failed: ${res.status}`);
  }
  return data;
}

export const api = {
  auth: {
    login: (email: string, password: string) =>
      request<{ user: { id: string; email: string; name: string; role: string }; token: string }>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }),
    register: (email: string, password: string, name?: string) =>
      request<{ user: { id: string; email: string; name: string; role: string }; token: string }>("/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password, name }),
      }),
    me: () => request<{ user: { id: string; email: string; name: string; role: string } }>("/auth/me"),
  },
  courses: {
    list: (category?: string) =>
      request<{ courses: Array<Record<string, unknown>> }>(`/courses${category && category !== "All" ? `?category=${encodeURIComponent(category)}` : ""}`),
    get: (id: string) => request<Record<string, unknown>>(`/courses/${id}`),
    getLessons: (courseId: string) =>
      request<{ lessons: Array<Record<string, unknown>> }>(`/courses/${courseId}/lessons`),
    getLesson: (courseId: string, lessonId: string) =>
      request<Record<string, unknown> & { videoUrl?: string }>(`/courses/${courseId}/lessons/${lessonId}`),
  },
  dashboard: {
    dailyPlan: () => request<{ plan: Array<Record<string, unknown>> }>("/dashboard/daily-plan"),
    streak: () => request<{ streak: number }>("/dashboard/streak"),
    weakTopics: () => request<{ topics: Array<Record<string, unknown>> }>("/dashboard/weak-topics"),
    recentActivity: () => request<{ activity: Array<Record<string, unknown>> }>("/dashboard/recent-activity"),
  },
  ai: {
    chat: (messages: { role: string; content: string }[], simplifyMode: boolean) =>
      request<{ content: string }>("/ai/chat", {
        method: "POST",
        body: JSON.stringify({ messages, simplifyMode }),
      }),
  },
};
