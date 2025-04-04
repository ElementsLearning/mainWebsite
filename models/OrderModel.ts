import { OrderType } from "@/constants/Shop/shop"
import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
  customerInfo: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    email: { type: String, required: true }
  },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true }
    }
  ],
  paymentURL: { type: String, required: true },
  notes: { type: String, default: "" },
  completed: { type: Boolean, default: false }
}, { timestamps: true })

export default mongoose.models.Order || mongoose.model<OrderType>("Order", OrderSchema)