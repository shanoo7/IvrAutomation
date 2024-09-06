import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../Admin/utils/data/coursesData';

const CourseDescription = () => {
  const { id } = useParams();
  const course = coursesData.find((course) => course._id === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div className="bg-white max-w-2xl mx-auto p-6 rounded shadow-lg">
        <img
          src={course.imgSrc}
          alt={course.title}
          className="w-full h-auto mb-4 object-cover border border-gray-400 rounded"
        />
        <h1 className="text-3xl font-bold my-4 text-purple-600">{course.title}</h1>
        <p className="text-gray-700">{course.description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-green-600 font-bold">
            Price: {course.price === 0 ? 'Free' : `${course.price} Rs`}
          </p>
          <Link
            to={`/course/${course._id}/enroll`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
