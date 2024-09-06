import express from 'express';
import {LopFormSubmit} from "../controllers/LopController.js"

const router = express.Router()

// form submission
router.post("/submit-form", LopFormSubmit)


export default router;
