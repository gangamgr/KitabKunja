import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';
import candle1 from "../../Resources/candle1.jpg"
import axios from "../../HOC/Axios/axios"

// interface Categories({id,name,image}:any) {
//   id: number;
//   image:string
//   name: string;
// }

function Categories ()  {

  const list=[
    {
    image:candle1,
    name:"Literature",
    },
    {
      image:"",
      name:"Literature",
      },
      {
        image:"",
        name:"Literature",
        },
    {
      image:"",
      name:"Literature",
      },
      {
        image:"",
        name:"Literature",
        },
  ];

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(()=>{
    const fetch=async()=>{
      try{
        await axios.get(`/category`).then((res:any)=>{
          console.log(res);
          setData(res.data.result);
        });
      }catch(error){
        console.log(error);
      };
      fetch();
    };
  },[]);

 

  return (
    <div>
      
     {/* Categories Section */}
     <div className="h-fit w-full  ">
       <h2 className="text-4xl font-bold text-center">Categories</h2>
       <p className="text-center text-gray-600 mb-8">Browse our featured categories</p>
        <div className="flex justify-center space-x-8"></div>
        </div>
      
      {/* categories card */}
      <div className='grid grid-cols-4 w-full h-fit gap-5 '>
        {list.map((item,i) => {
          return(
           <CategoriesCard
           key={i}
           image={item.image}
           name={item.name}
        
           />
          
        );
})}
      </div>
    </div>
  );
}

export default Categories;
