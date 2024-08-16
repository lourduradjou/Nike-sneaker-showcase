const Button = ({ label, iconUrl, bgColor, textColor, borderColor, fullWidth }) => {
	return (
		<button
			className={`${
				bgColor && textColor && borderColor
					? `${bgColor} ${textColor} ${borderColor} border-2 hover:bg-gray-500 hover:text-white`
					: "bg-primary-yellow hover:bg-[#ff7b00] "
			} group flex justify-center max-w-40 items-center py-3 px-4 font-montserrat text-lg leading-none rounded-full font-medium duration-300 active:scale-95 ${fullWidth}`}
		>
			<span>{label}</span>
			{iconUrl && (
				<span className='group-hover:rotate-90 group-hover:translate-x-3 duration-300 group-hover:-translate-y-1'>
					<img
						src={iconUrl}
						alt='icon'
						className='ml-2 rounded-full w-5 h-5'
					/>
				</span>
			)}
		</button>
	);
};

export default Button;
