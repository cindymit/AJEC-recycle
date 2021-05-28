import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Bike = new Schema(
  {
    brand: { type: String, required: true },
    imgURL: { type: String, required: true },
    category: { type: String, required: true },
    condition: { type: String, required: true },
    price: { type: String, required: true },
    sellerName: { type: String, required: true },
    sellerEmail: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model('bikes', Bike)