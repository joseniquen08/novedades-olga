import { Schema } from "mongoose";
import { IProduct } from "../types/productTypes";

export const ProductSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Tejidos", "Costura", "Bisutería", "Bordados", "Muñequería"],
  },
  stock: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0.0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});
