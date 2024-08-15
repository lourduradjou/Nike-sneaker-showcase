import React from 'react'
import { star } from '../assets/icons'

const PopularCard = ({ imgURL, name, price }) => {
	return (
		<div className='flex flex-1 justify-center items-center flex-col w-full mt-2 '>
			<img className='object-contain ' src={imgURL} alt={name}  />
			<div className='max-md:mx-auto'>
			<div className='flex justify-start gap-2.5 mt-8'>
				<img
					className=''
					src={star}
					alt='star'
					width={24}
					height={24}
				/>
				<p className='font-palanquin text-lg'>(4.5)</p>
			</div>

			<p className='tracking-normal text-2xl font-semibold font-montserrat mt-2 '>{name}</p>
			<p className='font-palanquin tracking-wide leading-normal text-xl  text-primary-yellow font-semibold'>{price}</p>
			</div>
		</div>
	)
}

export default PopularCard
