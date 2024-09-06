import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Accept from "./utils/img/Accept.svg";
import Completed from "./utils/img/completed.svg";
import document from "./utils/img/document.svg";

const Admin = () => {
  return (
    <>
      {/* Hero section */}
      <div className="bg-black">
        <div className="max-w-[800px] mt-[-95px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-purple-400 font-bold p-2 text-lg sm:text-xl"
          >
            Admin panel overview
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold md:py-6 text-white"
          >
            Monitor The Data Here.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center items-center flex-wrap"
          >
            <p className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Structure data of
            </p>
            <ReactTyped
              strings={[" Students", " Mentors", " Admins"]}
              typeSpeed={120}
              backSpeed={140}
              loop
              className="text-purple-400 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold pl-2 sm:pl-4"
            />
          </motion.div>
          <a href="#Admin">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="bg-black border-2 border-purple-400 rounded-md font-medium my-6 mx-auto px-4 py-2 text-white hover:bg-purple-400 hover:border-white hover:text-black sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5"
            >
              Scroll down
            </motion.button>
          </a>
        </div>
      </div>

      {/* Admin panel Route button section */}
      <div
        className="w-full flex flex-col items-center justify-center bg-black py-16 px-4"
        id="Admin"
      >
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <img className="mx-auto my-4 w-3/6 h-4/6" src={Accept} alt="Accept" />
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-purple-400 font-bold">
              DATA ANALYTICS DASHBOARD
            </p>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold py-2">
              Manage Data Accept & Reject
            </h1>
            <p className="text-white">
              This page allows administrators to review and manage student
              applications, with options to accept or reject each student based
              on their eligibility and qualifications.
            </p>
            <Link
              to="/Admin/AcceptancePage"
              className="bg-purple-400 text-black rounded-md font-medium my-6 mx-auto md:mx-0 py-2 px-4 text-center sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 w-1/2"
            >
              AcceptancePage
            </Link>
          </div>
        </div>

        {/* 2nd */}
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            className="mx-auto my-4 w-3/6 h-3/5"
            src={Completed}
            alt="Completed"
          />
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-purple-400 font-bold">STUDENT DATA ANALYTICS</p>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold py-2">
              Student Data Showcase
            </h1>
            <p className="text-white">
              This page displays the list of students whose applications have
              been either accepted or rejected, providing a clear overview of
              their status and any relevant details.
            </p>
            <Link
              to="/Admin/StudentData"
              className="bg-purple-400 text-black rounded-md font-medium my-6 mx-auto md:mx-0 py-2 px-4 text-center sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 w-1/2"
            >
              Student Data
            </Link>
          </div>
        </div>

        {/* 3rd */}
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            className="mx-auto my-4 w-3/6 h-5/6"
            src={document}
            alt="Document"
          />
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-purple-400 font-bold">DOCUMENT DASHBOARD</p>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold py-2">
              Document upload and review
            </h1>
            <p className="text-white">
              This page enables students to upload required documents for
              verification and review, ensuring that all necessary files are
              submitted for their application process.
            </p>
            <Link
              to="/Admin/DocumentUpload"
              className="bg-purple-400 text-black rounded-md font-medium my-6 mx-auto md:mx-0 py-2 px-4 text-center sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 w-1/2"
            >
              DocumentUpload
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
