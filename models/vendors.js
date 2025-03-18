import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";


const vendorSchema = new Schema ({
    title:{ type: String, required: true, unique: true},
    description: { type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true}
},{
    timestamps: true
});

vendorSchema.plugin(normalize);

export const VendorModel = model('Vendor', vendorSchema)