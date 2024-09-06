// server.js (or your relevant file)
import FormSubmission from "../models/LopSchema.js";

// Route to handle form submission
export const LopFormSubmit =  async (req, res) => {
  const {
    email,
    fullName,
    contactNo,
    gender,
    collegeName,
    courseName,
    courseStatus,
    employeeId,
    nameOfSenior,
    previousJobRole,
    positionPromotedTo,
    internshipDuration,
    joiningDate,
    endDate,
    todaysDate
  } = req.body;

  // Create a new form submission instance
  const formSubmission = new FormSubmission({
    email,
    fullName,
    contactNo,
    gender,
    collegeName,
    courseName,
    courseStatus,
    employeeId,
    nameOfSenior,
    previousJobRole,
    positionPromotedTo,
    internshipDuration,
    joiningDate,
    endDate,
    todaysDate
  });

  // Save to database
  try {
    await formSubmission.save();
    res.status(201).send('Form submitted successfully.');
  } catch (error) {
    res.status(500).send('Error submitting form: ' + error.message);
  }
};

