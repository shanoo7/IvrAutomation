import LORRequest from '../models/LORSchema.js';
import offerRequest from "../models/offerSchema.js"
import FormSubmission from "../models/LopSchema.js";
import generatePDF from '../pdfGenerator.js';
import sendEmail from "../emailSender.js"
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// import OfferLetterRequest from '../models/OfferLetterRequest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pdfDir = path.join(__dirname, 'certificates');

// Ensure the certificates directory exists
if (!fs.existsSync(pdfDir)) {
  fs.mkdirSync(pdfDir, { recursive: true });
}

// Function to get LOR requests
export const getLORRequests = async (req, res) => {
  try {
    const lorRequests = await LORRequest.find();
    res.status(200).json(lorRequests);
    console.log(lorRequests);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get LOP requests
export const getLOPRequests = async (req, res) => {
  try {
    const lopRequests = await FormSubmission.find();
    res.status(200).json(lopRequests);
    console.log(lopRequests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get Offer Letter requests
export const getOfferLetterRequests = async (req, res) => {
  try {
    const offerLetterRequests = await offerRequest.find();
    res.status(200).json(offerLetterRequests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Function to delete a request (decline)
export const deleteRequest = async (req, res) => {
    const { type, id } = req.params;
  
    try {
      let result;
  
      switch (type) {
        case 'lor':
          result = await LORRequest.findByIdAndDelete(id);
          break;
        case 'lop':
          result = await FormSubmission.findByIdAndDelete(id);
          break;
        // case 'offer-letter':
        //   result = await OfferLetterRequest.findByIdAndDelete(id);
        //   break;
        default:
          return res.status(400).json({ message: 'Invalid request type' });
      }
  
      if (!result) {
        return res.status(404).json({ message: 'Request not found' });
      }
  
      res.status(200).json({ message: 'Request deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  // form acceptance from admin

  export const acceptRequest = async (req, res) => {
    const { formId, formType } = req.body;
  
    let formDetails;
    try {
      if (formType === "formSubmission") {
        formDetails = await FormSubmission.findById(formId);
      } else if (formType === "lor") {
        formDetails = await LORRequest.findById(formId);
      } else {
        return res.status(400).send("Invalid form type");
      }
  
      if (!formDetails) {
        return res.status(404).send("Form not found");
      }
  
      // Generate PDF
      const pdfPath = path.join(__dirname, 'certificates', `${formId}.pdf`);
      await generatePDF(formDetails, pdfPath, formType); // Pass formType here
  
      // Ensure PDF was created before sending email
      if (!fs.existsSync(pdfPath)) {
        return res.status(500).send('Error: PDF file not found');
      }
  
      // Prepare email details
      const emailText = 'Dear user, attached is your certificate. Please download and share it.';
      const recipientEmail = formDetails.email; // Get the recipient's email from form details
  
      // Send email
      await sendEmail(recipientEmail, 'Your Certificate', emailText, pdfPath);
      res.status(200).send('Certificate sent successfully');
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).send('Error processing request');
    }
  };
  
