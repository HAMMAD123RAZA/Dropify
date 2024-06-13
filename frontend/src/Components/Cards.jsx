import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../RTK/CartSllice';

export function Cards({ item }) {
  const dispatch=useDispatch()

  const handleCart=(item)=>{
    dispatch(addItem(item))
  }
  
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-lg overflow-hidden">
      <figure>
        <img 
          src={item.img}
          alt="Shoes" 
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <div className="flex justify-between">
          <h2 className="card-title text-xl text-blue-600 font-bold">
            {item.title}
          </h2>
          <div className="badge badge-secondary ml-2 text-blue-600 font-bold">{item.capacity}</div>
        </div>
        <p className="text-gray-600 mt-2">
          If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?
          If a dog chews shoes whose shoes does he choose?
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions flex justify-between mt-4">
          <button onClick={()=>handleCart(item)} className="btn my-2 py-3 md:px-4 hidden md:block font-bold  hover:bg-blue-500 hover:text-white rounded-md text-blue-600 bg-white border-blue-500 border-2">
            Add To Cart
          </button>
          <div className="badge badge-outline font-bold text-blue-600">{item.price}</div>
        </div>
      </div>
    </div>
  );
}