import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  plan: "starter" | "pro" | "business";
  businessName: string;
  location: string;
  businessType: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name:         { type: String, required: true, trim: true },
    email:        { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    plan:         { type: String, enum: ["starter", "pro", "business"], default: "starter" },
    businessName: { type: String, default: "" },
    location:     { type: String, default: "" },
    businessType: { type: String, default: "" },
    avatar:       { type: String, default: "" },
  },
  { timestamps: true }
);

// Prevent model re-compilation during hot-reload in development
const UserModel: Model<IUser> =
  (mongoose.models.User as Model<IUser>) ||
  mongoose.model<IUser>("User", UserSchema);

export default UserModel;
