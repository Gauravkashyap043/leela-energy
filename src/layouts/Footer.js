import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Leela Energy Solutions</h3>
          <p className="text-gray-400">
            Your trusted solar energy partner since 2020
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-green-500">
                Home
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-500">
                Contact
              </a>
            </li>
            <li>
              <a href="#financing" className="hover:text-green-500">
                Financing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-400">contact@leelaenergy.com</p>
          <p className="text-gray-400">+91 98765 43210</p>
          <p className="text-gray-400 mt-2">
            123 Solar Street, Green City, IN 560001
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-green-500">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>© 2024 Leela Energy Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
