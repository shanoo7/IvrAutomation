import React from "react";
import "tailwindcss/tailwind.css";
import image from "../../assets/ten_cover.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 bg-gray-985 text-white">
      <img
        src={image}
        alt="Hero Image"
        className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6"
      />
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4 text-purple-400">Empower Your Future with TEN</h1>
        <p className="mb-4">
          Welcome to The Entrepreneurship Network (TEN), your gateway to world-class business education. At TEN, we empower learners globally by offering accessible, engaging, and superior educational materials designed to help you achieve your entrepreneurial aspirations.
        </p>
        <h2 className="text-2xl font-semibold mt-4 mb-2 text-purple-400">Why Choose TEN ?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <span className="font-semibold text-gray-100">Expert-Led Courses:</span> Learn from top educators, subject matter experts, and industry leaders.
          </li>
          <li>
            <span className="font-semibold text-gray-100">Comprehensive Curriculum:</span> From startup fundamentals to advanced strategies.
          </li>
          <li>
            <span className="font-semibold text-gray-100">Innovative Learning Atmosphere:</span> Foster creativity, critical thinking, and growth.
          </li>
          <li>
            <span className="font-semibold text-gray-100">Supportive Community:</span> Connect, collaborate, and inspire with peers.
          </li>
          <li>
            <span className="font-semibold text-gray-100">Lifelong Learning:</span> Stay ahead in the rapidly evolving business landscape.
          </li>
        </ul>
        <p className="mb-4">
          We equip entrepreneurs and professionals with essential skills and knowledge to excel in a competitive world. Our innovative learning fosters growth and critical thinking.
        </p>
        <p>
          Join TEN today and unlock your potential, making meaningful contributions to your community and the world. Transform your ambitions into success with The Entrepreneurship Network!
        </p>
      </div>
    </div>
  );
};

export default Hero;