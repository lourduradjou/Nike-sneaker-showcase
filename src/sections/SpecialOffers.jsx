import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import Button from '../components/Button'

const SpecialOffers = () => {
	return (
		<section className='max-container flex flex-1 lg:flex-row flex-col-reverse justify-evenly items-center'>
			<div className='mt-6'>
				<img
					src={offer}
					alt='shoe offer image'
					width={512}
					heigth={476}
          className='lg:rotate-12'
				/>
			</div>
			<div>
				<h1 className='flex flex-wrap tracking-wide font-bold capatalize font-palanquin sm:text-4xl text-2xl lg:max-w-lg w-full '>
					<span className='pr-4 text-[#fdc500] duration-300 hover:text-coral-red'>
						Special
					</span>
					Offer
				</h1>
				<p className='font-montserrat text-md md:text-sm  flex-wrap break-words text-slate-gray my-4 lg:max-w-lg lg:flex hidden '>
					Experience the perfect blend of comfort and style with our
					expertly crafted footwear. Now available at an unbeatable
					offer, each pair is designed to enhance your journey with
					superior quality, innovative design, and a dash of elegance.
				</p>
				<p className='font-montserrat text-md md:text-sm text-slate-gray break-words mt-4 lg:max-w-lg'>
					Our relentless dedication to detail and excellence ensures
					that every pair of our footwear not only meets but exceeds
					your expectations. From the first step to the last, we are
					committed to delivering unparalleled satisfaction through
					superior craftsmanship, innovative design, and a passion for
					perfection. Experience the ultimate in quality, comfort, and
					style, meticulously crafted just for you.
				</p>
				<div className='mt-5 gap-6 flex'>
					<Button
						label='Shop now'
						iconUrl={arrowRight}
					/>
					<Button
						label='Learn more'
						bgColor='white'
						borderColor='text-slate-gray'
						textColor='text-slate-gray'
					/>
				</div>
			</div>
		</section>
	)
}

export default SpecialOffers
