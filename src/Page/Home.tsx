// import React, { useState } from "react";
// import candle2 from "../Resources/R.jpg";
// // import candle1 from "../Resources/candle1.jpg";
// import { BsArrowRightShort } from "react-icons/bs";
// import mmm from "../Resources/q.jpg";
// import logo from "../Resources/logo.png"
// import candle1 from "../Resources/candle1.jpg";
// import Index from "./index";
// import Contact from "./Contact";











// // Interface for books
// interface Book {
//   title: string;
//   price: string;
//   imageUrl: string;
// }

// // interface Picture{
// //   img:string;
// // }
// const banner=[
//   {
//     img:candle1,
//   },
// ]

// // Best Sellers Data
// const bestSellers: Book[] = [
//   {
//     title: 'As a Man Thinketh',
//     price: '₹59.00',
//     imageUrl: '/path-to-image/as-a-man-thinketh.jpg',
  
//   },
//   {
//     title: 'Relativity',
//     price: '₹129.00',
//     imageUrl: '/path-to-image/relativity.jpg',
//   },
//   {
//     title: 'The Origin of Species',
//     price: '₹159.00',
//     imageUrl: '/path-to-image/origin-of-species.jpg',
//   },
//   {
//     title: 'The Art of War',
//     price: '₹39.00',
//     imageUrl: '/path-to-image/art-of-war.jpg',
//   },
// ];

// // Discover Books Data
// const discoverBooks: Book[] = [
//   {
//     title: 'Three Men in a Boat',
//     price: '₹99.00',
//     imageUrl: '/path-to-image/three-men-in-a-boat.jpg',
//   },
//   {
//     title: 'Othello',
//     price: '₹70.00',
//     imageUrl: '/path-to-image/othello.jpg',
//   },
//   {
//     title: 'Nationalism',
//     price: '₹69.00',
//     imageUrl: '/path-to-image/nationalism.jpg',
//   },
//   {
//     title: 'As a Man Thinketh',
//     price: '₹59.00',
//     imageUrl: '/path-to-image/as-a-man-thinketh.jpg',
//   },
// ];

// const Home: React.FC = () => {
//   return (
//     <div className="h-fit w-screen mt-12 flex flex-col items-center bg-gray-100">
   
//       {/* Main Banner Section */}
//       <div className="flex flex-col items-center">
//         {/* Illustration */}
//         <div className="w-full flex justify-center">
//           {/* <div className="flex justify-center "> */}
//             {/* Bookstore illustration */}
//             <div className="relative w-screen max-w-4xl h-72 bg-green-400 shadow-md">
//               {banner.map((item,i)=>(
//                 <div className="h-72 w-fit"
//                     style={{
//                       background: `url(${item.img})`,
//                       backgroundSize:"cover",
//                     }}
//                     key={i}
//                     >
//                   </div>
//               ))}
//               {/* <div className="absolute left-0 top-0 w-3/5 h-full bg-blue-200"></div>
//               <div className="absolute right-0 top-0 w-2/5 h-full bg-white"></div>
//               <div className="absolute bottom-0 w-full h-16 bg-blue-600"></div>
//               <div className="absolute bottom-0 right-0 m-2 px-2 py-1 text-sm text-white bg-red-500">SALE</div>
//               <div className="absolute bottom-10 left-1/4 text-lg text-gray-800 font-bold"> */}
//                 {/* Girl illustration */}
//                 {/* <div className="relative">
//                   <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
//                   <div className="w-12 h-32 bg-orange-400 mt-2"></div>
//                   <div className="w-4 h-6 bg-gray-800 absolute bottom-0"></div>
//                 </div> */}
//               {/* </div> */}
//             </div>
//           {/* </div> */}
//         </div>

//         {/* Heading and Description */}
//         <div className="text-center mt-12">
//           <h1 className="text-4xl font-bold text-gray-900">Discover Your Next Favorite Book Here.</h1>
//           <p className="text-lg text-gray-600 mt-4">
//             Explore our curated collection of new and popular books to find your next literary adventure.
//           </p>
//         </div>

//         {/* Search Box */}
//         <div className="mt-8">
//           <input
//             type="text"
//             className="border border-gray-300 rounded-lg px-4 py-2 w-96 text-center"
//             placeholder="Which book are you looking for?"
//           />
//         </div>
//       </div>

//       <Index/>

//       {/* Categories Section */}
//       {/* <div className="mt-16 w-full max-w-6xl">
//         <h2 className="text-3xl font-bold text-center">Categories</h2>
//         <p className="text-center text-gray-600 mb-8">Browse our featured categories</p>
//         <div className="flex justify-center space-x-10 bg-red-400"> */}
//           {/* Category 1 */}
//           {/* <div className=" w-72 bg-white rounded-lg shadow-md overflow-hidden">
//             <img src="/path-to-manga-image.jpg" alt="Manga" className="w-full h-56 object-cover" />
//             <div className="text-center p-4">
//               <h3 className="text-xl font-semibold">Manga</h3>
//             </div>
//           </div> */}

