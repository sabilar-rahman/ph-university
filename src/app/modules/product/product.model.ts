import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

// Define the TVariant schema
const TVariantSchema = new Schema<TVariant>({
    type: {
        type: String,
        
    },
    value: {
        type: String,

    }
});

// Define the TInventory schema
const TInventorySchema = new Schema<TInventory>({
    quantity: {
        type: Number,

    },
    inStock: {
        type: Boolean,

    }
});

// Define the TProduct schema
const TProductSchema = new Schema<TProduct>({
    name: {
        type: String,

    },
    description: {
        type: String,

    },
    price: {
        type: Number,

    },
    category: {
        type: String,

    },
    tags: {
        type: [String],

    },
    variants: {
        type: [TVariantSchema],

    },
    inventory: {
        type: TInventorySchema,

    }
});



export const ProductsModel = model<TProduct>("Products", TProductSchema)

