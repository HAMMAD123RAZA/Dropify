import React, { useEffect, useState } from 'react';
import Carousel from './Carousel ';
import { Cards } from './Cards';
import axios from "axios"
import Search from './Search';


const Home = () => {
  const [search,setSearch]=useState("")
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
  const hanldeSearchChange=(e)=>{
    setSearch(e.target.value)
  }
  // const limitDAta=data.slice(0,6)
  const filterData=data.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className=" ">
      <Carousel />
      {/* search */}
      <div className="flex justify-center py-10  ">
    <div className="relative">
      <input type="text" onChange={hanldeSearchChange}  placeholder='Search Book' className="rounded-full px-4 py-3  border border-x-4 border-blue-500 pl-12"  />
      <Search handleSearch={()=>setSearch(search)}  />
    </div>
      </div>

      {/* cards */}
      <div className="my-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {filterData.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))}

</div>
      </div>
    </div>
  );
};

export default Home;
