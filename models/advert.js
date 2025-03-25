import { Schema, model, Types } from "mongoose";
import normalize from "normalize-mongoose";

// Define the category enum values
const CategoryEnum = {
  SHIRT: "Shirt",
  PANTS: "Pants",
  SHOES: "Shoes",
  ACCESSORIES: "Accessories",
};

const advertSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    pictures: [{ type: String, required: true }],
    price: { type: Number, required: true },
    categories: [
      {
        type: String,
        enum: Object.values(CategoryEnum), // Ensures only valid category values
        required: true,
      },
    ],
    userId: { type: Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
  }
);

advertSchema.plugin(normalize);

export const AdvertModel = model("Vendor", advertSchema);
