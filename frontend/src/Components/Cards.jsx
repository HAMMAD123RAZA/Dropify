import React from 'react';

export function Cards() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-lg overflow-hidden">
      <figure>
        <img 
src='drop.jpg'
          alt="Shoes" 
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body p-4 ">
        <div className="flex justify-between">
        <h2 className="card-title text-xl text-blue-600 font-bold">
          Gallon
            </h2>

          <div className="badge badge-secondary ml-2 text-blue-600 font-bold">7.85Litre</div>

        </div>
        <p className="text-gray-600 mt-2">
          If a dog chews shoes whose shoes does he choose?          If a dog chews shoes whose shoes does he choose?
          If a dog chews shoes whose shoes does he choose?
          If a dog chews shoes whose shoes does he choose?

        </p>
        <div className="card-actions flex justify-between mt-4">
        <button className="btn my-2 py-3 md:px-4 hidden md:block font-bold  bg-blue-500 text-white rounded-md hover:text-blue-600 hover:bg-white ">Add To Cart</button>
          <div className="badge badge-outline font-bold text-blue-600 ">22$</div>
        </div>
      </div>
    </div>
  );
}
