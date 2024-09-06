import mongoose from "mongoose";
import dotenv from "dotenv";
import { log } from "../../loggers/index.js";

dotenv.config();

const connectDB = async () => {
  let conn;
  try {
    conn = await mongoose.connect(process.env.MONGO_URI, {
      serverApi: {
        version: "1",
        strict: true,
        deprecationErrors: true,
      },
    });

    log.info(
      `MongoDB Connected: ${JSON.stringify({ host: conn.connection.host })}`
    );
  } catch (error) {
    log.error(`DB Connection Error: ${error.message}`);
    process.exit(1);
  }
  return { conn };
};

export default connectDB;
