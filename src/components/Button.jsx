const Button = ({ label, iconUrl }) => {
	return (
		<button
			className='group flex justify-center max-w-40
         items-center  py-3 px-2 font-montserrat text-lg leading-none
          bg-primary-yellow rounded-full font-semibold
          hover:bg-[#ff7b00] duration-300'
		>
			<span>{label}</span>

			<span className="group-hover:rotate-90 group-hover:translate-x-3 duration-300 group-hover:-translate-y-1">
				<img
					src={iconUrl}
					alt='arrow right icon'
					className='ml-2 rounded-full w-5 h-5'
				/>
			</span>
		</button>
	)
}

export default Button
