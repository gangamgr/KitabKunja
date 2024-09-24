import React,{useEffect,useState} from 'react';
import axios from '../../HOC/Axios/axios';
// import { useCart } from '../../PageComponent/CartContext';

// interface ProductProps {
//   title: string;
//   price: number;
//   imageUrl: string;
// }

function BestSellerCard({ title, price, image,author,id }:any) {
    const [categoryName, setcategoryName] = useState([]);
    const getCategoryName = () => {
      axios
        .get(`/category/${id}`)
        .then((res) => {
          setcategoryName(res.data.result);
        })
        .catch((error) => console.log(error));
    };


    const [courseName, setCourseName] = useState([]);
    const getCourseName = () => {
      axios
        .get(`/course`)
        .then((res) => {
          setCourseName(res.data.result);
        })
        .catch((error) => console.log(error));
    };
    useEffect(() => {
      getCategoryName();
      getCourseName();
    }, []);

     // Combine bestSellers and discoverBooks
//   const allBooks = [bestSellers];

//   const booksPerPage = 20;

//     const [currentPage, setCurrentPage] = useState<number>(1);

//     const totalPages = Math.ceil(allBooks.length / booksPerPage);
  
//     const currentBooks = allBooks.slice(
//       (currentPage - 1) * booksPerPage,
//       currentPage * booksPerPage
//     );
  
//     const handlePageChange = (page: number) => {
//       if (page >= 1 && page <= totalPages) {
//         setCurrentPage(page);
//       }
//     };
  
    // const handleAddToCart = (book: Book) => {
    //   addToCart(book); // Add the selected book to the cart
    // };
  

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
               {/* Pagination Controls */}
        {/* <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg mr-2 disabled:bg-gray-400"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-gray-700">{Page ${currentPage} of ${totalPages}}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg ml-2 disabled:bg-gray-400"
          >
            Next
          </button>
        </div> */}
      </div>

    //   </div>
    // </div>
  );
};

export default BestSellerCard;