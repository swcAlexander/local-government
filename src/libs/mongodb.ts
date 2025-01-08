import mongoose from "mongoose";
import 'dotenv/config'

const { MONGODB_URI } = process.env;
const connectMongoDB = async () => {
    if (!MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in environment variables");
    }
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to mongoDB')
    } catch (error: any) {
        console.log(error.message)
        
    }
}

export default connectMongoDB;