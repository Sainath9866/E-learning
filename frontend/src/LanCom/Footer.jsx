// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-12">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Daily Code. All rights reserved.</p>
        <nav className="space-x-4">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
