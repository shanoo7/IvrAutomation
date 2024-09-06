import mongoose from "mongoose"

const formSubmissionSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true 
    },

  fullName: { 
    type: String, 
    required: true
    },
  
  contactNo: { type: String, required: true },

  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },

  collegeName: { type: String },

  courseName: { type: String },

  courseStatus: { 
    type: String, 
    enum: ['Pursuing', 'Completed'], // Updated to include 'Pursuing' and 'Completed'
    required: true 
  },

  employeeId: { type: String },

  nameOfSenior: { type: String },

  previousJobRole: { 
    type: String, 
    enum: ['Junior Developer', 'Senior Developer', 'Team Lead', 'Manager'], // Added roles
    required: true 
  },

  positionPromotedTo: { 
    type: String, 
    enum: ['HR Associate', 'Senior Associate', 'Team Lead', 'Manager'], // Added positions
    required: true 
  },

  internshipDuration: { 
    type: String, 
    enum: ['4 months', '5 months'], // Added durations
    required: true 
  },

  joiningDate: { type: Date },

  endDate: { type: Date },

  todaysDate: { type: Date, default: Date.now },

  status: { type: String, default: 'pending' },

  certificate: { type: String },
  
  createdAt: { type: Date, default: Date.now }
});


const FormSubmission = mongoose.model('FormSubmission', formSubmissionSchema);
export default FormSubmission;
