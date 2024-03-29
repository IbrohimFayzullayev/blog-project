import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4">
      <div className="w-[1200px] mx-auto">
        <nav className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold">Ibrohim's Portfolio</span>
          </div>
          <div>
            <ul className="flex space-x-6">
              <li>
                <a href="#projects" className="hover:text-gray-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
