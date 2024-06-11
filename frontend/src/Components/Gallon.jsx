import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Cards } from './Cards'

const Gallon = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:4040")
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const filterData = data.filter((item) => item.category.trim() === "gallon")

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {filterData.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
      </div>
    </>
  )
}


export default Gallon