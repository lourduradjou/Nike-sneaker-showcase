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
import Footer from './components/Footer'

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
			<section className='padding-x py-10 bg-slate-100'>
				<Services />
			</section>
			<section className='padding'>
				<SpecialOffers />
			</section>
			<section className='padding  bg-hero'>
				<CustomerReviews />
			</section>
			<section className='padding'>
				<Subscribe />
			</section>
			<section className='bg-[#180e0a]'>
				<Footer />
			</section>
		</main>
	)
}

export default App
