
import React from 'react'
import Categories from '../PageComponent/HomeSection/Categories'
import Layout from '../Layout/Layout'

import BestSeller from '../PageComponent/HomeSection/BestSeller'
import Testimonials from '../PageComponent/Testimonials'
import WhyUs from '../PageComponent/HomeSection/WhyUs'


export default function index() {
  return (
   <div>

        <div className='mt-16 mb-10'>
            <Categories/>
        </div>

<div className='mt-16 mb-10'>
<BestSeller/>
</div>

<div className='mt-16 mb-10'>
<WhyUs/>
</div>

<div className='mt-16 mb-10'>
<Testimonials/>
</div>



        
</div>
  )
}

