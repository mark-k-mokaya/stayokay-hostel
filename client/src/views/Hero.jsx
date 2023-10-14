import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

export const Hero = () => {
	const slides = document.getElementsByClassName('slide');
	const [currentSlide, setCurrentSlide] = useState(0);
	const scrollTo = (id) => () => {
		const section = document.querySelector(id);
		section ? section.scrollIntoView() : window.scrollTo({top: 0, left: 0});
	};

	// slideshow
	useEffect(() => {
		for (let i = 0; i < slides.length; i++) {
			if (i !== currentSlide) {
				slides[i].classList.add('opacity-0');
				slides[i].classList.remove('hidden');
			} else {
				slides[i].classList.remove('opacity-0');
			}
		}
		setTimeout(() => {
			setCurrentSlide(currentSlide + 1 < slides.length ? currentSlide + 1 : 0);
		}, 4000);
	}, [currentSlide, slides]);

	return (
		<section id="Hero" className="p-0 h-[110vh]">
			<div className="flex flex-col xl:flex-row h-full bg-pattern bg-maroonSecondary">
				{/* Hero Content Section */}
				<div className="relative flex items-center justify-center w-full xl:w-[640px] 2xl:w-5/12 h-screen xl:h-full">
					{/* Background overlay */}
					<div className="w-full h-full flex items-center pt-26 pb-10 bg-maroonSecondary bg-opacity-10">
						{/* Content */}
						<div className="flex flex-col m-auto">
							<h1 className="font-bold text-light text-center xl:text-left transform">
								BOOK YOUR STAY
								<span className="block w-fit mx-auto my-1.5 p-1.5 pr-2 rounded-[3px] bg-dark-100 tracking-[-0.025rem] xl:mx-0">
									FROM KSH. 1,000
								</span>
								PER NIGHT
							</h1>
							<button
								as={Link}
								to="/"
								onClick={scrollTo('#book')}
								className="w-72 xl:w-[450px] h-16 mx-auto xl:mx-0 mt-8 font-bold text-[20px] bg-light text-maroonSecondary">
								Book a Short Stay
							</button>
						</div>
					</div>
				</div>
				{/* Hero Slider Section*/}
				<div id="slider" className="relative flex flex-1 mt-26 bg-dark-100">
					<div
						id="slide-1"
						className="bg-[url('./assets/img/hero-building.png')] slide z-4">
						<h3 className="slide-text">WELCOME TO STAYOKAY</h3>
					</div>

					<div
						id="slide-2"
						className="hidden bg-[url('./assets/img/hero-bed.png')] slide">
						<h3 className="slide-text">SELF CONTAINED ROOMS</h3>
					</div>

					<div
						id="slide-3"
						className="hidden bg-[url('./assets/img/hero-kitchen.png')] slide">
						<h3 className="slide-text">FULLY EQUIPPED KITCHEN</h3>
					</div>

					<div
						id="slide-4"
						className="hidden bg-[url('./assets/img/hero-parking.png')] slide">
						<h3 className="slide-text">SPACIOUS PARKING AREA</h3>
					</div>
				</div>
			</div>
		</section>
	);
};
