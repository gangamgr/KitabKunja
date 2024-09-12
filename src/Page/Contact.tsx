import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className=' w-screen bg-black '>
      <div className=' h-2/3 pt-24 w-screen bg-gray-300 flex flex-col items-center'>

        <div className='flex flex-col justify-end gap-4 font-serif bg-red-400 h-64 w-96'>
          <div className='text-4xl font-bold h-20 bg-white'>Contact Us</div>
          <div className='w-96 h-24 bg-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, suscipit a.</div>
        </div>

        <div className='bg-green-400 mt-6 h-64 w-96'>
          {/* <div className='flex flex-row w-fit gap-24'> */}

            <div className='flex flex-col h-20'>
              <div className='font-semibold'>ADDRESS :</div>
              <div className=''>Tilottama-2, Rupandehi</div>
            </div>

            <div className='flex flex-col h-20'>
              <div className='font-semibold'>PHONE :</div>
              <div className=''>+977 9814429259</div>
            </div>

          {/* </div> */}

          {/* <div className='flex flex-row gap-24 mt-6'> */}

            <div className='flex flex-col h-20'>
              <div className='font-semibold'>EMAIL :</div>
              <div className=''>gmgr@gmail.com</div>
            </div>

          {/* </div> */}

        </div>

      </div>

      <div className='bg-yellow-500 h-screen w-screen flex flex-col justify-center items-center'>

        <div className='h-44 bg-blue-300 flex flex-col justify-center items-center'>
          <div className='font-serif font-semibold text-2xl'>Get In Touch</div>
          <div className='h-20 text-center bg-white w-2/3 flex items-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti omnis sunt officiis consequatur labore provident ad qui quisquam quod id.</div>
        </div>

        <div className='flex flex-col gap-6 mt-12 bg-purple-700'>

          <div className='flex flex-row gap-20'>
            <div className=''> <input type='text' placeholder='Name' className='h-10 w-64 border-2 border-gray-400' /> </div>
            <div> <input type='text' placeholder='Email' className='h-10 w-64 border-2 border-gray-400' /> </div>
          </div>

          <div className='flex flex-row gap-20'>
            <div className=''> <input type='text' placeholder='Occassion' className='h-10 w-64 border-2 border-gray-400' /> </div>
            <div> <input type='text' placeholder='Budget' className='h-10 w-64 border-2 border-gray-400' /> </div>
          </div>

          <div><input type='text' placeholder='Message' className='border-2 border-gray-400 h-44 w-11/12' /></div>
          <div className='flex justify-end '><button className=' h-8 w-32 border-2 text-sm font-semibold rounded-3xl bg-yellow-700'>SEND REQUEST</button></div>

        </div>
      </div>

      <div className=''>
      {/* <div className='flex flex-col w-3/6'>
                    <div className='font-bold h-14 flex items-center'>Real-time Tracking</div>
                    <div className='bg-white'><iframe src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28270.986386245644!2d83.46055956883549!3d27.65939148900412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968447bb9ad33f%3A0xe7d515a7b43ee88c!2sShankar%20Nagar%2C%20Tilottama%2032907!5e0!3m2!1sen!2snp!4v1696248346149!5m2!1sen!2snp" 
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>" 
                    width="460" height="330" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div> */}
                </div>

    </div>
  )
}

export default Contact
