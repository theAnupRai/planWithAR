import React from 'react'
import { useState } from 'react';

const Card = ({image, id, info, price, name, removeTour}) => {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`

    function readmoreHandler() {
        setReadmore(!readmore);
    }
  return (
    <div className='flex flex-col items-center w-[400px] m-4 p-4 rounded-10 shadow-md h-max-content'>
        <img className='w-[380px] h-[420px] aspect-w-1 aspect-h-1 object-cover' src={image} alt="tour image" />
        
        <div>
            <div>
                <h4 className='font-[900] text-green-600'>₹ {price}</h4>
                <h4 className='font-[900] text-lg'>{name}</h4>
            </div>

            <div className='text-[17px]'>
                {description} 
                <span className='text-blue-400 cursor-pointer font-[500]' onClick={readmoreHandler}>
                    {readmore ? "  Show Less" : "Read More"}
                </span>
            </div>

        </div>

        <div>
            <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 text-white font-bold py-2 px-6 w-[250px] mt-4 rounded-full shadow-lg" onClick={()=>removeTour(id)}>Not Interested</button> 
        </div>
    </div>
  )
}

export default Card