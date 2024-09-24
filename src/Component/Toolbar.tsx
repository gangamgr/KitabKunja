import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {PiHandbag} from 'react-icons/pi'
import { Link,useNavigate } from 'react-router-dom'
// import { useCart } from '../PageComponent/CartContext'
import candle2 from "../Resources/candle2.jpg"

function Toolbar() {
  // const { cartItems } = useCart(); // Access cart items from the context
  const navigate = useNavigate(); // Get the navigate function

  // Function to handle cart icon click
  const handleCartClick = () => {
    // Ensure the correct path is provided
    navigate('/cart'); // Navigate to the CartPage
  };


  return (
    <div className='h-fit w-fit'>
    <div className=' h-fit w-screen flex flex-row  justify-between px-20 py-3 items-center fixed '>
        {/* <div className=' w-34 h-34 '>LOGO</div> */}
        <div className='h-fit w-screen flex flex-row justify-between px-20 py-6 items-center bg-white fixed z-0'>
          {/* LOGO */}
          <div className='w-32'>
            <img src={candle2} className='w-28 h-16'/>
          </div>
        </div>

        <div className=' w-fit flex flex-row gap-10 font-semibold text-md  items-center  '>
        <Link to={'/'} className=' text-orange-600'>HOME</Link>
        <Link to={'/about'} className='hover:text-orange-600'>ABOUT US</Link>
        {/* <Link to={'/blog'} className='hover:text-orange-600'>BLOG</Link> */}
        <Link to={'/shop'} className='hover:text-orange-600'>SHOP</Link>
        <Link to={'/contact'} className='hover:text-orange-600'>CONTACTS</Link>
        </div>

        <div className=' flex flex-row items-center gap-10 '>
            {/* <div className='text-xl'><BsSearch/></div> */}
            <div className='text-2xl'><PiHandbag/></div>
            <div className=' border-2 border-orange-600 flex items-center px-7 py-3 hover:bg-orange-600 hover:text-white justify-center text-md font-medium'>LOGIN</div>
        </div>
      
    </div>
    </div>
  )
}

export default Toolbar
