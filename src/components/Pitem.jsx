import React from 'react'
import Item from "../assets/item1.png"

const Pitem = () => {
  return (
    <section id='pitem'>
        <div className='flex gap-x-3 justify-between flex-wrap'>
        <div className="w-full lg:w-[24%]">
            <img className='w-full' src={Item} alt="item" />
        </div>
        <div className="w-full lg:w-[24%] my-3 lg:my-0">
            <img className='w-full' src={Item} alt="item" />
        </div>
        <div className="w-full lg:w-[24%]">
            <img className='w-full' src={Item} alt="item" />
        </div>
        <div className="w-full lg:w-[24%]">
            <img className='w-full' src={Item} alt="item" />
        </div>
    </div>
    </section>
  )
}

export default Pitem