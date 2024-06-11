import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  console.log("Cart items:", items); // Log the items to inspect their structure

  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-lg overflow-hidden">
    <figure>
      {/* <img 
        src={items.img}
        alt="Shoes" 
        className="w-full h-48 object-cover"
      /> */}
    </figure>
    <div className="card-body p-4">
      <div className="flex justify-between">
        <h2 className="card-title text-xl text-blue-600 font-bold">
          {items.title}
        </h2>
        <div className="badge badge-secondary ml-2 text-blue-600 font-bold">{items.capacity}</div>
      </div>
      <p className="text-gray-600 mt-2">
        If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?
        If a dog chews shoes whose shoes does he choose?
        If a dog chews shoes whose shoes does he choose?
      </p>
      <div className="card-actions flex justify-between mt-4">
       
        <div className="badge badge-outline font-bold text-blue-600">{items.price}</div>
      </div>
    </div>
  </div>
  )
}

export default Cart
