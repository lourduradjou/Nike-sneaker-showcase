import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
    return (
        <footer className='max-container padding-x padding-y'>
            <div className='flex flex-col xl:flex-row text-white-400'>
                {/* Logo and Social Media Section */}
                <div className='flex flex-col justify-center max-sm:padding-x w-full lg:w-1/3 mb-8 sm:ml-16 '>
                    <a href='/'>
                        <img
                            src={footerLogo}
                            alt='footerLogo'
                            width={150}
                            height={46}
                        />
                    </a>
                    <p className='mt-6 font-montserrat text-base flex flex-wrap leading-7 max-sm:max-w-sm'>
                        Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
                    </p>
                    <div className='flex gap-5 mt-8'>
                        {socialMedia.map((icon) => (
                            <div key={icon.alt} className='bg-white-400 hover:bg-primary-yellow hover:duration-300 flex justify-center items-center w-12 h-12 rounded-full'>
                                <img
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={24}
                                    height={24}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Footer Links Section */}
                <div className='flex flex-1 padding-x flex-wrap justify-between w-full max-sm:mt-14 lg:w-2/3 mx-2 max-xl:min-w-full'>
                    {footerLinks.map((section) => (
                        <div key={section.title} className='lg:w-1/4 mb-8 lg:mb-0'>
                            <h4 className='text-white font-montserrat text-2xl mb-2'>
                                {section.title}
                            </h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li key={link.name} className='mt-2 text-base leading-7 hover:text-primary-yellow'>
                                        <a href={link.link}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Copyright and Terms Section */}
            <div className='flex flex-col lg:flex-row justify-evenly items-center sm:mt-24 mt-12 text-white font-montserrat'>
                <div className='flex justify-center items-center gap-2'>
                    <img
                        src={copyrightSign}
                        alt='copy right sign'
                        width={20}
                        height={20}
                    />
                    <p className='text-lg'>
                        Copyright. All rights reserved.
                    </p>
                </div>
                <p className='flex justify-center items-center cursor-pointer mt-4 lg:mt-0'>
                    Terms & Condition
                </p>
            </div>
        </footer>
    )
}

export default Footer
