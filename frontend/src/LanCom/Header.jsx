import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
  // Check if user is authenticated (assuming you store a token or flag in localStorage)
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  const handleLogout = () => {
    // Clear the authentication data and redirect to the landing page
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem("token");
    navigate('/');
  };

  return (
    <header className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">E-Learning</div>
        <ul className="flex space-x-4">
          {/* Show Login and Sign Up only if the user is not authenticated */}
          {!isAuthenticated ? (
            <>
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
            </>
          ) : (
            <>
              <li>
                <button className='mr-[100px] p-2 bg-red-500 rounded hover:bg-red-600 transition-colors'
                onClick={() => navigate('/dashboard')}>Dashboard</button>
                <button
                  onClick={handleLogout}
                  className="mr-[50px] p-2 bg-red-500 rounded hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
