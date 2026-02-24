import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid';
// _id: uuidv4,

const userSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    username: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 1,
        required: [true, "Username is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: 6,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, "Email is required "],
        lowercase: true,
        trim: true,
        unique: true,

    },

}, { timestamps: true })

export const User = mongoose.model("UserModel", userSchema)