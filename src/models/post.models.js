
import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const postSchema = new Schema({

    _id: {
        type: String,
        default: uuidv4
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    description: {
        type: String,
        trim: true,
        required: [true, "Description is required"],
    },
    age: {
        type: Number,
        trim: true,
        required: [true, "Age is required"],
        min: 1,
        max: 150
    },

}, { timestamps: true })

export const Post = mongoose.model("PostModel", postSchema)