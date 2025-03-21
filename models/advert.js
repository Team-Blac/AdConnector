import { Schema, model,Types } from "mongoose";
import normalize from "normalize-mongoose";


const advertSchema = new Schema ({
    title:{ type: String, required: true, unique: true},
    description: { type: String, required: true},
    pictures: [{type: String, required: true}],
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    userId:{type:Types.ObjectId, required: true, ref: 'User'}

},{
    timestamps: true
});

advertSchema.plugin(normalize);

export const AdvertModel = model('Vendor', advertSchema)