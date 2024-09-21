import React from 'react';

import TrainingWomen from '../components/TrainingWomen';
import ThreeTrainers from '../components/ThreeTrainers';
import GetTrainingToday from '../components/GetTrainingToday';
import RegisterNow from '../components/RegisterNow';
import LatexBlog from '../components/LatexBlog';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';
import BigHeader from '../components/BigHeader';

const Home = () => {
  return (
    <div>
      
      <BigHeader/>
      
      <TrainingWomen/>

      <ThreeTrainers/>

      <GetTrainingToday/>

      <RegisterNow/>

      <LatexBlog/>

      <Footer1/>

      <Footer2/>

    </div>
  );
}

export default Home;