// routes/offerRoutes.js
import express from 'express';
import { createOffer } from '../controllers/offerController.js';

const router = express.Router()


router.post('/create', createOffer);


export default router;
