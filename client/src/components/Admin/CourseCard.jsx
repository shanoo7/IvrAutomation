import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-lg bg-white text-black rounded overflow-hidden shadow-lg m-4">
      <div className="p-4">
        <img
          className="w-full h-48 object-cover border border-gray-400 rounded"
          src={course.imgSrc}
          alt={course.title}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-purple-600">{course.title}</div>
        <p className="text-gray-800 text-base">
          {course.description.substring(0, 100)}...
        </p>
      </div>
      <div className="px-6 pb-4 flex justify-between items-center">
        <Link
          to={`/course/${course._id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get this Course
        </Link>
        <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
          {course.price === 0 ? 'Free' : `${course.price} Rs`}
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
