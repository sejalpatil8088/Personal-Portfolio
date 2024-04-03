import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Testimonial = () => {
  return (
    <div>
        <div className=' text-center  mt-14'  >
            <h1 className='font-bold text-3xl mt-6'>Testimonial</h1>
            <p className='font-bold mt-4'>Here are some Testimonials from out clients.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 ml-16 mr-16 mb-6">
        {/* Testimonial 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <div className="rounded-full bg-gray-200 w-16 h-16 flex items-center justify-center mb-4">
            <img src="https://static.thenounproject.com/png/1783148-200.png" alt="Human Logo" className="w-12 h-12 rounded-full" />
          </div>
          <p className="text-sm text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          <p className="font-bold mt-2">John Doe</p>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <div className="rounded-full bg-gray-200 w-16 h-16 flex items-center justify-center mb-4">
            <img src="https://static.thenounproject.com/png/1783148-200.png" alt="Human Logo" className="w-12 h-12 rounded-full" />
          </div>
          <p className="text-sm text-center">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
          <p className="font-bold mt-2">Jane Smith</p>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <div className="rounded-full bg-gray-200 w-16 h-16 flex items-center justify-center mb-4">
            <img src="https://static.thenounproject.com/png/1783148-200.png" alt="Human Logo" className="w-12 h-12 rounded-full" />
          </div>
          <p className="text-sm text-center">"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
          <p className="font-bold mt-2">David Brown</p>
        </div>
      </div>
      
    </div>
  )
}

export default Testimonial