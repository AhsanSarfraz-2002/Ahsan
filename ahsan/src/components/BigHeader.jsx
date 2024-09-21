import React from 'react';
import heroBg from '../images/hero-bg.jpg';

const BigHeader = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="text-center px-4 sm:px-8 md:px-16 lg:px-24">
        <p className="text-red-500 text-xl md:text-2xl lg:text-3xl">FITNESS ELEMENTS</p>
        <p className="text-white text-2xl md:text-3xl lg:text-4xl mt-2">BMI CALCULATOR</p>
        <p className="text-white text-base md:text-lg lg:text-xl mt-4">
          Gutim comes packed with the user-friendly BMI Calculator shortcode which lets
        </p>
        <a href="#">
          <input
            type="button"
            value="Read More"
            className="bg-gradient-to-r from-red-500 to-red-900 text-white h-10 w-36 md:h-12 md:w-40 lg:h-14 lg:w-48 mt-6 cursor-pointer transition duration-300 hover:opacity-80"
          />
        </a>
      </div>
    </div>
  );
};

export default BigHeader;
