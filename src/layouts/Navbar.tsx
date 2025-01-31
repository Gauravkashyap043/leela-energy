import React from "react";
import logo from "../assets/leela complete logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="w-56 h-full">
            <Link to="/" className="text-2xl font-bold text-green-600">
              <img
                src={logo}
                alt="Leela Energy Solutions"
                className="h-full object-contain"
              />
            </Link>
          </div>
          <div className="flex space-x-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-gray-600 hover:text-green-600 ${isActive ? 'text-green-600 font-semibold' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-600 hover:text-green-600 ${isActive ? 'text-green-600 font-semibold' : ''
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-gray-600 hover:text-green-600 ${isActive ? 'text-green-600 font-semibold' : ''
                }`
              }
            >
              Projects
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;