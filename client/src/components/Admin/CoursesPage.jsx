import React from 'react';
import { coursesData } from './utils/data/coursesData';
import CourseCard from './CourseCard';

const CoursesPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-600">
        Let the journey of self-learning begin
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {coursesData.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
