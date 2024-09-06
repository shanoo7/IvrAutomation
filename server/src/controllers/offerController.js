// controllers/offerController.js
import Offer from '../models/offerSchema.js';

// Create a new offer
export const createOffer = async (req, res) => {
    try{
        const{
            Email,
            PhoneNumber,
            EmployeeId,
            FullName,
            JoiningDate,
            University,
            InternshipDuration,
            AppliedProfile} = req.body;
        
            const newOffer = new Offer({
            Email,
            PhoneNumber,
            EmployeeId,
            FullName,
            JoiningDate,
            University,
            InternshipDuration,
            AppliedProfile
            });
        
            await newOffer.save();
        
            res.status(201).json({ message: "Offer created successfullly", data: newOffer });
    }catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ message: "Error creating Offer request", error });
    }
   

};

