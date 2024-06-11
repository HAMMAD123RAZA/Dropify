import React, { useEffect, useState } from 'react';
import Carousel from './Carousel ';
import { Cards } from './Cards';
import axios from "axios"


const Home = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
const getData=async()=>{
  try {
    const res=await axios.get("http://localhost:4040/")
    setData(res.data)
    console.log(res.data)
  
  } catch (error) {
      console.log(error)
  }
}
getData()

  },[])
  // const limitDAta=data.slice(0,6)
  return (
    <div className=" ">
      <Carousel />
      {/* cards */}
      <div className="my-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {data.map((item)=>(
          <Cards key={item.id} item={item}/>
          
        ))}

</div>
      </div>
    </div>
  );
};

export default Home;
