// In-memory user store (resets on serverless cold start - fine for demo)
const users = new Map<string, { id: string; email: string; name: string; role: string; password: string }>();
let nextId = 1;

export function getUsers() {
  return users;
}

export function addUser(email: string, password: string, name?: string) {
  if (users.has(email)) return null;
  const id = String(nextId++);
  const user = {
    id,
    email,
    name: name || email.split("@")[0],
    role: "student",
    password,
  };
  users.set(email, user);
  return { id: user.id, email: user.email, name: user.name, role: user.role };
}

export function findUserByEmail(email: string) {
  return users.get(email);
}
