import PopularCard from '../components/PopularCard'
import { products } from '../constants'

const PopularProducts = () => {
	return (
		<div className='max-container flex justify-start flex-1 flex-col'>
			<p className='text-4xl font-bold font-palanquin my-6 sm:my-2'>
				Our <span className='text-primary-yellow'>Popular</span>{' '}
				Products
			</p>
			<p className='text-md font-montserrat text-slate-gray my-2 lg:max-w-lg'>
				Experience top-notch quality and style with our sought-after
				selections. Discover a word class of comfort design and value
			</p>
			<div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-4 '>
				{products.map((product) => (
					<PopularCard key={product.name} {...product} />
				))}
			</div>
		</div>
	)
}

export default PopularProducts
