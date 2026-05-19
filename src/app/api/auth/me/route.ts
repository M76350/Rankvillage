import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/mongodb";
import UserModel from "@/lib/models/User";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("rv_token")?.value;
    if (!token) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    // ── Verify token ──────────────────────────────────────────────────────
    let payload: { userId: string };
    try {
      payload = jwt.verify(token, JWT_SECRET) as { userId: string };
    } catch {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    await connectDB();

    const user = await UserModel.findById(payload.userId).select("-passwordHash");
    if (!user) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    return NextResponse.json({
      user: {
        id:           user._id.toString(),
        name:         user.name,
        email:        user.email,
        plan:         user.plan,
        businessName: user.businessName,
        location:     user.location,
        avatar:       user.avatar,
      },
    });
  } catch (err) {
    console.error("[me]", err);
    return NextResponse.json({ user: null }, { status: 500 });
  }
}
