import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import ScrollspyNav from "react-scrollspy-nav";

const Navbar = () => {
    let [show, setShow] = useState(false)

    let handleShow = () =>{
        setShow(!show)
    }
  return (
    <section className='bg-[#F40404] py-3 fixed w-full top-0 left-0 z-50'>
        <div className='max-w-container mx-auto'>
        <div className="flex justify-between items-center">
            <div className="">
                <a href="#"><img src={Logo} alt="" /></a>
            </div>
            <div className="">
                <ScrollspyNav scrollTargetIds={["banner", "pitem", "footer"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true">
                <ul className={`lg:flex lg:gap-x-8 absolute left-0 top-0 lg:static z-50 ${show == true ? "top-[150px] sm:top-[130px] w-full left-0 bg-[green] py-6 text-center transition duration-300 ease-in-out"  : "top-[-300px] left-0 w-full transition duration-300 ease-in-out"} `}>
                    <li className='py-2 lg:py-0'><a className='font-pops text-white text-[16px] font-semibold hover:text-[#222] py-8' href="#banner">Home</a></li>
                  
                    
                    <li className='py-2 lg:py-0'><a className='font-pops text-white text-[16px] font-semibold hover:text-[#222]' href="#pitem">Gallery</a></li>
                  
                    <li className='py-2 lg:py-0'><a className='font-pops text-white text-[16px] font-semibold border-2 border-[#fff] py-2 px-4 hover:text-[#222] hover:bg-white' href="#footer">Contact</a></li>
                </ul>
                </ScrollspyNav>
                
            </div>
            <div className="lg:hidden" onClick={handleShow}>
                {show == true ? <RxCross1 /> : <FaBars />}
            </div>
        </div>
    </div>
    </section>
  )
}

export default Navbar