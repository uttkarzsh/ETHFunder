import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="space-x-6 hidden md:flex">
            <Link to="/" className="text-white hover:text-gray-500">Home</Link>
            <Link to="funder" className="text-white hover:text-gray-500">Funder</Link>
            <Link to="walletinteract" className="text-white hover:text-gray-500">Wallet Interact</Link>
          </div>

          <div className="hidden md:block">
            <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950 hover:text-blue-600 transition">
              Connect Wallet
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;