import React, { useState } from "react";

const OfferLetterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    empId: '',
    fullName: '',
    date: '',
    college: '',
    duration: '',
    courseApplied: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (isSubmitted) return; // Prevent changes if the form is submitted
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
  }

  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-white shadow-lg rounded-md">
      <div className="text-3xl font-bold mb-4 text-center text-gray-600">Offer Letter</div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} disabled={isSubmitted} required placeholder="enter your email" className="mt-1 block w-full border 
          border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone No.:</label>
          <input type="tel" id="phone" name="phone" onChange={handleChange} disabled={isSubmitted} placeholder="enter your phone no"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="empId" className="block text-sm font-medium text-gray-700">Employee ID:</label>
          <input type="text" id="empId" name="empId" onChange={handleChange} disabled={isSubmitted} placeholder="enter your employee id"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name:</label>
          <input type="text" id="fullName" name="fullName" onChange={handleChange} disabled={isSubmitted} placeholder="enter your full name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Joining Date:</label>
          <input type="date" id="date" name="date" onChange={handleChange} disabled={isSubmitted}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label htmlFor="college" className="block text-sm font-medium text-gray-700">University/College/School:</label>
          <input type="text" id="college" name="college" onChange={handleChange} disabled={isSubmitted} placeholder="enter your University/College/School"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Internship Duration:</label>
          <div>
            <label htmlFor="duration1" className="mt-1 block w-[50%]">
              <input
                type="radio"
                value="3 Months"
                id="duration1"
                name="duration"
                onChange={handleChange}
                disabled={isSubmitted}
                className="border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 "
              />
              <span className="ml-2"> 3 Months</span>
            </label>
            <label htmlFor="duration2" className="mt-1 block w-full">
              <input
                type="radio"
                value="More than 3 Months"
                id="duration2"
                name="duration"
                onChange={handleChange}
                disabled={isSubmitted}
                className="border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <span className="ml-2">More than 3 Months</span>
            </label>


          </div>

        </div>

        <div>
          <label htmlFor="courseApplied" className="block text-sm font-medium text-gray-700">Profile you have applied for:</label>
          <select id='courseApplied' name="courseApplied" onChange={handleChange} disabled={isSubmitted}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select</option>
            <option value='hr'>Human Resources</option>
            <option value='mongo'>Mongo DB & QA Tester</option>
            <option value='scrum'>Scrum Master</option>
            <option value='graphic'>Graphic Designing</option>
            <option value='digital'>Digital Marketing</option>
            <option value="mern">Mern Stack Developer</option>
            <option value='mean'>Mean Stack Developer</option>
            <option value='content'>Content Writer</option>
            <option value='business'>Business Analyst</option>
            <option value='finance'>Finance</option>
            <option value='react'>React JS</option>
            <option value='Other'>Other</option>
          </select>
          {formData.courseApplied === "Other" && (
            <input type="text" id="otherCourseDetail" name="otherCourseApplied" disabled={isSubmitted} onChange={(e) => setFormData({ ...formData, courseApplied: e.target.value })} placeholder="Please specify" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500" />
          )}
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

export default OfferLetterPage;

