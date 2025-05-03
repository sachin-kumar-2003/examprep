import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center bg-dark h-[60px] shadow-lg px-10 py-4 mx-auto text-white sticky top-0 z-50 bg-sky-50'>
      <div className='flex items-center w-[50%] justify-between px-6 py-2'>
        <div className='flex items-center'>
          {/* Logo icon */}
          <span className='text-2xl mr-3'>✨</span>
          <h1 className='text-xl font-bold ml-2 tracking-wide text-black'>ExamprepAI</h1>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-4 items-center w-[50%]">
          <button className='bg-white text-gray-700 px-5 py-2 rounded-md font-semibold shadow-md hover:bg-gray-100 transition duration-300 ease-in-out'>Login</button>
          <button className='bg-white text-gray-700 px-5 py-2 rounded-md font-semibold shadow-md hover:bg-gray-100 transition duration-300 ease-in-out'>Sign Up</button>
      </div>
    </div>
  )
}

export default NavBar
