import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContact extends Document {
  formType: "contact" | "enquiry";
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  businessName?: string;
  businessType?: string;
  city?: string;
  queryType?: string;
  status: "new" | "read" | "replied";
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    formType:     { type: String, enum: ["contact", "enquiry"], default: "contact" },
    name:         { type: String, required: true, trim: true },
    email:        { type: String, required: true, lowercase: true, trim: true },
    phone:        { type: String, required: true, trim: true },
    subject:      { type: String, default: "", trim: true },
    message:      { type: String, required: true, trim: true },
    businessName: { type: String, default: "", trim: true },
    businessType: { type: String, default: "", trim: true },
    city:         { type: String, default: "", trim: true },
    queryType:    { type: String, default: "", trim: true },
    status:       { type: String, enum: ["new", "read", "replied"], default: "new" },
  },
  { timestamps: true }
);

const ContactModel: Model<IContact> =
  (mongoose.models.Contact as Model<IContact>) ||
  mongoose.model<IContact>("Contact", ContactSchema);

export default ContactModel;
