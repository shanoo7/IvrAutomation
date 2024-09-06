import mongoose from 'mongoose';

const OfferSchema = new mongoose.Schema({
    
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    PhoneNumber: {
        type: String,
        required: true,
    },
    EmployeeId: {
        type: String,
        required: true,
        unique: true
    },
    FullName: {
        type: String,
        required: true
    },
    JoiningDate: {
        type: Date,
        required: true
    },
    University: {
        type: String,
        required: true
    },
    InternshipDuration: {
        type: String,
        required: true
    },
    AppliedProfile: {
        type: String,
        required: true
    }
});

const Offer = mongoose.model('Offer', OfferSchema);

export default Offer;
