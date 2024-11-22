import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://maheesha:123abc@cluster0.qq4gtdq.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}