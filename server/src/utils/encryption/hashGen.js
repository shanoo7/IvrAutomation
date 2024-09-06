import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createHash, randomBytes } from "crypto";
import { log } from "../../loggers/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const hashDir = join(__dirname, "hashes");

const hashAndSave = async () => {
  const hash = createHash("sha256")
    .update(randomBytes(16).toString("hex"))
    .digest("hex");

  try {
    if (!existsSync(hashDir)) {
      mkdirSync(hashDir);
    }

    writeFileSync(join(hashDir, `session_secret.key`), hash);
  } catch (error) {
    log.error(`Error: ${error.message}`);
    throw new Error(`Failed to save hash: ${error.message}`);
  }

  return hash;
};

const readHash = async () => {
  let data;
  try {
    data = readFileSync(join(hashDir, `session_secret.key`), "utf8");
  } catch (err) {
    log.error(`Error: ${err.message}`);
    process.exit(1);
  }

  return data;
};

const initializeHash = async () => {
  if (!existsSync(hashDir)) {
    log.error("Hash Not Found. Generating new hash");
    const hash = await hashAndSave();
    return hash;
  }

	log.warn("Hash Found. Reading Hash");
  return await readHash();
};

export { initializeHash, readHash };
