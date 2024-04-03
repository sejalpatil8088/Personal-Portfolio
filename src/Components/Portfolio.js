import React from 'react';


const Portfolio = () => {
  return (
    <div>
        <div className=' text-center  mt-14' >
            <h1 className='font-bold text-3xl'>Portfilio</h1>
            <p className='font-bold mt-4'>Click o the cards to see my Portfilios of related category</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8 ml-14 mr-14">
      
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png" alt="UI/UX Designing" className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-bold mb-2">UI/UX Designing</h2>
          <p className="text-sm line-clamp-7">We provide stunning designs for your UI/UX project , we can handle any project related to landing page designs, ecommerce designs , portfolio website designs, business websites, and many more as per your requirements.</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <img src="https://cdn.logojoy.com/wp-content/uploads/20220329171712/dating-app-logo-tinder.png" alt="App Designing" className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-bold mb-2">App Designing</h2>
          <p className="text-sm line-clamp-7">Our app design service specializes in crafting captivating and user-centric mobile applications. From sleek interfaces to seamless functionality, we prioritize user experience and innovation.</p>
        </div>
       
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/011/153/368/small/3d-website-developer-working-on-laptop-illustration-png.png" alt="Web Developer" className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-bold mb-2">Web Developer</h2>
          <p className="text-sm line-clamp-7">Our web development service is dedicated to crafting impactful digital experiences. We specialize in creating dynamic and user-friendly websites that resonate with your audience and elevate your online presence.</p>
        </div>
       
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <img src="https://media.licdn.com/dms/image/D4D12AQHSPhtapnAwQQ/article-cover_image-shrink_600_2000/0/1655191968182?e=2147483647&v=beta&t=q9ETjXe6CEX4ly8Gf1zXcwjxO9Q-qEnNcIsLVeSePRs" alt="Graphics Designing" className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-bold mb-2">Graphics Designing</h2>
          <p className="text-sm line-clamp-7">We provide amazing and professinoal Graphic Assets for your projects such as social media post designs, poster designs, youtube and blogs thumbnail designs, product lable designs , and many more categories as per your requirements.</p>
        </div>
       
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <img src="https://cdn.sanity.io/images/tlr8oxjg/production/7b7f05720074a848850e0705779306c27da5a6cf-1065x597.png?w=3840&q=80&fit=clip&auto=format" alt="Product Designing" className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-bold mb-2">Product Designing</h2>
          <p className="text-sm line-clamp-7">Our product design service is committed to transforming your ideas into innovative and user-centric solutions. We specialize in crafting compelling and intuitive designs that resonate with your target audience and differentiate your brand in the market.</p>

        </div>
      
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <img src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png" alt="Social Media" className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-bold mb-2">Social Media</h2>
          <p className="text-sm line-clamp-6">Our social media content service specializes in crafting engaging and impactful content that resonates with your audience across various platforms.</p>
        </div>
      </div>

    </div>
  )
}

export default Portfolio;
