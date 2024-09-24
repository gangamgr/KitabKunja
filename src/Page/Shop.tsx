import React,{useState,useEffect} from 'react';
// import pic from '../Resources/shop1.jpg'
import ShopCard from '../PageComponent/ShopCard'
import collectionn from '../Resources/collectionn.jpg'
import axios from "../HOC/Axios/axios";

function Shop() {
  // const data=[
  //   {
  //     image:"",
  //     title:"Book name",
  //     price:"Rs.400",
  //     author:"XYZ",
  //   },
  //   {
  //     image:"",
  //     title:"Book name",
  //     price:"Rs.400",
  //     author:"XYZ",
  //   },
  //   {
  //     image:"",
  //     title:"Book name",
  //     price:"Rs.400",
  //     author:"XYZ",
  //   },
  //   {
  //     image:"",
  //     title:"Book name",
  //     price:"Rs.400",
  //     author:"XYZ",
  //   },
  //   {
  //     image:"",
  //     title:"Book name",
  //     price:"Rs.400",
  //     author:"XYZ",
  //   },
  //   {
  //     image:"",
  //     title:"Book name",
  //     price:"Rs.400",
  //     author:"XYZ",
  //   },
  // ]



  const [products, setProducts] = React.useState([]);
  const [category,setCategory]=React.useState([]);

    const getCategory = async () => {
      await axios
        .get("/product")
        .then((res) => {
          if (res.status === 200) {
              setCategory(res.data.result);
            // console.log(res.data.result);
          }
        })
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      getCategory();
    }, []);

    useEffect(()=>{
      const getProducts = async ()=>{
        try{
          await axios
              .get(`/content`)
              .then((res)=>{
                setProducts(res.data.result);
              })
        }catch (error){
          console.error(error)
        }
      };
     
    });

    // useEffect(()=> {
    //   getProducts();
    // },[]);

  return (
    <div className=''>
      <div className='h-96 w-screen mt-24 bg-red-500 relative flex justify-center items-center'>
        <img src={collectionn} className='relative w-screen h-96 ' /> 
         <div className=' font-serif text-emerald-800 font-bold text-4xl absolute'>OUR COLLECTION</div>
        
      </div>

      <div className='h-fit w-screen flex justify-center items-center flex-col '>
        <div className=' mt-16  flex items-center font-semibold font-serif text-4xl '>ALL TIME FAVOURITE BOOKS</div>
        <div className='h-10 w-fit text-base font-serif '>Having a place set aside for an activity you love makes it more likely you'll do it.Hence,discover the best of the best world candle through us.</div>

        <div className="w-full max-w-7xl">
      {/* <h2 className="text-3xl font-bold text-center text-red-600">Best Sellers</h2> */}
      <div className="mt-8 grid grid-cols-4 gap-6">
        {products.map((item,i) => {
            return(
                <ShopCard
                key={i}
                // title={item.name}
                // price={item.price}
                // image={item.image}
                // author={item.author}
              />
            )
         
})}
      </div>
    </div>

        {/* <div className='w-screen h-2/3 mt-5 bg-red-300 flex flex-col gap-10'>

          <div className='  flex flex-row gap-6 items-center justify-center'>
            <div className='grid grid-cols-4 gap-5 w-11/12 mx-auto'>
            {data.map((item,i)=>(
             <div key={i}>
              <ShopCard
              key={i}
              picture={item.picture}
              title={item.title}
              price={item.price}
              />
              
              
              
             </div>
            ))
          }
              </div> */}

            {/* <div className=' w-80 bg-purple-600'>
              <div className='h-80 w-80'>IMG</div>
              <div className=' w-80 font-serif font-lg bg-white'>
                <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
                <div className='h-10 ml-2'>Rs.500</div>
                <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
              </div>
            </div> */}

            {/* <div className=' w-80 bg-purple-600'>
              <div className='h-80 w-80'>IMG</div>
              <div className=' w-80 font-serif font-lg bg-white'>
                <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
                <div className='h-10 ml-2'>Rs.500</div>
                <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
              </div>
            </div> */}

            {/* <div className=' w-80 bg-purple-600'>
              <div className='h-80 w-80'>IMG</div>
              <div className=' w-80 font-serif font-lg bg-white'>
                <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
                <div className='h-10 ml-2'>Rs.500</div>
                <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
              </div>
            </div> */}

            {/* <div className=' w-80 bg-purple-600'>
              <div className='h-80 w-80'>IMG</div>
              <div className=' w-80 font-serif font-lg bg-white'>
                <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
                <div className='h-10 ml-2'>Rs.500</div>
                <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
              </div>
            </div> */}

          {/* </div> */}

          {/* <div className='  flex flex-row gap-6 items-center justify-center'>

            <div className=' w-80 bg-purple-600'>
              <div className='h-80 w-80'>IMG</div>
              <div className=' w-80 font-serif font-lg bg-white'>
                <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
                <div className='h-10 ml-2'>Rs.500</div>
                <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
              </div>
            </div>

            <div className=' w-80 bg-purple-600'>
              <div className='h-80 w-80'>IMG</div>
              <div className=' w-80 font-serif font-lg bg-white'>
                <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
                <div className='h-10 ml-2'>Rs.500</div>
                <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
              </div>
            </div>

            <div className=' w-80 bg-purple-600'>
              <div className='h-80 w-80'>IMG</div>
              <div className=' w-80 font-serif font-lg bg-white'>
                <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
                <div className='h-10 ml-2'>Rs.500</div>
                <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
              </div>
            </div>

            <div className=' w-80 bg-purple-600'>
              <div className='h-80 w-80'>IMG</div>
              <div className=' w-80 font-serif font-lg bg-white'>
                <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
                <div className='h-10 ml-2'>Rs.500</div>
                <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
              </div>
            </div>

          </div> */}
        {/* </div> */}

      </div>

      {/* <div className='h-fit w-screen bg-green-800 pt-8'>
        <div className='h-24 flex items-center justify-center font-semibold font-serif text-xl bg-yellow-400'>NEW ARRIVAL</div>

        <div className='  flex flex-row gap-6 items-center justify-center'>

          <div className=' w-80 bg-purple-600'>
            <div className='h-80 w-80'>IMG</div>
            <div className=' w-80 font-serif font-lg bg-white'>
              <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
              <div className='h-10 ml-2'>Rs.500</div>
              <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
            </div>
          </div>

          <div className=' w-80 bg-purple-600'>
            <div className='h-80 w-80'>IMG</div>
            <div className=' w-80 font-serif font-lg bg-white'>
              <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
              <div className='h-10 ml-2'>Rs.500</div>
              <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
            </div>
          </div>

          <div className=' w-80 bg-purple-600'>
            <div className='h-80 w-80'>IMG</div>
            <div className=' w-80 font-serif font-lg bg-white'>
              <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
              <div className='h-10 ml-2'>Rs.500</div>
              <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
            </div>
          </div>

          <div className=' w-80 bg-purple-600'>
            <div className='h-80 w-80'>IMG</div>
            <div className=' w-80 font-serif font-lg bg-white'>
              <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
              <div className='h-10 ml-2'>Rs.500</div>
              <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
            </div>
          </div>

        </div>

      </div> */}

       {/* <div className='h-52 w-screen flex justify-center items-center bg-orange-500 mt-20'>
       <div className=' w-96 text-center tracking-wider font-serif font-semibold text-4xl'>KEEP UPTO DATE ON OUR LATEST PRODUCTS</div>
      </div> */}
    </div>
  )
}

