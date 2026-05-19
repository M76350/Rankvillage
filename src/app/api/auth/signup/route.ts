import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/mongodb";
import UserModel from "@/lib/models/User";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, businessName, location, businessType, plan } =
      await req.json();

    // ── Basic validation ──────────────────────────────────────────────────
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email and password are required." },
        { status: 400 }
      );
    }
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters." },
        { status: 400 }
      );
    }

    await connectDB();

    // ── Check duplicate email ─────────────────────────────────────────────
    const existing = await UserModel.findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // ── Hash password ─────────────────────────────────────────────────────
    const passwordHash = await bcrypt.hash(password, 12);

    // ── Create user ───────────────────────────────────────────────────────
    const avatar = name.slice(0, 2).toUpperCase();
    const user = await UserModel.create({
      name,
      email: email.toLowerCase(),
      passwordHash,
      plan: plan ?? "starter",
      businessName: businessName ?? "",
      location: location ?? "",
      businessType: businessType ?? "",
      avatar,
    });

    // ── Sign JWT ──────────────────────────────────────────────────────────
    const token = jwt.sign({ userId: user._id.toString() }, JWT_SECRET, {
      expiresIn: "7d",
    });

    const response = NextResponse.json(
      {
        user: {
          id:           user._id.toString(),
          name:         user.name,
          email:        user.email,
          plan:         user.plan,
          businessName: user.businessName,
          location:     user.location,
          avatar:       user.avatar,
        },
      },
      { status: 201 }
    );

    // Store token in httpOnly cookie
    response.cookies.set("rv_token", token, {
      httpOnly: true,
      secure:   process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge:   60 * 60 * 24 * 7, // 7 days
      path:     "/",
    });

    return response;
  } catch (err) {
    console.error("[signup]", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
