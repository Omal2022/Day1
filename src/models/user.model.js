import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt"
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

userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return 
    }
    this.password = await bcrypt.hash(this.password, 10)
})


userSchema.methods.comparePassword = async function (password) {
    if (!this.password) {
        throw new Error("User has no pssword set")
    }
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("UserModel", userSchema)