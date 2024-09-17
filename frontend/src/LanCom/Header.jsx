// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">E-Learning</div>
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => navigate('/signin')}
              className="p-2 bg-blue-700 rounded hover:bg-blue-800 transition-colors"
            >
              Login
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/signup')}
              className="p-2 bg-blue-700 rounded hover:bg-blue-800 transition-colors"
            >
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
