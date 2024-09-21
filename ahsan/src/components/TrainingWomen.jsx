import React from 'react';
import aboutPic from '../images/about-pic.jpg';
import aboutSignature from '../images/about-signature.png';

const TrainingWomen = () => {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 mt-[-20px] lg:mt-28 flex flex-col lg:flex-row lg:justify-between">
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
        <img src={aboutPic} alt="Picture of a woman training" className="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-between lg:pl-8">
        <div>
          <p className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left">
            Story About Us
          </p>
          <p className="text-gray-500 text-sm md:text-base lg:text-xl mt-4 text-center lg:text-left">
            Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a amet.
          </p>
          <p className="text-gray-500 text-sm md:text-base lg:text-xl mt-2 text-center lg:text-left">
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start mt-6">
          <img src={aboutSignature} alt="Signature of CEO" className="mb-2" />
          <p className="capitalize font-bold text-lg md:text-xl lg:text-2xl text-center lg:text-left">
            Lettie Chavez
          </p>
          <p className="text-red-500 text-sm md:text-base lg:text-lg mt-1 text-center lg:text-left">
            CEO-Founder
          </p>
        </div>
      </div>
    </section>
  );
}

export default TrainingWomen;
