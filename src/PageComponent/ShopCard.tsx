// import React from 'react'

// function ShopCard({picture,title,price,discount,author}:any) {
//   return (
//     <div className=' w-80'>
//       <div className='h-80 w-80 flex justify-center items-center bg-slate-300'>{picture}</div>
//       <div className='bg-indigo-400 pl-4'>
//       <div className='h-12 text-2xl font-semibold flex items-center'>{title}</div>
//       {/* <div className='h-12 text-xl font-semibold '>{price}</div> */}
      
//       </div>
//       <div className="text-slate-800 bg-pink-300 text-lg capitalize font-semibold">
//                 {author}
//               </div>
//     </div>
//   )
// }

// export default ShopCard


import React,{useEffect,useState} from 'react';
import axios from "../HOC/Axios/axios";

// interface ProductProps {
//   title: string;
//   price: number;
//   imageUrl: string;
// }

function ShopCard({ title, price, image,author }:any) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} className="w-64 h-64 object-cover bg-gray-100" />
      {/* <div className="product-info"> */}
        <h2 className="mt-2 text-lg font-semibold text-gray-900">{title}</h2>
        <h2 className=" text-lg font-semibold text-gray-900">{author}</h2>
        <p className="text-red-500 mt-2">Rs.{price}</p>
        {/* <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 flex items-center justify-center">
                <span>Add to Cart</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 13H5L3 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16a3 3 0 100 6 3 3 0 000-6zm6 0a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </button> */}

<button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 flex items-center justify-center">
                <span>Add to Cart</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 13H5L3 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16a3 3 0 100 6 3 3 0 000-6zm6 0a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </button>


      </div>
    // </div>
  );
};

export default ShopCard;
