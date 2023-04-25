import React from 'react';
import Navigation from '../components/navigation'
import Details from '../components/details'



function Home () {
  return (
      <div className=" pt-4 pr-6 bg-gray-150">
          
          <Navigation />
          <div>
             <Details />
          </div>
          
      </div>
  )
}

export default Home;