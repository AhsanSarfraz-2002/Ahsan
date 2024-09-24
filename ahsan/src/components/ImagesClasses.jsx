import React from 'react';

import yogaImage from '../images/classes/classes-1.jpg';
import karateImage from '../images/classes/classes-4.jpg';
import runningImage from '../images/classes/classes-2.jpg';
import danceImage from '../images/classes/classes-5.jpg';
import personalTrainingImage from '../images/classes/classes-3.jpg';
import weightLossImage from '../images/classes/classes-6.jpg';
import boxImage from '../images/classes/classes-7.jpg';
import cardioImage from '../images/classes/classes-8.jpg';
import crossfitImage from '../images/classes/classes-9.jpg';

const UnlimitedClasses = () => {
  const classes = [
    { title: 'Yoga', instructor: 'Ryan Knight', imgSrc: yogaImage },
    { title: 'Karate', instructor: 'Kevin McCormick', imgSrc: karateImage },
    { title: 'Running', instructor: 'Randy Rivera', imgSrc: runningImage },
    { title: 'Dance', instructor: 'Russel Lane', imgSrc: danceImage },
    { title: 'Personal Training', instructor: 'Cole Roberston', imgSrc: personalTrainingImage },
    { title: 'Weight Loss', instructor: 'Ryant Scott', imgSrc: weightLossImage },
    { title: 'Box', instructor: 'Chester Bowen', imgSrc: boxImage },
    { title: 'Cardio', instructor: 'Jorge Fernandez', imgSrc: cardioImage },
    { title: 'Crossfit', instructor: 'Chester Bowen', imgSrc: crossfitImage },
  ];

  return (
    <section className="mt-20">
      <p className="uppercase text-center text-4xl font-bold">Unlimited Classes</p>
      <div className="flex flex-wrap justify-center mt-14 mx-4">
        {classes.map((classItem, index) => (
          <div key={index} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <img src={classItem.imgSrc} alt={classItem.title} className="w-full rounded-md" />
            <div className="absolute bottom-0 w-full left-0 bg-black bg-opacity-50 text-white h-20 pl-6 pt-2">
              <p className="text-2xl font-semibold">{classItem.title}</p>
              <p className="text-sm">{classItem.instructor}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UnlimitedClasses;
