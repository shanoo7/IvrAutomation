import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { coursesData } from '../Admin/utils/data/coursesData.jsx';

const EnrollForm = () => {
  const { id } = useParams();
  const course = coursesData.find((course) => course._id === id);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    employeeId: '',
    collegeName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Add validation logic here if needed
    navigate('/Agreement');
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white max-w-2xl w-full p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold my-4 text-purple-600">Enroll in {course.title}</h1>
        <form className="space-y-4" onSubmit={handleNext}>
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded"
              placeholder="Enter your Full Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded"
              placeholder="Enter your Email ID"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Employee ID</label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded"
              placeholder="Enter your Employee ID"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Course</label>
            <input
              type="text"
              value={course.title}
              readOnly
              className="w-full p-2 border border-gray-400 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">College Name</label>
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded"
              placeholder="Enter your college name"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollForm;
