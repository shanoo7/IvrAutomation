import express from "express";
import dotenv from "dotenv";
import { loggerMiddleware } from "./loggers/config/morgan.logger.js";
import { log } from "./loggers/index.js";
import { connectDB, connectRedis } from "./db/index.js";
import RedisStore from "connect-redis";
import session from "express-session";
import { kms } from "./middlewares/kms.middleware.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { hashHandler } from "./middlewares/hash.middleware.js";
import { readHash } from "./utils/encryption/hashGen.js";
import { corsOptionsDelegate } from "./utils/cors.js";
import cors from "cors";
// import lorRoutes from './routes/LorRoutes.js'; // Import the LOR routes
import LorRoutes from './routes/LorRoutes.js'
import OfferRoutes from './routes/offerRoutes.js'

import LopRoutes from "./routes/LopRoute.js"
import requestRoutes from "./routes/ReqRoutes.js";
 `master`

dotenv.config();

const app = express();

//* DATABASE CONNECTION
const { conn: DB } = await connectDB();
const { client: REDIS } = await connectRedis();

//* CORS ALLOWED ORIGINS
export const allowlist = ["http://localhost:3000"];

//* MIDDLEWARES
app.use(loggerMiddleware);
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(kms); //! Key Management Service
app.use(hashHandler); //! Hashing Middleware

const SECRET = process.env.SESSION_SECRET || (await readHash()); //! Session Secret

app.use(cors(corsOptionsDelegate))

//* SESSION
app.use(
  session({
    secret: SECRET,
    name: "session.sid",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    store: new RedisStore({
      client: REDIS,
      prefix: "session:",
    }),
  })
);

//* ROUTES
app.get("/", (req, res) => {
  res.send("hello");
});

// Add LOR routes
app.use("/api/lor", LorRoutes);
app.use("/api/offer", OfferRoutes);
app.use("/api/lop", LopRoutes)
app.use('/api', requestRoutes);

app.listen(process.env.PORT || 5500, () => {
  log.info(`Server is running on port ${process.env.PORT || 5500}`);
});

process.on("uncaughtException", err => {
  log.error(`Logged Error: ${err}`);
  DB.disconnect();
  REDIS.quit();
  log.error("Redis Disconnected");
  log.error("MongoDB Disconnected");
});
