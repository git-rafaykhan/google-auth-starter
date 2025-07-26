import mongoose from "mongoose";
import { config } from "dotenv";

config();

const url: any = process.env.MONGO_URL;

export default async function connectToDB() {
    await mongoose.connect(url)
    console.log("data base is connected");
}