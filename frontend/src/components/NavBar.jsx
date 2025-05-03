import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-xl ">
      <div className="flex items-center">
        <div className="bg-purple-500 p-2 rounded-full">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 00-7.071 17.071A10 10 0 0012 22a10 10 0 007.071-2.929A10 10 0 0012 2z"></path>
          </svg>
        </div>
        <span className="ml-2 text-xl font-bold text-gray-800">ExamprepAi</span>
        <span className="ml-2 px-2 py-1 text-sm text-purple-500 bg-purple-100 rounded">AI Agent</span>
      </div>
      <div className="flex items-center space-x-4">
        <a href="https://github.com" className="text-gray-500 hover:text-gray-800">
          GitHub
        </a>
        
      
        <a href="#" className="text-gray-800 font-bold">
          Live Preview
        </a>
        <button className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600">
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
