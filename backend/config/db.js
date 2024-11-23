import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://cloths:KksAKMmRJev3jnD3@cluster0.2qvy9.mongodb.net/cloths').then(()=>console.log("DB Connected"));
}

//mongodb+srv://cloths:<db_password>@cluster0.2qvy9.mongodb.net/cloths