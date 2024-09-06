import express from 'express';
import { createLOR } from "../controllers/LorController.js";

const router = express.Router();

// POST route to create a new LOR
router.post('/create', createLOR);

export default router;
