import { Schema, model, Types } from "mongoose";
import normalize from "normalize-mongoose";

// Define the category enum values
const CategoryEnum = ["Shirt", "Pants", "Shoes", "Accessories"];


const advertSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    pictures: [{ type: String, required: true }],
    price: { type: Number, required: true },
    
    categories: {
      type: String,
      enum: CategoryEnum, //Ensure only valid category value
      required: true
    },

    userId: { type: Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
  }
);

advertSchema.plugin(normalize);

export const AdvertModel = model("Advert", advertSchema);
