import LOR from "../models/LORSchema.js";

// Controller function to handle LOR requests
export const createLOR = async (req, res) => {
  try {
    // Extract data from the request body
    const {
      email,
      fullName,
      gender,
      collegeName,
      courseName,
      courseStatus,
      employeeID,
      seniorName,
      seniorContactNo,
      mobileNumber,
      internshipRole,
      position,
      internshipDuration,
      joiningDate,
      endDate,
      experienceRating,
      todayDate,
    } = req.body;

    // Create a new LOR document
    const newLOR = new LOR({
      email,
      fullName,
      gender,
      collegeName,
      courseName,
      courseStatus,
      employeeID,
      seniorName,
      seniorContactNo,
      mobileNumber,
      internshipRole,
      position,
      internshipDuration,
      joiningDate,
      endDate,
      experienceRating,
      todayDate,
    });

    // Save the document to the database
    await newLOR.save();

    // Send a success response
    res.status(201).json({ message: "LOR created successfullly", data: newLOR });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Error creating LOR request", error });
  }
};
