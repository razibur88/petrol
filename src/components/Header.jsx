import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhone,FaFacebookF } from "react-icons/fa6";


const Header = () => {
  return (
    <section className='py-3 bg-headerbg'>
        <div className='max-w-container mx-auto'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/6 sm:w-1/2">
                <div className="flex items-center">
                <div className="text-[red]">
                <CiMail />
                </div>
                    <p className='text-white'>mail@yourcompany.com</p>
                </div>
                </div>
                <div className="w-full lg:w-1/6 sm:w-1/2">
                <div className="flex items-center justify-center lg:justify-start">
                <FaPhone className="text-headerIcon" />
                    <p className='text-white'>+896 120 5889 (Toll free)</p>
                </div>
                </div>
                <div className="w-full sm:w-full lg:w-4/6">
                <div className="flex justify-center lg:justify-end gap-x-8">
                    <FaFacebookF className='text-headerIcon' />
                    <FaFacebookF className='text-headerIcon' />
                    <FaFacebookF className='text-headerIcon' />
                    <FaFacebookF className='text-headerIcon' />
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header