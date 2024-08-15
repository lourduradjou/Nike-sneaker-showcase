import React from 'react'
import Button from './Button'

const ServiceCart = ({ imgURL, label, subtext, bgColor }) => {
	return (
		<div className={`${bgColor ? 'bg-lime-300': 'bg-white'} flex flex-1 flex-col items-center shadow-2xl  lg:px-12 px-6 lg:py-12 py-6 rounded-2xl max-lg:mt-12 hover:scale-105 duration-300`}>
			<img
				src={imgURL}
				alt={label}
				width={40}
				height={40}
				className='max-w-lg flex items-center justify-start bg-primary-yellow rounded-lg hover:bg-coral-red duration-300'
			/>

			<h1 className='flex flex-wrap tracking-wide font-bold capatalize font-palanquin text-2xl mt-4'>
				{label}
			</h1>
            <div className='break-word '>
                <p className={`${bgColor ? 'bg-slate-100 opacity-60 rounded-lg p-4 ' : ' bg-slate-200 opacity-60 rounded-lg p-4'} text-black font-montserrat text-md md:text-sm flex-wrap mt-4 text-center hover:opacity-100 duration-300`}>
                    {subtext}
                </p>
            </div>
		</div>
	)
}

export default ServiceCart
