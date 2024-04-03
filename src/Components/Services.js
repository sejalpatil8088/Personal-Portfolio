import React, { useState } from 'react';

const Services = () => {
     const [showAll , setShowAll] = useState(false);

  return (
    
    <div>
        <div className='text-center font-bold '>
            <h1 className='text-3xl mt-10'>Services</h1>
            <p className='mt-2'>Here are the services we are providing to you</p>
        </div>
        <div class="text-center font-bold">
          <div class="grid grid-cols-3 gap-4 mt-20">
              <div class="bg-gray-200 p-4 text-gray-700 text-sm">UI/UX Designing</div>
              <div class="bg-gray-200 p-4 text-gray-700 text-sm">App UI/UX Designing</div>
              <div class="bg-gray-200 p-4 text-gray-700 text-sm">Web Developer</div>
              <div class="bg-gray-200 p-4 text-gray-700 text-sm">Graphics Designing</div>
              <div class="bg-gray-200 p-4 text-gray-700 text-sm">Product Designing</div>
              <div class="bg-gray-200 p-4 text-gray-700 text-sm">Social Media</div>
              {showAll && (
                        <>
                            <div className="bg-gray-200 p-4 text-gray-700 text-sm">Frontend Developer</div>
                            <div className="bg-gray-200 p-4 text-gray-700 text-sm">UI Developer</div>
                            <div className="bg-gray-200 p-4 text-gray-700 text-sm">Backend Developer</div>
                        </>
                    )}
          </div>
          <button className='bg-yellow-400 text-black rounded mt-8 p-2 ' onClick={() => setShowAll(!showAll)}>{showAll ? 'Show Less' : 'View All'}</button>
        </div>
        
    </div>
  )

};

export default Services;