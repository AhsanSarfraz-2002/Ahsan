import React from 'react';
import bannerBg from '../images/banner-bg.jpg';
import bannerPerson from '../images/banner-person.png';

const GetTrainingToday = () => {
  return (
    <section
      className="flex flex-col lg:flex-row bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="text-white mt-16 lg:mt-24 lg:ml-24 lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
        <p className="uppercase text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left">
          Get Training Today
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mt-4 text-center lg:text-left w-full lg:w-4/5">
          Gimply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry’s standard.
        </p>
        <form className="mt-6 flex justify-center lg:justify-start">
          <input
            type="button"
            value="Contact Now"
            className="bg-gradient-to-r from-red-500 to-red-900 w-full sm:w-40 h-10 text-lg font-semibold mt-6 transition duration-300 hover:bg-red-700 cursor-pointer rounded-md"
          />
        </form>
      </div>
      <div className="flex justify-center lg:justify-end lg:w-1/2 mt-8 lg:mt-0">
        <img src={bannerPerson} alt="Trainer" className="w-full max-w-xs lg:max-w-md h-auto" />
      </div>
    </section>
  );
}

export default GetTrainingToday;
