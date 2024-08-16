import React from 'react'
import { reviews } from '../constants'
import ReviewCart from '../components/ReviewCart'

const CustomerReviews = () => {
	return (
		<section className='flex flex-col flex-1 justify-center items-center max-container'>
			<p className='text-4xl font-bold text-black font-palanquin text-center max-sm:text-3xl'>
				Hear What Our{' '}
				<span className='text-primary-yellow'>Customers</span> Say
			</p>
			<div className='flex flex-col lg:flex-row justify-evenly items-center w-full mt-10'>
				{reviews.map((review) => (
					<ReviewCart {...review} />
				))}
			</div>
		</section>
	)
}

export default CustomerReviews
