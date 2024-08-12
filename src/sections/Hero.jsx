import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const Hero = () => {
	return (
		<section className='select-none w-full min-h-screen flex lg:flex-row flex-col items-center gap-10 max-container'>
			<div className='flex flex-col justify-center pt-28 padding-x'>
				<p className='font-palanquin text-slate-gray'>Your Stunning Experience With Our Shoes</p>
				<h1 className='lg:text-8xl text-4xl font-bold py-4'>
					<span>New Arrival</span>
					<br />
					<span className='font-palanquin text-[#fdc500] pr-4'>Nike</span>
					Shoes
				</h1>
				<p className='text-lg text-slate-gray py-6 lg:w-2/3'>
					Discover Stylish Nike arrivals, quality comfort and
					innovation for your active life.
				</p>
        
        <Button label='Shop Now' iconUrl={arrowRight} />

			<div className='flex justify-starts items-start flex-wrap w-full mt-20'>
				
			</div>
			</div>

			
		</section>
	)
}

export default Hero
