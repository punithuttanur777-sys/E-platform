import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const USERS_FILE = path.join(__dirname, "../../data/users.json");

function ensureDataDir() {
  const dir = path.dirname(USERS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function loadUsers() {
  ensureDataDir();
  if (!fs.existsSync(USERS_FILE)) {
    return new Map();
  }
  try {
    const data = fs.readFileSync(USERS_FILE, "utf8");
    const arr = JSON.parse(data || "[]");
    return new Map(arr.map((u) => [u.email, u]));
  } catch {
    return new Map();
  }
}

function saveUsers(usersMap) {
  ensureDataDir();
  const arr = [...usersMap.values()];
  fs.writeFileSync(USERS_FILE, JSON.stringify(arr, null, 2), "utf8");
}

export { loadUsers, saveUsers };
