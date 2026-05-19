import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/mongodb";
import UserModel from "@/lib/models/User";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function PATCH(req: NextRequest) {
  const token = req.cookies.get("rv_token")?.value;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let userId: string;
  try {
    const payload = jwt.verify(token, JWT_SECRET) as { userId: string };
    userId = payload.userId;
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { currentPassword, newPassword } = await req.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (newPassword.length < 6) {
      return NextResponse.json({ error: "New password must be at least 6 characters." }, { status: 400 });
    }

    await connectDB();

    const user = await UserModel.findById(userId);
    if (!user) return NextResponse.json({ error: "User not found." }, { status: 404 });

    const valid = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!valid) return NextResponse.json({ error: "Current password is incorrect." }, { status: 400 });

    user.passwordHash = await bcrypt.hash(newPassword, 12);
    await user.save();

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[password PATCH]", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
