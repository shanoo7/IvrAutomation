//! ⚠ DANGER ZONE
import { log } from "../loggers/index.js";
import { initializeKeys } from "../utils/encryption/keyGen.js";

const { publicKey, privateKey } = await initializeKeys();

const kms = async (req, res, next) => {

  req.publicKey = publicKey;

  res.setHeader("X-RSA-Encryption", true);

  log.warn("Publis key set in the `request` object");

  next();
};

export { kms };
