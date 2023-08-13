import {Link} from 'react-router-dom';

export const Hero = () => {
	return (
		<section id="Hero" className="pt-0 h-[800px]">
			<div className="flex flex-col xl:flex-row h-full bg-pattern-lg bg-maroonSecondary">
				{/* Hero Content Section */}
				<div className="relative flex items-center justify-center w-full xl:w-[640px] h-screen xl:h-full ">
					{/* Background overlay */}
					<div
						id="background"
						className="absolute w-full h-full bg-maroonSecondary bg-opacity-10"></div>
					{/* Content */}
					<div className="flex flex-col mt-16 z-10">
						<h1 className="font-bold text-light transform">
							BOOK YOUR STAY
							<span className="block w-fit my-1.5 p-1.5 pr-2 rounded-[3px] bg-dark-100 tracking-[-0.025rem]">
								FROM KSH. 1,000
							</span>
							PER NIGHT
						</h1>
						<button
							as={Link}
							to="/contact"
							className="w-[450px] h-16 mt-8 font-body font-bold text-[20px] rounded-[3px] bg-light text-maroonSecondary uppercase">
							Book a Short Stay
						</button>
					</div>
				</div>
				{/* Hero Slider Section*/}
				<div id="slider" className="relative flex flex-1 mt-26 bg-black">
					<div
						id="slide-1"
						className=" hidden bg-[url('../public/img/hero-building.png')] slide">
						<h3 className="slide-text">
							WELCOME TO STAYOKAY
						</h3>
					</div>
					<div
						id="slide-2"
						className="hidden bg-[url('../public/img/hero-bed.png')] slide">
						<h3 className="slide-text">
							SELF CONTAINED ROOMS
						</h3>
					</div>
					<div
						id="slide-3"
						className=" bg-[url('../public/img/hero-kitchen.png')] slide">
						<h3 className="slide-text">
							FULLY EQUIPPED KITCHEN
						</h3>
					</div>
					<div
						id="slide-4"
						className="hidden bg-[url('../public/img/hero-parking.png')] slide">
						<h3 className="slide-text">
							SPACIOUS PARKING AREA
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};
