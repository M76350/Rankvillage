import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ContactModel from "@/lib/models/Contact";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formType, name, email, phone, subject, message, businessName, businessType, city, queryType } = body;

    // Required field validation
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, phone and message are required." },
        { status: 400 }
      );
    }

    // Basic phone validation
    const phoneClean = phone.replace(/\s/g, "");
    if (!/^[+]?[\d]{10,15}$/.test(phoneClean)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    await connectDB();

    await ContactModel.create({
      formType:     formType ?? "contact",
      name:         name.trim(),
      email:        email.trim().toLowerCase(),
      phone:        phoneClean,
      subject:      subject?.trim() ?? "",
      message:      message.trim(),
      businessName: businessName?.trim() ?? "",
      businessType: businessType?.trim() ?? "",
      city:         city?.trim() ?? "",
      queryType:    queryType?.trim() ?? "",
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[contact POST]", message);
    return NextResponse.json(
      { error: "Something went wrong. Please try again.", detail: message },
      { status: 500 }
    );
  }
}
