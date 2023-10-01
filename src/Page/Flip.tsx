import React, {useState} from 'react'
import candle2 from "../Resources/candle2.jpg"
import candle1 from "../Resources/candle1.jpg"


function Flip() {

    const [activeCard, setActiveCard]=useState(false)

    const handleFlip=()=>{
        setActiveCard(!activeCard)
    }
  return (
    <div className='h-fit items-center flex justify-center '>
      <div
      onClick={handleFlip}
      className={`relative card ${activeCard? 'cardFlip':''}`}>
        {/* front */}
        <div className='front'>
            <img src={candle2} alt='image' className='w-60 h-96'/>
        </div>

        {/* back */}
        <div className='absolute top-0 back'>
        <img src={candle1} alt='image' className='w-60 h-96'/>
        </div>
      </div>
    </div>
  )
}

export default Flip
