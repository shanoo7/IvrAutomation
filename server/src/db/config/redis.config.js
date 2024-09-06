import dotenv from "dotenv";
import { createClient } from "redis";
import { log } from "../../loggers/index.js";

dotenv.config();

export const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT),
  },
  // password: process.env.REDIS_PASSWORD,
});

export const connectRedis = async () => {
  let client;
  try {
    client = await redisClient.connect();
    log.info(
      `Redis Connected: ${JSON.stringify({ host: process.env.REDIS_HOST })}`
    );
  } catch (err) {
    log.error(`Redis Error : ${err}`);
    process.exit(1);
  }

  return { client };
};

export default connectRedis;
