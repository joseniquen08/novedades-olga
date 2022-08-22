import { Schema } from "mongoose";
import { ICategory } from "../types/categoryTypes";

export const CategorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
    enum: ["active", "inactive"],
  },
}, {
  timestamps: true,
});
