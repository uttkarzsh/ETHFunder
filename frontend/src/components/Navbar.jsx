import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="space-x-6 hidden md:flex">
            <a href="" className="text-gray-600 hover:text-white">Home</a>
            <a href="funder" className="text-gray-600 hover:text-white">Funder</a>
            <a href="walletinteract" className="text-gray-600 hover:text-white">Wallet Interact</a>
          </div>

          <div className="hidden md:block">
            <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950 transition">
              Connect Wallet
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;