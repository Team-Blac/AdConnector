import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const userSchema = new Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  role: {
    type: String,
    default: "customer",
    enum: ["vendor", "customer", "admin", "superadmin"],
  },
});

userSchema.plugin(normalize);

export const UserModel = model('User', userSchema);