//           {/* Category 2 */}
//           {/* <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden">
//             <img src="/path-to-biography-image.jpg" alt="Biography" className="w-full h-48 object-cover" />
//             <div className="text-center p-4">
//               <h3 className="text-xl font-semibold">Biography</h3>
//             </div>
//           </div> */}

//           {/* Category 3 */}
//           {/* <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden">
//             <img src="/path-to-fiction-image.jpg" alt="Fiction" className="w-full h-48 object-cover" />
//             <div className="text-center p-4">
//               <h3 className="text-xl font-semibold">Fiction</h3>
//             </div>
//           </div>
//         </div> */}
//       {/* </div> */}

//       {/* Best Sellers Section */}
//       {/* <div className="mt-16 w-full max-w-6xl">
//         <h2 className="text-3xl font-bold text-center text-red-600">Best Sellers</h2>
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {bestSellers.map((book, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//               <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover" />
//               <h3 className="mt-4 text-lg font-semibold text-gray-900">{book.title}</h3>
//               <p className="text-red-500 mt-2">{book.price}</p>
//               <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 flex items-center justify-center">
//                 <span>Add to Cart</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 ml-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 13H5L3 3z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16a3 3 0 100 6 3 3 0 000-6zm6 0a3 3 0 100 6 3 3 0 000-6z" />
//                 </svg>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div> */}

//       {/* Discover Books Section */}
//       {/* <div className="mt-16 w-full max-w-6xl">
//         <h2 className="text-3xl font-bold text-center text-red-600">Discover Books</h2>
//         <p className="text-center text-gray-600 mb-8">Explore our comprehensive collection of books.</p>
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {discoverBooks.map((book, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//               <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover" />
//               <h3 className="mt-4 text-lg font-semibold text-gray-900">{book.title}</h3>
//               <p className="text-red-500 mt-2">{book.price}</p>
//               <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 flex items-center justify-center">
//                 <span>Add to Cart</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 ml-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 13H5L3 3z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16a3 3 0 100 6 3 3 0 000-6zm6 0a3 3 0 100 6 3 3 0 000-6z" />
//                 </svg>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div> */}

//       {/* <div className="relative bg-white flex items-center justify-between py-12"> */}
//       {/* Left section - Image */}
//       {/* <div className="flex-1 flex justify-center items-center">
//         <img
//           src="path-to-your-left-image.jpg"
//           alt="Fashion"
//           className="max-w-xs lg:max-w-sm"
//         />
//       </div> */}

//       {/* Center section - Text */}
//       {/* <div className="flex-1 text-center">
//         <h2 className="text-red-600 uppercase text-sm tracking-widest mb-2">
//           The Chloe Collection
//         </h2>
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">
//           The Project Jacket
//         </h1>
//         <button className="bg-red-600 text-white font-semibold py-2 px-6 rounded hover:bg-red-500">
//           Shop Now
//         </button>
//       </div> */}

//       {/* Right section - Image */}
//       {/* <div className="flex-1 flex justify-center items-center">
//         <img
//           src="path-to-your-right-image.jpg"
//           alt="Accessories"
//           className="max-w-xs lg:max-w-sm"
//         />
//       </div> */}

//       {/* Carousel Indicators */}
//       {/* <div className="absolute bottom-4 flex justify-center w-full"> */}
//         <div className="flex space-x-2">
//           <div className="w-2 h-2 bg-red-600 rounded-full"></div>
//           <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
//           <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
//         </div>
//       </div>
//     // </div>

//     // </div>
//   );
// };

// export default Home;


import React, { useState } from "react";
// import { useCart } from "../PageComponent/CartContext"; 
import { BsArrowRightShort } from "react-icons/bs";
import candle2 from "../Resources/R.jpg";
import candle1 from "../Resources/candle1.jpg";
import mmm from "../Resources/q.jpg";
import Index from "./index";
// import logo from "../Resources/logo.png";

// Interface for books
// interface Book {
//   title: string;
//   price: string;
//   imageUrl: string;
// }

// interface Picture{
//     img:string;
//    }
//   const banner=[
//    {
//      img:candle1,
//      },
//    ]

// Best Sellers Data
// const bestSellers: Book[] = [
//   {
//     title: 'As a Man Thinketh',
//     price: '₹59.00',
//     imageUrl: candle1,
//   },
//   {
//     title: 'Relativity',
//     price: '₹129.00',
//     imageUrl: candle2,
//   },
//   {
//     title: 'The Origin of Species',
//     price: '₹159.00',
//     imageUrl: mmm,
//   },
//   {
//     title: 'The Art of War',
//     price: '₹39.00',
//     imageUrl: '',
//   },
// ];

// Discover Books Data
// const discoverBooks: Book[] = [
//   {
//     title: 'Three Men in a Boat',
//     price: '₹99.00',
//     imageUrl: candle2,
//   },
//   {
//     title: 'Othello',
//     price: '₹70.00',
//     imageUrl: candle1,
//   },
//   {
//     title: 'Nationalism',
//     price: '₹69.00',
//     imageUrl: mmm,
//   },
//   {
//     title: 'As a Man Thinketh',
//     price: '₹59.00',
//     imageUrl: '',
//   },
// ];

function Home() {

  const data=[
    {
      image:mmm,
    }
  ]
  // const { addToCart, cartItems } = useCart(); // Accessing CartContext
  const [searchQuery, setSearchQuery] = useState(""); // State to handle search query

  // Filter books based on search query
  // const filteredBestSellers = bestSellers.filter((book) =>
  //   book.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const filteredDiscoverBooks = discoverBooks.filter((book) =>
  //   book.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // Handle adding an item to the cart
  // const handleAddToCart = (book: Book) => {
  //   addToCart(); // Call the context method to add items to the cart
  // };

  return (
    <div className="h-fit w-screen mt-12 flex flex-col items-center">
       {/* Main Banner Section */}
      <div className="flex flex-col items-center h-full ">
        {/* Illustration */}
       <div className="w-full flex justify-center">
           {/* <div className="flex justify-center "> */}
             {/* Bookstore illustration */}
             <div className=" w-screen max-w-4xl h-96 bg-green-400 shadow-md">
              {/* <img src="mmm"/> */}
               {data.map((item,i)=>(
                <div 
                key={i}
                className="" >
                  <img className="h-96 w-full object-cover" src={item.image}/>
                    {/* style={{
                       background: `url(${item.image})`,
                     backgroundSize:"cover",
                    }} */}
                    
                   
                  </div>
              ))}
              </div>
              </div>
      {/* Cart Indicator */}
      {/* <div className="fixed top-4 right-4 bg-blue-600 text-white p-2 rounded-lg shadow-md">
        <span>Cart Items: {cartItems}</span>
      </div> */}

      {/* Main Banner Section */}
      <div className="flex flex-col items-center mt-4">
        <h1 className="text-4xl font-bold text-gray-900">Discover Your Next Favorite Book Here</h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore our curated collection of new and popular books to find your next literary adventure.
        </p>

        {/* Search Box */}
        <div className="mt-8">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 w-96 text-center"
            placeholder="Which book are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Handle search input change
          />
        </div>
        </div>
      </div>
      

      <Index/>

      {/* Categories Section */}
      {/* <div className="mt-16 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center">Categories</h2>
        <p className="text-center text-gray-600 mb-8">Browse our featured categories</p>
        <div className="flex justify-center space-x-8"> */}
          {/* Category 1 */}
          {/* <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden">
            <img src={candle1} alt="Manga" className="w-full h-48 object-cover" />
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold">Manga</h3>
            </div>
          </div> */}

          {/* Category 2 */}
          {/* <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden">
            <img src={candle2} alt="Biography" className="w-full h-48 object-cover" />
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold">Biography</h3>
            </div>
          </div> */}

          {/* Category 3 */}
          {/* <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden">
            <img src={mmm} alt="Fiction" className="w-full h-48 object-cover" />
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold">Fiction</h3>
            </div>
          </div>
        </div>
      </div> */}

      {/* Best Sellers Section */}
      {/* <div className=" w-full max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-red-600">Best Sellers</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredBestSellers.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{book.title}</h3>
              <p className="text-red-500 mt-2">{book.price}</p>
              <button
                onClick={() => handleAddToCart(book)} // Add specific book to cart
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 flex items-center justify-center"
              >
                <span>Add to Cart</span>
                <BsArrowRightShort size={24} />
              </button>
            </div>
          ))}
        </div>
      </div> */}

      {/* Discover Books Section */}
      {/* <div className="mt-16 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-red-600">Discover Books</h2>
        <p className="text-center text-gray-600 mb-8">Explore our comprehensive collection of books.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredDiscoverBooks.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{book.title}</h3>
              <p className="text-red-500 mt-2">{book.price}</p> */}
              {/* <button
                onClick={() => handleAddToCart(book)} // Add specific book to cart
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 flex items-center justify-center"
              >
                <span>Add to Cart</span>
                <BsArrowRightShort size={24} />
              </button> */}
            {/* </div> */}
          {/* ))} */}
        {/* </div> */}
      {/* </div> */}
    {/* </div> */}
    </div>
  );
};

export default Home;