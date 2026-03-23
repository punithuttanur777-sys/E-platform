import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { findUserByEmail } from "@/lib/auth-server";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "learnsmart-dev-secret"
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }
    const stored = findUserByEmail(email);
    if (!stored || stored.password !== password) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
    const user = { id: stored.id, email: stored.email, name: stored.name, role: stored.role };
    const token = await new SignJWT({ userId: user.id, email: user.email })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .sign(JWT_SECRET);
    return NextResponse.json({ user, token });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
