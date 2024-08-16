import Button from '../components/Button'

const Subscribe = () => {
	return (
		<section
			id='contact-us'
			className='flex justify-evenly max-container padding-x items-center max-container gap-4 max-lg:flex-col'
		>
			<h3 className='font-bold font-palanquin gap-1.5 xl:text-4xl text-2xl mx-auto flex justify-center flex-wrap mt-2'>
				Get
				<span className='font-palanquin text-[#fdc500] pr-4 hover:duration-300 hover:text-coral-red'>
					Updates
				</span>
				& Newsletter
			</h3>

			<div className='flex items-center max-sm:flex-col gap-4 sm:border-2 w-full lg:max-w-[40%]sm:border-slate-gray rounded-full sm:px-4 sm:py-2'>
				<input
					type='text'
					placeholder='solecraft@gmail.com'
					className='input'
				/>
				<Button label='Sign Up' fullWidth='max-sm:min-w-full' />
			</div>
		</section>
	)
}

export default Subscribe
