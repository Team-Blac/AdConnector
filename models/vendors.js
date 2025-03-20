import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";


const vendorSchema = new Schema ({
    title:{ type: String, required: true, unique: true},
    description: { type: String, required: true},
    pictures: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true}
},{
    timestamps: true
});

vendorSchema.plugin(normalize);

export const VendorModel = model('Vendor', vendorSchema)