import mongoose from "mongoose";

// Updated connection function without deprecated options
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://laraibanwr:lraarwaniab15Mongodb@cluster0.kgwfbqd.mongodb.net/LR_CUBE?retryWrites=true&w=majority');
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
    }
};
