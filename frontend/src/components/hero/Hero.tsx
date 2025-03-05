import React from 'react'

import { assets } from '../../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <>
    <div className="w-full bg-white pt-18">
        <div className="w-4/5 mx-auto relative">
            <img src={assets.header_img} alt="" />
            <div className="absolute inset-0 bg-black rounded-3xl" style={{opacity:0.2}}></div>
            <div className="absolute flex w-full h-full top-0">
                <div className="w-3/5 relative">
               <div className="absolute top-1/2 left-2/5 transform -translate-x-1/2 -translate-y-1/2">
               <h2 className="text-white font-bold text-5xl mb-6 tracking-wider leading-14">
                Order your <br/>favourite food here
                </h2>
                <p className="mb-8 text-white tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa itaque sequi dolor nesciunt iste recusandae? Blanditiis est ut odit soluta numquam fugiat, harum possimus! Veniam culpa deserunt excepturi ad assumenda.</p>
                <button className="bg-white text-black rounded-4xl px-4 py-2 font-medium">View Menu</button>
               </div>
                </div>
                <div className="w-2/5"></div>

            </div>
            
        </div>
        
    </div>
    </>
  )
}

export default Hero;
