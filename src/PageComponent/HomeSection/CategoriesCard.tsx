import React from 'react'

function CategoriesCard({image,name}:any) {
  return (
    <div className='flex flex-row '>
        
        <div className='border rounded-md hover:scale-105 transiton-all 
     drop-shadow-md hover:shadow-md cursor-pointer ease-in-out
     duration-700 delay-100 p-4 space-x-5'>
        <div className=' w-64 h-64 bg-white rounded-lg shadow-md '><img src={image} alt={name} className="w-full h-full object-cover" /></div>
        <div className="text-center mt-2">
        
              <h3 className="text-xl font-semibold capitalize">{name}</h3>
             
          </div>
          </div>
      {/* </div> */}
     </div>
  )
}

export default CategoriesCard
