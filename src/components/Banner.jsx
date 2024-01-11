import React from 'react'
import Ban from "../assets/banner.png"

const Banner = () => {
  return (
   <section id='banner' className='py-[200px] relative z-[1] after:absolute after:top-0 after:left-0 after:content-[""] after:h-full after:w-full after:bg-[rgba(0,0,0,0.49)] after:z-[-1]' style={{background:`url(${Ban})`}}>
     <div className='max-w-container mx-auto'>
        <h2 className='text-white'>Banner</h2>
    </div>
   </section>
  )
}

export default Banner