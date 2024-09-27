import { model, Schema } from "mongoose";


// collection
const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
}, {
    timestamps: true
})

const ProductModel = model("Product", productSchema, "products")


export {
    ProductModel
}