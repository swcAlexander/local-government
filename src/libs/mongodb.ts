import mongoose from "mongoose";
import 'dotenv/config'

const { MONGODB_URI } = process.env;
const connectMongoDB = () => {
    try {
        MONGODB_URI && mongoose.connect(MONGODB_URI);
        console.log('Connected to mongoDB')
    } catch (error: any) {
        console.log(error.message)
        
    }
}

export default connectMongoDB;