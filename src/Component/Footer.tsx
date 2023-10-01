import React from 'react';
import {BiCurrentLocation} from 'react-icons/bi'
import {BsTelephoneInbound} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoMessenger} from 'react-icons/bi'

function Footer() {
    return (
        <div className='h-fit items-center mt-10 px-4 bg-gray-700 py-10 flex gap-4 flex-col'>
        <div className='h-fit w-full grid grid-cols-3 bg-gray-700'>
            <div className=' py-24 px-4 flex text-white justify-center flex-col'>
                <div className='text-2xl py-4 font-semibold'> Contact Us</div>
                <div className='flex flex-row gap-2 items-center'>
                    
                    <BiCurrentLocation className='text-orange-700'/>                   
                    Shankarnagar-2, Rupandehi
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <BsTelephoneInbound className='text-orange-700'/> 9864453222</div>
                <div className='flex flex-row gap-2 items-center'>
                    <AiOutlineMail className='text-orange-700'/> sadhanaagaut@gmail.com</div>
            </div>
            <div className=' gap-12 text-white font-mono flex flex-col justify-center items-center'>
                <div className='text-center'>Cleanse, moisturize and soothe your skin with all natural handmade soap made with organic oils and plant butters,
                     pure essential oils, organic herbs, and spices.</div>
            
            <div className='flex gap-4 flex-row'>
                <span className='border h-10 w-10 rounded-full border-white items-center flex justify-center'><BsTwitter className='text-lg'/></span>
                <span className='border h-10 w-10 rounded-full border-white items-center flex justify-center'><BiLogoFacebook className='text-xl'/></span>
                <span className='border h-10 w-10 rounded-full border-white items-center flex justify-center'><AiOutlineInstagram className='text-xl'/> </span>
                <span className='border h-10 w-10 rounded-full border-white items-center flex justify-center'><BiLogoMessenger className='text-xl'/></span>
            </div>
            </div>
            <div className=' flex flex-col items-end px-6 justify-center text-white'>
                <div className='text-2xl font-semibold '> Working Hours</div>
                <div className='flex flex-row gap-2 items-center'> <span className='text-orange-700 text-xl font-semibold'> Mon-Fri: </span> 8:00am-6:00pm</div>
                <div className='flex flex-row gap-2 items-center'> <span className='text-orange-700 text-xl font-semibold'> Sat: </span> 8:00am-6:00pm</div>
                <div className='flex flex-row gap-2 items-center'> <span className='text-orange-700 text-xl font-semibold'> Sun </span> 7:00am-5:00pm</div>
            </div>
        </div>
        <div className=' bg-gradient-to-r from-gray-900 to-transparent border mt-16  w-3/4 '></div>
        <div className='text-gray-500 font-mono'> Copyright @ 2020 lEMANI BY WebGEniusLab. All Rights Reserved.</div>
        </div>
    )
}

export default Footer