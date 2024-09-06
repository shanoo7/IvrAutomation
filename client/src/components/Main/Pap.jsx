
import React from "react";
import { Link } from "react-router-dom";
import Agreement from "../Admin/Agreement";

const Pap = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-6 text-center mb-10 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Pay After Placement
        </h1>
        <p className="mt-4 text-xl text-gray-600 p-4">
          Transform Your Career with Confidence
        </p>
      </div>

      {/* What is the Pay After Placement Program Section */}
      <div className="mt-10 max-w-5xl mx-6 mb-10 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg">
          <div className="flex flex-col lg:flex-row px-4 py-5 sm:px-6">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl leading-6 font-medium text-gray-900">
                What is the Pay After Placement Program?
              </h2>
              <p className="mt-4 text-lg text-gray-600 p-4">
                Our Pay After Placement Program is a unique offering that allows
                you to focus on your education and career development without the
                burden of upfront tuition fees. Instead, you pay for the program
                only after you secure a job. This ensures that you can fully
                commit to your studies and job search, knowing that we are
                invested in your success.
              </p>
            </div>
            {/* Image */}
            <div className="mt-6 lg:mt-0 lg:ml-8 lg:w-1/2 flex justify-center items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5n7TxHYPT0TSbNKYyBkW_M9yjYP5tlHsk5w&s"
                alt="Pay After Placement Illustration"
                className="w-full h-auto max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="max-w-5xl mx-6 mb-10 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg">
          <div className="flex flex-col lg:flex-row px-4 py-5 sm:px-6">
            {/* Text Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl leading-6 font-medium text-gray-900">
                How it Works
              </h2>
              <ol className="mt-4 list-decimal list-inside space-y-4 text-lg text-gray-600">
                <li className="p-4">
                  <span className="font-semibold">Enroll in the Program:</span> Begin by applying to our comprehensive career training program. Our courses are designed by industry experts and tailored to meet the demands of today's job market.
                </li>
                <li className="p-4">
                  <span className="font-semibold">Career Services Support:</span> Benefit from personalized career coaching, resume workshops, interview preparation, and exclusive job placement services. Our dedicated team works tirelessly to connect you with top employers.
                </li>
                <li className="p-4">
                  <span className="font-semibold">Learn and Grow:</span> Immerse yourself in our intensive curriculum that includes hands-on projects, mentorship, and real-world scenarios. Develop the technical skills and soft skills needed to excel in your chosen field.
                </li>
                <li className="p-4">
                  <span className="font-semibold">Secure Your Dream Job:</span> Once you complete the program and land a job, you will start making payments based on a percentage of your salary. This ensures that you only pay once you have the means to do so.
                </li>
              </ol>
            </div>
            {/* Image */}
            <div className="mt-6 lg:mt-0 lg:ml-8 lg:w-1/2 flex justify-center items-center">
              <img
                src="https://www.entrepreneurshipnetwork.net/pay.jpg"
                alt="How it Works Illustration"
                className="w-full h-auto max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Pay After Placement Section */}
      <div className="max-w-5xl mx-6 mb-10 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-3xl leading-6 font-medium text-gray-900">
              Why Choose Pay After Placement?
            </h2>
            <ul className="mt-4 list-disc list-inside space-y-4 text-lg text-gray-600">
              <li className="p-4">
                <span className="font-semibold">No Upfront Costs:</span> Focus on your studies without worrying
                about tuition fees until you are employed.
              </li>
              <li className="p-4">
                <span className="font-semibold">Career-Focused Training:</span> Our curriculum is designed to
                equip you with in-demand skills that employers are looking
                for.
              </li>
              <li className="p-4">
                <span className="font-semibold">Job Placement Assistance:</span> Gain access to our extensive
                network of hiring partners and receive support in your job
                search.
              </li>
              <li className="p-4">
                <span className="font-semibold">Risk-Free Education:</span> Our success is tied to yours. We only
                succeed when you do.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Who Can Apply Section */}
      <div className="max-w-5xl mx-6 mb-10 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-3xl leading-6 font-medium text-gray-900">
              Who Can Apply?
            </h2>
            <p className="mt-4 text-lg text-gray-600 p-4">
              The Pay After Placement Program is ideal for motivated
              individuals who are ready to take charge of their careers.
              Whether you are a recent graduate, a career changer, or
              someone looking to upskill, our program is tailored to help
              you achieve your professional goals.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-5xl mx-6 mb-10 text-center transition-transform duration-300 ease-in-out transform hover:scale-105">
        <p className="text-xl text-gray-600 p-4">
          Ready to take the first step towards a brighter future?
        </p>
        <Link 
          to="/Admin/Agreement"
          className="mt-4 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Enroll Now
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Pap;
