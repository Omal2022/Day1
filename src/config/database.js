import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        
        console.log(`\n Pinged your deployment. You successfully connected to MongoDB! ${connectionInstance}`);
    } catch (err) {
        // Ensures that the client will close when you finish/error
      console.error(`MongoDB connection failed`, err)
    }
}

export default connectDB
