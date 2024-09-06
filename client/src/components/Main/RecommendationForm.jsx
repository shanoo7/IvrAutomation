import { useState } from "react";

const RecommendationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullname: '',
    gender: '',
    collegeName: '',
    courseName: '',
    courseStatus: '',
    employeeID: '',
    seniorName: '',
    seniorContactNo: '',
    mobileNumber: '',
    internshipRole: '',
    positionWorked: '',
    duration: '',
    joiningDate: '',
    endDate: '',
    experienceRating: '',
  });


  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (isSubmitted) return; // Prevent changes if the form is submitted
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-white shadow-lg rounded-md">
      <div className="text-3xl font-bold mb-4 text-gray-600 text-center">Letter of Recommendation</div>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} disabled={isSubmitted} placeholder="Enter your email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />

        </div>


        <div>
          <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name:</label>
          <input type="text" id="fullname" name="fullname" onChange={handleChange} disabled={isSubmitted} placeholder="Enter your full name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender:</label>
          <select id="gender" name="gender" onChange={handleChange} disabled={isSubmitted} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Prefer not to say</option>
          </select>
        </div>

        <div>
          <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">College Name:</label>
          <input type="text" id="collegeName" name="collegeName" onChange={handleChange} disabled={isSubmitted} placeholder="Enter your college name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">Course Name:</label>
          <input type="text" id="courseName" name="courseName" onChange={handleChange} disabled={isSubmitted} placeholder="Enter your course name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="courseStatus" className="block text-sm font-medium text-gray-700">Course Status:</label>
          <select id="courseStatus" name="courseStatus" onChange={handleChange} disabled={isSubmitted} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select Course Status</option>
            <option value="pursuing">Pursuing</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label htmlFor="employeeID" className="block text-sm font-medium text-gray-700">Employee ID:</label>
          <input type="text" id="employeeID" name="employeeID" onChange={handleChange} disabled={isSubmitted} placeholder="Enter your Employee ID" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="seniorName" className="block text-sm font-medium text-gray-700">Name Of Your Senior Under Whom You have Worked?</label>
          <input type="text" id="seniorName" name="seniorName" onChange={handleChange} disabled={isSubmitted} placeholder="Enter Senior's Name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="seniorContactNo" className="block text-sm font-medium text-gray-700">Contact No. Of Your Senior Under Whom You have Worked: </label>
          <input type="tel" id="seniorContactNo" name="seniorContactNo" onChange={handleChange} disabled={isSubmitted} placeholder="Your answer" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number:</label>
          <input type="tel" id="mobileNumber" name="mobileNumber" onChange={handleChange} disabled={isSubmitted} placeholder="Your answer" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="internshipRole" className="block text-sm font-medium text-gray-700">Internship Role:</label>
          <select id="internshipRole" name="internshipRole" onChange={handleChange} disabled={isSubmitted} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select Role</option>
            <option value="Human Resource">Human Resource</option>
            <option value="Sales">Sales</option>
            <option value="Scrum Master">Scrum Master</option>
            <option value="General Management">General Management</option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="Social Media Marketing">Social Media Marketing</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Other">Other</option>
          </select>
          {formData.internshipRole === "Other" && (
            <input type="text" id="otherRoleInput" name="internshipRoleOther" disabled={isSubmitted} onChange={(e) => setFormData({ ...formData, internshipRoleOther: e.target.value })} placeholder="Please specify" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
          )}
        </div>

        <div>
          <label htmlFor="positionWorked" className="block text-sm font-medium text-gray-700">Position You Have Worked:</label>
          <select id="positionWorked" name="positionWorked" disabled={isSubmitted} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select Position</option>
            <option value="Associate">Associate</option>
            <option value="Senior Associate">Senior Associate</option>
            <option value="Assistant Manager">Assistant Manager</option>
            <option value="Deputy Manager">Deputy Manager</option>
            <option value="Manager">Manager</option>
            <option value="Senior Manager">Senior Manager</option>
            <option value="Executive">Executive</option>
            <option value="Other">Other</option>
          </select>
          {formData.positionWorked === "Other" && (
            <input type="text" id="otherPositionDetail" name="positionWorkedOther" disabled={isSubmitted} onChange={(e) => setFormData({ ...formData, positionWorkedOther: e.target.value })} placeholder="Please specify" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
          )}
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Internship Duration:</label>
          <select id="duration" name="duration" onChange={handleChange} disabled={isSubmitted} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select Duration</option>
            <option value="3 Months">3 Months</option>
            <option value="6 Months">6 Months</option>
            <option value="Other">Other</option>
          </select>
          {formData.duration === "Other" && (
            <input type="text" id="customDuration" name="durationDetails" disabled={isSubmitted} onChange={(e) => setFormData({ ...formData, durationDetails: e.target.value })} placeholder="Specify Duration" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
          )}
        </div>

        <div>
          <label htmlFor="joiningDate" className="block text-sm font-medium text-gray-700">Joining Date:</label>
          <input type="date" id="joiningDate" name="joiningDate" disabled={isSubmitted} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date:</label>
          <input type="date" id="endDate" name="endDate" disabled={isSubmitted} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="experienceRating" className="block text-sm font-medium text-gray-700">How was your experience in TEN? (out of 5)</label>
          <select id="experienceRating" name="experienceRating" disabled={isSubmitted} onChange={handleChange} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Rate Your Experience</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div>
          <label htmlFor="todayDate" className="block text-sm font-medium text-gray-700">Today Date:</label>
          <input type="date" id="todayDate" disabled={isSubmitted} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={isSubmitted}
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default RecommendationForm;
