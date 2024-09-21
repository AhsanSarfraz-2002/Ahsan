import React from 'react';
import registerPic from '../images/register-pic.jpg';

const RegisterNow = () => {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 mt-[-50px]">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-12 shadow-2xl bg-white">
        <div className="p-8 lg:p-14 w-full lg:w-1/2">
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase text-center">REGISTER NOW</p>
          <p className="text-gray-500 text-center mt-3 text-sm md:text-base">The First 7 Day Trial Is Completely Free With The Teacher</p>
          <form className="space-y-4 mt-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="first-name" className="mb-3 text-gray-400 text-sm">First Name</label>
                <input type="text" id="first-name" className="border-2 border-gray-300 w-full h-12 pl-4 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="last-name" className="mb-3 text-gray-400 text-sm">Last Name</label>
                <input type="text" id="last-name" className="border-2 border-gray-300 w-full h-12 pl-4 rounded-md" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-3 text-gray-400 text-sm">Email</label>
                <input type="email" id="email" className="border-2 border-gray-300 w-full h-12 pl-4 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="tel" className="mb-3 text-gray-400 text-sm">Mobile Phone</label>
                <input type="tel" id="tel" className="border-2 border-gray-300 w-full h-12 pl-4 rounded-md" />
              </div>
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                value="Send Message"
                className="w-full h-10 mt-6 bg-gradient-to-r from-red-500 to-red-800 text-white rounded-md cursor-pointer"
              />
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img src={registerPic} alt="Register" className="w-full h-auto object-cover rounded-md" />
        </div>
      </div>
    </section>
  );
}

export default RegisterNow;
