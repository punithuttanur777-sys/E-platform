import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { getUsers } from "@/lib/auth-server";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "learnsmart-dev-secret"
);

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { payload } = await jwtVerify(authHeader.slice(7), JWT_SECRET);
    const email = payload.email as string;
    const users = getUsers();
    const stored = [...users.values()].find((u) => u.email === email);
    if (!stored) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({
      user: { id: stored.id, email: stored.email, name: stored.name, role: stored.role },
    });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
