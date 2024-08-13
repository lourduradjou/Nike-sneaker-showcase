const ShoeCart = ({ imgObj, changeBigShoeImage, bigShoeImage }) => {
	const handleClick = () => {
		if (bigShoeImage !== imgObj.bigShoe) {
			changeBigShoeImage(imgObj.bigShoe)
		}
	}
	return (
		<div
			className={`
         border-2 
         rounded-xl ${
				imgObj.bigShoe === bigShoeImage
					? 'border-coral-red'
					: 'transparent'
			}
         cursor-pointer max-sm:flex-1`}
			onClick={handleClick}
		>
			<div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
				<img
					src={imgObj.thumbnail}
					alt='shoe collection'
					width={127}
					height={103}
                    className="object-contain"
				/>
			</div>
		</div>
	)
}

export default ShoeCart
