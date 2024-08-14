import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics, shoes } from '../constants/index'
import bigShoe1 from '../assets/images/big-shoe1.png'
import ShoeCart from '../components/ShoeCart'
import { useState } from 'react'

const Hero = () => {
	const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
	return (
		<section id="hero" className='select-none xl:w-full min-h-screen padding-x flex md:flex-row flex-col max-md:items-center justify-center max-container '>
			<div className='flex flex-col flex-wrap justify-center padding-x padding-y max-sm:padding-x md:w-2/4 '>
				<p className='font-montserrat text-slate-gray text-sm lg:text-md mt-16'>
					Your Stunning Experience With Our Shoes
				</p>
				<h1 className='font-bold font-palanquin lg:text-8xl max-md:text-[70px] text-4xl  flex flex-wrap'>
					<span className='xl:whitespace-nowrap relative w-full pr-10  '>
						New Arrival
					</span>
					<br />
					<span className='font-palanquin text-[#fdc500] pr-4 duration-300 hover:text-coral-red'>
						Nike
					</span>
					Shoes
				</h1>
				<p className='font-montserrat text-md md:text-sm flex flex-wrap text-slate-gray py-6 max-sm:text-sm max-lg:w-full w-2/3'>
					Discover Stylish Nike arrivals, quality comfort and
					innovation for your active life.
				</p>

				<Button label='Shop Now' iconUrl={arrowRight} />

				<div className='flex justify-start items-start flex-wrap w-full mt-10 gap-12 lg:gap-8 text-montserrat leading-7'>
					{statistics.map((statsObj) => (
						<div key={statsObj.label}>
							<div className='font-palanquin lg:text-2xl font-medium md:text-xl'>
								{statsObj.value}
							</div>
							<div className='font-montserrat text-slate-gray text-sm '>
								{statsObj.label}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='relative flex flex-1 justify-center min-h-screen  bg-hero bg-cover flex-col items-center w-full max-sm:w-3/4  max-md:h-2/4 max-sm:mt-12 max-sm:rounded-xl '>
				<img
					src={bigShoeImg}
					className='object-contain relative z-10 flex items-center min-h-screen -top-10 max-lg:-top-32'
					alt='bigshoe'
					width={500}
					height={400}
				/>
				<div className='absolute xl:bottom-[4%] flex z-20 sm:gap-6 gap-4 max-sm:px-4 max-sm:bottom-[25%] bottom-[-140px] md:bottom-[140px]'>
					{shoes.map((shoe) => (
						<div key={shoe.bigShoe}>
							<ShoeCart
								imgObj={shoe}
								changeBigShoeImage={setbigShoeImg}
								bigShoeImage={bigShoeImg}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Hero
