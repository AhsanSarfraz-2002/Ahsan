import React from 'react';
import awardImage from '../images/award.jpg';

const GymAward = () => { 
  return (
    <section className="flex mx-24 mt-24 justify-between">
      <div className="w-2/3">
        <p className="uppercase font-bold text-4xl mt-4">Best Gym Award</p>
        <p className="text-gray-500 text-lg mt-4">
          Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a amet.
        </p>
        <p className="text-gray-500 text-lg mt-4">
          Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet.
        </p>
      </div>
      <div>
        <img src={awardImage} alt="Award" />
      </div>
    </section>
  );
}

export default GymAward;
