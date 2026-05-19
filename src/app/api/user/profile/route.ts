import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/mongodb";
import UserModel from "@/lib/models/User";

const JWT_SECRET = process.env.JWT_SECRET as string;

function getUserId(req: NextRequest): string | null {
  const token = req.cookies.get("rv_token")?.value;
  if (!token) return null;
  try {
    const payload = jwt.verify(token, JWT_SECRET) as { userId: string };
    return payload.userId;
  } catch {
    return null;
  }
}

// GET /api/user/profile — return full profile
export async function GET(req: NextRequest) {
  const userId = getUserId(req);
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectDB();
  const user = await UserModel.findById(userId).select("-passwordHash");
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({
    user: {
      id:           user._id.toString(),
      name:         user.name,
      email:        user.email,
      plan:         user.plan,
      businessName: user.businessName,
      location:     user.location,
      businessType: user.businessType,
      avatar:       user.avatar,
    },
  });
}

// PATCH /api/user/profile — update name, businessName, location
export async function PATCH(req: NextRequest) {
  const userId = getUserId(req);
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { name, businessName, location } = await req.json();

    await connectDB();

    const updates: Record<string, string> = {};
    if (name?.trim())         updates.name         = name.trim();
    if (businessName?.trim()) updates.businessName = businessName.trim();
    if (location?.trim())     updates.location     = location.trim();

    // Recalculate avatar if name changed
    if (updates.name) updates.avatar = updates.name.slice(0, 2).toUpperCase();

    const user = await UserModel.findByIdAndUpdate(
      userId,
      { $set: updates },
      { new: true, select: "-passwordHash" }
    );

    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({
      user: {
        id:           user._id.toString(),
        name:         user.name,
        email:        user.email,
        plan:         user.plan,
        businessName: user.businessName,
        location:     user.location,
        businessType: user.businessType,
        avatar:       user.avatar,
      },
    });
  } catch (err) {
    console.error("[profile PATCH]", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
