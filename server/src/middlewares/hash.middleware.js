import { initializeHash } from "../utils/encryption/hashGen.js";
import { asyncHandler } from "../utils/asyncHandler.js";

await initializeHash();

export const hashHandler = asyncHandler(async (req, res, next) => {
	res.setHeader("X-Hashed", true);
	next();
})