import React from 'react'
import {
	Hero,
	CustomerReviews,
	PopularProducts,
	Services,
	SpecialOffers,
	Subscribe,
	SuperQuality,
} from './sections/index'
import Navbar from './components/Navbar'

const App = () => {
	return (
		<main className='relative'>
			<Navbar />
			<section className='xl:padding-1 wide:padding-r padding-b'>
				<Hero />
			</section>
			<section className='bg-slate-100 padding-x py-6'>
				<PopularProducts />
			</section>
			<section className='padding'>
				<SuperQuality />
			</section>
			<section className='padding-x py-10'>
				<Services />
			</section>
			<section className='padding'>
				<SpecialOffers />
			</section>
			<section className='padding'>
				<Subscribe />
			</section>
			<section className='padding'>
				<CustomerReviews />
			</section>
		</main>
	)
}

export default App
