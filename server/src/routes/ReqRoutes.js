import express from 'express';
import { getLORRequests, getLOPRequests,deleteRequest, acceptRequest ,getOfferLetterRequests} from '../controllers/ReqController.js';

const router = express.Router();

// Route to get LOR requests
router.get('/lor-requests', getLORRequests);

// Route to get LOP requests
router.get('/lop-requests', getLOPRequests);

// Route to get Offer Letter requests
router.get('/offer-letter-requests', getOfferLetterRequests);

// Route to delete a request (decline)
router.delete('/requests/:type/:id', deleteRequest);

// Route to accept a request (acceptance of form)
router.post("/acceptForm", acceptRequest )

export default router;

