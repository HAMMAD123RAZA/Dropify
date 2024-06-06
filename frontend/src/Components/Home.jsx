import React from 'react';
import Carousel from './Carousel ';
import { Cards } from './Cards';

const Home = () => {
  return (
    <div className=" ">
      <Carousel />
      {/* cards */}
      <div className="my-3">
      <Cards/>

      </div>
    </div>
  );
};

export default Home;
