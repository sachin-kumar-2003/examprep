import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa"; 
import { FiVideo } from "react-icons/fi"; 

const NavBar = () => {
  return (
    <nav className="w-full max-w-screen overflow-x-hidden px-4 py-3 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.1)] border border-gray-200 rounded-lg">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-purple-500 p-2 rounded-full ">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2a10 10 0 00-7.071 17.071A10 10 0 0012 22a10 10 0 007.071-2.929A10 10 0 0012 2z"
              ></path>
            </svg>
          </div>
          <Link to="/" className="text-xl font-bold text-gray-800">
            ExamprepAi
          </Link>
          <span className="px-2 py-1 text-sm text-purple-500 bg-purple-100 rounded max-[480px]:hidden">
            AI Agent
          </span>
        </div>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <Link
            to="https://github.com/sachin-kumar-2003"
            className="text-gray-500 hover:text-gray-800 transition-colors max-[425px]:hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <a
            href="https://private-user-images.githubusercontent.com/180186804/442484208-eb2ddaaa-68c6-468b-a989-f0de63f7080b.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY5NDk0NTQsIm5iZiI6MTc0Njk0OTE1NCwicGF0aCI6Ii8xODAxODY4MDQvNDQyNDg0MjA4LWViMmRkYWFhLTY4YzYtNDY4Yi1hOTg5LWYwZGU2M2Y3MDgwYi5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxMVQwNzM5MTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NTFhZWMyMTMyYjkyODIzNjY4NWFkYjZhZjRlZGNjOTQ3YTNiOTBiYmYzYjg5NzE2NzMyZWRjNzNiZjA2Nzk5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.5gnz0it2QdMhQrWf57cceNJQiosupeQRFCon1dmddyA"
            className="text-gray-800 font-bold relative after:absolute after:w-full after:h-0.5 after:bg-purple-500 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform max-[425px]:hidden"
          >
            Live Preview
          </a>
          {/* Icons for smaller screens */}
          <Link
            to="https://github.com/sachin-kumar-2003"
            className="max-[425px]:inline-block hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 text-gray-500 hover:text-gray-800 transition-colors" />
          </Link>
          <a
            href="#"
            className="max-[425px]:inline-block hidden"
          >
            <FiVideo className="w-6 h-6 text-gray-800 hover:text-purple-500 transition-colors" />
          </a>
          <button className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600 transition-shadow hover:shadow-md" onClick={()=>{
            alert("Login functionality is not implemented yet.");
          }}>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
