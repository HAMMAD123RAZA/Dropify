import React from 'react';

const ReqProduct = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-6">
      <h1 className='text-4xl font-bold mb-6'>Request Product</h1>
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 mb-2">Category</label>
          <select id="category" className="border-2 border-gray-300 p-2 w-full rounded">
            <option value="bottle">Bottle</option>
            <option value="tank">Tank</option>
            <option value="gallon">Gallon</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="product" className="block text-gray-700 mb-2">Product</label>
          <input type="text" id="product" placeholder='Product' className='border-2 border-gray-300 p-2 w-full rounded' />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity</label>
          <input type="text" id="quantity" placeholder='Quantity' className='border-2 border-gray-300 p-2 w-full rounded' />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 mb-2">Description</label>
          <input type="text" id="description" placeholder='Description' className='border-2 border-gray-300 p-2 w-full rounded' />
        </div>
        <button className='bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 transition duration-300'>Submit</button>
      </form>
    </div>
  );
};

export default ReqProduct;