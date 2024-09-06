import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { generateKeyPairSync } from "crypto";
import { log } from "../../loggers/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const keysDir = join(__dirname, "kms");
const publicKeyFile = join(keysDir, "public.pem");
const privateKeyFile = join(keysDir, "private.pem");

const generateAndSaveKeys = async () => {
  const { publicKey, privateKey } = generateKeyPairSync("rsa", {
    modulusLength: 512,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });

  try {
    if (!existsSync(keysDir)) {
      mkdirSync(keysDir);
    }

    writeFileSync(publicKeyFile, publicKey);
    writeFileSync(privateKeyFile, privateKey);
  } catch (error) {
    log.error(`Error: ${error.message}`);
    process.exit(1);
  }

  return { publicKey, privateKey };
};

const readKeys = async () => {
  let publicKey;
  let privateKey;
  try {
    publicKey = readFileSync(publicKeyFile, "utf8");
    privateKey = readFileSync(privateKeyFile, "utf8");
  } catch (err) {
    log.error(`Error: ${err.message}`);
    process.exit(1);
  }

  return { publicKey, privateKey };
};

const initializeKeys = async () => {
  if (!existsSync(publicKeyFile) || !existsSync(privateKeyFile)) {
    log.error("Keys Not Found. Generating new keys");
    return await generateAndSaveKeys();
  }

  log.warn("Keys Found. Reading keys");
  return await readKeys();
};

export { initializeKeys };
