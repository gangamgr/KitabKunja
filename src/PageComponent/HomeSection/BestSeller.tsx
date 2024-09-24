import React, { useEffect, useState } from 'react';
// import Axios from '../../Component/HOC/Axios/Axios';
import BestSellerCard from './BestSellerCard';


function BestSeller(){

  const data=[
    {
        image:"",
        title:"Book name",
        price:"300",
        author:"Murakami",
    },
    {
        image:"",
        title:"Book name",
        price:"300",
        author:"Murakami",
    },
    {
        image:"",
        title:"Book name",
        price:"300",
        author:"Murakami",
    },
    {
        image:"",
        title:"Book name",
        price:"300",
        author:"Murakami",
    },
    {
        image:"",
        title:"Book name",
        price:"300",
        author:"Murakami",
    },
    {
        image:"",
        title:"Book name",
        price:"300",
        author:"Murakami",
    },
  ];



  const [products, setProducts] = useState([]);

//   const getProducts = () => {
//     Axios
//       .get("/")
//       .then((res:any) => {
//         if (res.status === 200) {
//             setProducts(res.data.result);
//           // console.log(res.data.result);
//         }
//       })
//     //   .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

  return (
    <div className="w-full max-w-7xl">
      <h2 className="text-3xl font-bold text-center text-red-600">Best Sellers</h2>
      <div className="mt-8 grid grid-cols-4 gap-6">
        {data.map((item,i) => {
            return(
                <BestSellerCard
                key={i}
                title={item.title}
                price={item.price}
                image={item.image}
                author={item.author}
              />
            )
         
})}
      </div>
    </div>
  );
};

export default BestSeller;