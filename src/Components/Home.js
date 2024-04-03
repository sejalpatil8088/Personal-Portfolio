import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonial from './Testimonial';
import SocialMediaIcons from './SocialMediaIcons';







function Home() {
  return (
    <div className="bg-gray-400">
        <div className=' fixed top-0 left-0 w-full z-10 bg-gray-400  flex justify-between items-center pt-4 cursor-pointer '>
            <span className=' ml-6 text-2xl font-bold '>SP</span>
            <ul className="flex space-x-4 font-bold">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                   <Link to="/Services">Services</Link>
                </li>
                <li>
                    <Link to="/Portfilio">Portfilio</Link>
                </li>
                <li>
                    <Link to="/Testimonials">Testimonials</Link>
                </li>
            </ul>
           <button className='bg-yellow-300 text-black mr-6 p-2 rounded'>Let's Talk</button>
           
        </div>
        <div class="flex justify-between items-center mt-10 pt-28 pb-28">
        <div class="max-w-lg">
            <h1 class="text-4xl font-bold text-black ml-4">HEY, I'M SEJAL PATIL , FRONT END REACT DEVELOPER.</h1>
           <div class="mt-4 ml-6">
               <button class="px-4 py-2 bg-white text-black rounded mr-4 font-bold">What to discuss</button>
               <button class="px-4 py-2 bg-white text-black rounded font-bold">Let's Talk</button>
           </div>
        </div>

    <div>
        <img src="../Images/img2.jpg" alt="img1" class="w-60 h-auto  mr-14 rounded-full" />
    </div>
   </div>
   <div flex items-center >
        <ul class="flex space-x-20  pl-10 pt-6 pb-6 font-bold text-2xl text-white bg-black ">
            <li><span class="text-yellow-500">&#9733;</span> UI/UX</li>
            <li><span class="text-yellow-500">&#9733;</span> Development</li>
            <li><span class="text-yellow-500">&#9733;</span> Product Design</li>
            <li><span class="text-yellow-500">&#9733;</span> Social Media Design</li>
            <li><span class="text-yellow-500">&#9733;</span> Branding</li>
        </ul>
    </div>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <SocialMediaIcons/>
        
        
        
</div>
  )
}

export default Home;
