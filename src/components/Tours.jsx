import React from 'react'
import Card from './Card'

const Tours = ({tours, removeTour}) => {
  return (
    <div className=''>
        <div>
            <h1 className='text-2xl font-bold justify-center items-center flex p-5'>Plan With AR</h1>
        </div>

        <div className='flex justify-center flex-wrap max-w-[1300px] mx-auto'>
            {
                tours.map((tour) => {
                return <Card key={tour.id} removeTour={removeTour} {...tour}/>
            })
            }
        </div>
    </div>
  )
}

export default Tours