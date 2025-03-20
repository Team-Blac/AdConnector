import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const userSchema = new Schema({
    userName: { type: String, unique: true},
    email: {type: String, unique: true},
    password: {type: String,}
});

userSchema.plugin(normalize);

export const UserModel = model('User', userSchema);