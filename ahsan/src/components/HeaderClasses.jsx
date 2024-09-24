import React from 'react'
import backgroundImage from '../images/breadcrumb/a.jpg';

const HeaderClasses = () => {
  return (
    <div className="relative h-[450px] border border-black overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="text-center text-white mt-40 z-10 relative">
        <h1 className="text-6xl font-semibold hover:text-red-500 transition duration-300">ABOUT</h1>
        <p className="mt-2 text-md text-gray-300">
          <a className="font-semibold text-white text-lg" href="#">Home&gt;</a> Classes
        </p>
      </div>
    </div>
  )
}

export default HeaderClasses