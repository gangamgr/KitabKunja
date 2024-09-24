import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl rounded-lg justify-center items-center flex flex-col ">
      <h2 className='p-5 font-bold text-3xl mb-6 justify-center'>Why choose US?</h2>
      <div className=" grid grid-cols-4 px-5 gap-5">
        <div className=" font-bold mb-5 h-34 w-54 bg-emerald-200 p-4 rounded-xl">
          <h3 className='p-2 text-orange-600 text-lg'>Lowest Price</h3>
          <p className='text-md'>
            We continuously search and match all our prices with the lowest prices available in Nepal.
          </p>
        </div>
        <div className=" font-bold mb-5 h-34 w-54 bg-emerald-200 p-4 rounded-xl">
          <h3 className='p-2 text-orange-600 text-lg'>Fastest Delivery</h3>
          <p className='text-md'>All the orders placed will be delivered within 48 hours!</p>
        </div>
        <div className=" font-bold mb-5 h-34 w-54 bg-emerald-200 p-4 rounded-xl">
          <h3 className='p-2 text-orange-600 text-lg'>Best Customer Service</h3>
          <p className='text-md'>
            Our Customer service agents are authorized to go above and beyond to solve customer issues.
          </p>
        </div>
        <div className=" font-bold mb-5 h-34 w-54 bg-emerald-200 p-4 rounded-xl">
          <h3 className='p-2 text-orange-600 text-lg'>Flexible Exchange Policy</h3>
          <p className='text-md'>
            Customers can make an exchange up to 30 days from the day of purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
