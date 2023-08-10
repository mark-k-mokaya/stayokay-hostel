export const Hero = () => {
	return (
		<section id="Hero">
			<div className="flex flex-col xl:flex-row">
				{/* Hero Content Section */}
				<div className="relative flex items-center justify-center w-full xl:w-[640px] h-screen bg-pattern-lg bg-maroonSecondary">
					{/* Background overlay */}
					<div
						id="background"
						className="absolute w-full h-full bg-maroonSecondary bg-opacity-10"></div>
					{/* Content */}
					<div>
						Content
					</div>
				</div>
				{/* Hero Slider */}
				<div>slideshow</div>
			</div>
		</section>
	);
};
