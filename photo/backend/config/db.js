import mongoose from 'mongoose';

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully!");

    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};
export default connectDB;