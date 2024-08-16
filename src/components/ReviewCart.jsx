import React from 'react'
import { star } from '../assets/icons'

const ReviewCart = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className='relative flex flex-col justify-center text-center max-xl:mt-6'>
			<div className='absolute inset-0 bg-[#cdb4db] opacity-40 rounded-md'></div> {/* Background layer */}
			<div className='relative z-10 p-4'> {/* Content layer */}
				<img
					src={imgURL}
					alt={customerName}
					className='rounded-full w-[150px] h-[150px] mx-auto'
				/>
				<h2 className='mt-2 font-semibold text-2xl max-sm:text-xl leading-normal font-montserrat'>{customerName}</h2>
				<div className='flex gap-2 justify-center mt-2'>
					<img src={star} alt='rating stars' />
					<p>({rating})</p>
				</div>
				<p className='max-w-md mt-4 info-text'>{feedback}</p>
			</div>
		</div>
	)
}

export default ReviewCart
