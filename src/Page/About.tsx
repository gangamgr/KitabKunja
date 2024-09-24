import React from 'react';
import collection from '../Resources/collection.jpg';

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="container mx-auto p-8 ">
        {/* 1st Section: About Us Text */}
        <h1 className="  text-3xl sm:text-4xl md:text-5xl font-bold my-20 text-center pt-4 pb-4 bg-blue-50 h-28">
          About us
        </h1>
        <h2 className='text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-10'>
          Since 2023, Bookopiles has existed as a tiny island of peace in a fast-moving world by fostering a culture of reading and connecting people with the books they'll love, in Nepal and beyond.
        </h2>

        {/* 2nd Section: Image and Text */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={collection}
              alt="About"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada. Nullam quis ante sed dui fermentum feugiat at ac lorem.
              Duis in suscipit ex.
            </p>
          </div>
        </div>

        {/* 3rd Section: Image and Text in Opposite Layout */}
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12 mt-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={collection}
              alt="About"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada. Nullam quis ante sed dui fermentum feugiat at ac lorem.
              Duis in suscipit ex.
            </p>
          </div>
        </div>
        <h1 className='mt-12 font-bold'>Why Books Pookopiles?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-4">
          
          {/* Text Block 1 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className='font-bold mb-5'>TIRELESS INNOVATION</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            At Books Mandala, we are committed to providing the best book-buying experience.
Our advanced search tool allows you to find books by title, author, or ISBN, and sort by genres and bestsellers. With features like book requests and pre-orders, we are always innovating to enhance your reading experience. Stay tuned for our upcoming eBooks and audiobooks!            </p>
          </div>

          {/* Text Block 2 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className='font-bold mb-5'>DIVERSE COLLECTION</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            From rare books to bestsellers, find everything you desire here at Books Mandala. We take customer feedback seriously and curate our collection accordingly. If there's a book you want to read that isn't in our catalog, simply request it, and we'll do our best to get it for you. Our extensive and diverse selection ensures there's something for every reader, catering to all tastes and preferences.            </p>
          </div>

          {/* Text Block 3 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className='font-bold mb-5'>UNBEATEN DEALS AND OFFERS</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            We regularly feature deals and special offers, ensuring you get the most value for your money.

Find fantastic bargains through our promotions, and enjoy our frequent giveaways and competitions. At Books Mandala, quality books come at great prices!            </p>
          </div>

          {/* Text Block 4 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className='font-bold mb-5'>WHOLESALE AND BULK PURCHASE</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            We offer B2B and wholesale services, supporting retail bookstores, online stores, schools, libraries, and other institutions. Our services provide extensive access to a diverse catalog at competitive rates, ensuring quality books reach a wider audience. Contact us for bulk purchases and enjoy the benefits of partnering with Books Mandala.
            </p>
          </div>
        </div>



        

        {/* 3x2 Image Grid Section */}
        
        <div className=" mt-12 flex items-center justify-center h-12  ">
  <p className=" font-bold text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
    Books Mandala: Glimpses from 1991
  </p>
</div>


        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2">
          {/* Image Box 1 */}
          <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <img
              src={collection}
              alt="Book"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Image Box 2 */}
          <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <img
              src={collection}
              alt="Book"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Image Box 3 */}
          <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <img
              src={collection}
              alt="Book"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Image Box 4 */}
          <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <img
              src={collection}
              alt="Book"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Image Box 5 */}
          <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <img
              src={collection}
              alt="Book"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Image Box 6 */}
          <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <img
              src={collection}
              alt="Book"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          </div>

        {/* Thank You Message */}
        <div className=" w-full text-center mt-12   pt-6 pb-6 bg-blue-100 ">
  <p className="text-xl font-bold ">
    To our wonderful supporters and customers; Thank you for making every chapter of our journey possible.
  </p>
  <h1 className="font-bold text-4xl text-blue-400">Bookopoles</h1>
</div>
<div className="w-full text-center mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      Contact Us
          </h2>
          <p className='text-2xl font-bold'>     If you want to know somthing about us tou can contact us.If you want to details to contact us you can click the button below. </p>
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
    Contact us
  </button>
         
        </div>
      
      </div>
    </>
  ); 
};

export default AboutUs;