import React from 'react';
import trainer1 from '../images/trainer/about-trainer-1.jpg';
import trainer2 from '../images/trainer/about-trainer-2.jpg';
import trainer3 from '../images/trainer/about-trainer-3.jpg';

const ThreeTrainers = () => {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 mt-[-40px] ">
      <div className="text-center mb-8">
        <p className="uppercase text-3xl md:text-4xl lg:text-5xl font-bold">Expert Trainers</p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        <div className="relative w-full lg:w-1/3">
          <img src={trainer1} alt="Patrick Cortez" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          <div className="relative mt-4 text-center">
            <div className="relative border border-gray-300 cursor-pointer shadow-lg bg-white group p-4 rounded-lg">
              <p className="text-lg font-semibold">Patrick Cortez</p>
              <p className="text-red-500">Leader</p>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-48 border border-gray-300 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-lg">
                Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/3">
          <img src={trainer2} alt="Gregory Powers" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          <div className="relative mt-4 text-center">
            <div className="relative border border-gray-300 cursor-pointer shadow-lg bg-white group p-4 rounded-lg">
              <p className="text-lg font-semibold">Gregory Powers</p>
              <p className="text-red-500">Coach</p>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-48 border border-gray-300 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-lg">
                Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/3">
          <img src={trainer3} alt="Walter Wagner" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          <div className="relative mt-4 text-center">
            <div className="relative border border-gray-300 cursor-pointer shadow-lg bg-white group p-4 rounded-lg">
              <p className="text-lg font-semibold">Walter Wanger</p>
              <p className="text-red-500">Dance Trainer</p>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-48 border border-gray-300 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-lg">
                Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreeTrainers;
