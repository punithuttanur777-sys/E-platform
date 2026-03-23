import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { addUser } from "@/lib/auth-server";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "learnsmart-dev-secret"
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = body;
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }
    const user = addUser(email, password, name);
    if (!user) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }
    const token = await new SignJWT({ userId: user.id, email: user.email })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .sign(JWT_SECRET);
    return NextResponse.json({ user, token });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
