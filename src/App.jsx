import React, { useState } from 'react'
import Tours from './components/Tours'
import data from './data'

function App() {
  const [tours, setTours] = useState(data)

  function removeTour(id){
    const newTours = tours.filter(tour=>tour.id !==id);
    setTours(newTours);
  }

  if (tours.length ===0) {
    return(
        <div className="flex justify-center items-center h-[100vh] flex-col bg-[#b3e5f4]">
            <h4 className='pb-5 text-center text-3xl font-bold'>No Tour Left</h4>
            <button className='bg-blue-900 text-2xl text-white border-none rounded-lg px-5 py-2' onClick={() => setTours(data)}>Refresh</button>
        </div>
    )
}

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App
