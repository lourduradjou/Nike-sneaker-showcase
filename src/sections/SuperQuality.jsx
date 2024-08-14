import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'
import Button from '../components/Button'

const SuperQuality = () => {
	return (
		<div id="about-us" className='select-none max-container padding-x  flex max-lg:flex-col justify-between items-center flex-1'>
			<div className='px-10 bg-slate-100 py-12 rounded-xl'>
				<h1 className='bg-white p-4 rounded-xl flex flex-wrap tracking-wide font-bold capatalize font-palanquin sm:text-4xl text-2xl lg:max-w-lg w-full '>
					<span className='xl:whitespace-nowrap relative w-full   '>
						We provide you
					</span>
					<br />
					<span className=' text-[#fdc500] pr-4 duration-300 hover:text-coral-red'>
						super quality
					</span>
					Shoes
				</h1>
				<p className='font-montserrat text-md md:text-sm  flex-wrap text-slate-gray my-4 lg:max-w-lg md:flex hidden'>
					Ensuring premium comfort and style our meticulously crafted
					footwear is designed to elevate your Experience providing
					you with unmatched quality, innovation, and a touch of
					elegance.
				</p>
				<p className='font-montserrat text-md md:text-sm text-slate-gray lg:max-w-lg md:block hidden'>
					Our dedication to detail and excellence ensures your
					satisfaction
				</p>
				<div className='flex justify-center mt-5'>
					<Button label='View details' />
				</div>
			</div>
			<div className='flex flex-1 justify-end items-center max-lg:mt-10'>
				<img src={shoe8} alt='shoe8' width={480} height={500} />
			</div>
		</div>
	)
}

export default SuperQuality
