import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toggleNavbar, setActivePage } from '../redux/slices/navbar_slice';

function Navbar() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.navbar.isOpen);
  const activePage = useSelector((state) => state.navbar.activePage);

  const navLinks = [
    { name: 'Home', path: '/', key: 'home' },
    { name: 'About', path: '/about', key: 'about' },
    { name: 'My Places', path: '/myPlaces', key: 'myPlaces' },
    { name: 'Contact', path: '/contact', key: 'contact' },
  ];

  return (
    <nav className="bg-gray-900 text-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="shrink-0">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-blue-500">My</span>Logo
            </h3>
          </div>

          {/* Links + Login grouped together */}
          <div className="hidden sm:flex items-center space-x-6 mr-6 gap-4"> 
            {navLinks.map(link => (
              <Link
                key={link.key}
                to={link.path}
                onClick={() => dispatch(setActivePage(link.key))}
                className={`transition-colors duration-200 font-medium ${
                  activePage === link.key
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Login button with margin-right */}
            <Link
              to="/login"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-200 mr-4"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center padding-right-4">
            <button
              onClick={() => dispatch(toggleNavbar())}
              className="text-gray-300 hover:text-blue-400 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-gray-800 px-4 pb-4 space-y-2">
          {navLinks.map(link => (
            <Link
              key={link.key}
              to={link.path}
              onClick={() => {
                dispatch(setActivePage(link.key));
                dispatch(toggleNavbar());
              }}
              className={`block py-2 rounded-md transition-colors duration-200 ${
                activePage === link.key
                  ? 'text-blue-400 bg-gray-700'
                  : 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => dispatch(toggleNavbar())}
            className="block py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;