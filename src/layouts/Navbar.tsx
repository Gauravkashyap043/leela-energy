import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-green-600">
            Leela Energy Solutions
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-green-600">
              Home
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
