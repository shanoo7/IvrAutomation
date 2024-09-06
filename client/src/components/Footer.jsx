import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800  text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Company</h4>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/press">Press</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Resources</h4>
            <ul>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/documentation">Documentation</Link>
              </li>
              <li>
                <Link to="/community">Community</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Support</h4>
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/help-center">Help Center</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <ul className="flex">
              <li className="mr-4">
                <Link to="https://x.com/we_are_ten?lang=en">
                  <i className="fab fa-twitter"><FaTwitter/></i>
                </Link>
              </li>
              <li className="mr-4">
                <Link to="https://www.facebook.com/p/The-Entrepreneurship-Network-100063983912464/">
                  <i className="fab fa-facebook"><FaFacebook/></i>
                </Link>
              </li>
              <li className="mr-4">
                <Link to="https://www.instagram.com/theentrepreneurshipnetwork?igsh=MTcxYWJxazA1d2Zkdg==">
                  <i className="fab fa-instagram"><FaInstagram/></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/company/the-entrepreneurship-network/?originalSubdomain=in">
                  <i className="fab fa-linkedin"><FaLinkedin/></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Tan-Automation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
