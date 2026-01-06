import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error("no mongodb uri");
}
const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("conected to database asap")
  } catch (error) {
    console.error("Error connecting to database", error);
    process.exit(code: 1)
  }
};

export default connectToDatabase;