export default Shop;




// import React, { useEffect, useState } from 'react';
// import axios from '../HOC/Axios/axios';

// // Define the type for product data
// interface Product {
//   id: number;
//   bookname: string;
//   author: string;
//   bookprice: number;
//   imageUrl: string;
// }

// // Functional Component
// function Shop () {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   // Function to fetch data from backend
//   // const fetchProducts = async () => {
//   //   try {
//   //     const response = await axios.get<Product[]>('/content');
//   //     setProducts(response.data);
//   //     setLoading(false);
//   //   } catch (error) {
//   //     setError('Failed to fetch products');
//   //     setLoading(false);
//   //   }
//   // };

//   const getProducts=()=>{
//     try{
//       axios 
//           .get(`${process.env.REACT_APP_BASE_URL}/content`)
//           .then((res)=>{
//             console.log(res);
//             setProducts([...res.data.data]);
//           });
//     }catch(error){
//       setError("Failed to fetch products");
//       setLoading(false);
//     }
//   };

//   // Fetch products when component mounts
//   useEffect(() => {
//     getProducts();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="app">
//       <h1>Best Sellers</h1>
//       <div className="product-grid">
//         {products.map((item,i) => (
//           <div key={item.id} className="product-card">
//             <img src={item.imageUrl} alt={item.imageUrl} className="product-image" />
//             <h3 className="product-name">{item.bookname}</h3>
//             {/* <p className="product-author">{product.author}</p> */}
//             <p className="product-price">Rs.{item.bookprice}</p>
//             <button className="add-to-cart-btn">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;

