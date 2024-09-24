import React from 'react';
import TrainingWomen from '../components/TrainingWomen';
import GetTrainingToday from '../components/GetTrainingToday';
import ThreeTrainers from '../components/ThreeTrainers';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';
import GymAward from '../components/GymAward';
import Counter from '../components/Counter';
import HeaderAbout from '../components/HeaderAbout';

const AboutPage = () => {
  return (
    <div>
      <HeaderAbout /> 
      <TrainingWomen />
      <Counter />
      <GymAward />
      <GetTrainingToday />
      <ThreeTrainers />
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default AboutPage;
