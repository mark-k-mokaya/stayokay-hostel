import {useEffect, useState, forwardRef, useContext, useRef} from 'react';
import ScrollContext from '../context/scroll';
import {Link, useNavigate} from 'react-router-dom';
import {fetchImages} from '../utils/fetchImages';
// import supportsWebP from 'supports-webp';

export const Hero = forwardRef(function Hero(props, ref) {
	const navigate = useNavigate();
	const {setCurrentPath, scrollTo} = useContext(ScrollContext);
	const slides = document.getElementsByClassName('slide');
	const [currentSlide, setCurrentSlide] = useState(0);
	// const [hasWebP, setHasWebP] = useState(false);
	const slider = useRef();

	// useEffect(() => {
	// 	supportsWebP.then((supported) => {
	// 		if (supported) {
	// 			setHasWebP(true);
	// 		} else {
	// 			setHasWebP(false);
	// 		}
	// 	});
	// }, []);

	const handleScroll = async () => {
		await setCurrentPath(() => '/book');
		window.location.pathname !== '/book' && navigate('/book');
		scrollTo('/book');
	};

	// fetch images
	const [imagesList, setImagesList] = useState([]);
	useEffect(() => {
		const images = require.context('../assets/img/hero', false);
		setImagesList(fetchImages(images));
	}, []);

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
		<section id="Hero" className="p-0 h-screen xl:h-[110vh] relative" ref={ref}>
			<div className="flex flex-col xl:flex-row h-full bg-pattern bg-maroonSecondary">
				{/* Hero Content Section */}
				<div className="absolute xl:relative flex items-center justify-center w-full xl:w-[640px] 2xl:w-5/12 h-[100%] xl:h-full z-10 xl:z-0 ">
					{/* Background overlay */}
					<div className="absolute inset-0 flex items-center pt-26 pb-10 xl:bg-maroonSecondary xl:bg-opacity-10">
						{/* Content */}
						<div className="flex relative flex-col m-auto xl:bg-transparent p-0 sm:p-4 rounded-[3px]">
							<div className="absolute inset-0 blur-md bg-dark-10 -z-10"></div>
							<h1 className="font-bold text-light text-center xl:text-left transform">
								BOOK YOUR STAY
								<span className="flex my-1.5 bg-dark-100 px-1 py-2 rounded-[3px]">
									FROM KSH. 1,000
								</span>
								PER NIGHT
							</h1>
							<button
								as={Link}
								onClick={handleScroll}
								className="w-72 xl:w-[450px] h-16 mx-auto xl:mx-0 mt-8 font-bold text-xl bg-light text-maroonSecondary hover:text-maroonPrimary">
								Book a Short Stay
							</button>
						</div>
					</div>
				</div>
				{/* Hero Slider Section*/}
				<div
					ref={slider}
					id="slider"
					className="relative w-full xl:w-auto mx-auto xl:m-0 xl:flex flex-1 mt-26 bg-dark-100">
					{imagesList.map((image, index) => {
						const slideText = image.name.split('_')[1].split('-').join(' ');
						return (
							<div
								key={image.name}
								id={`slide-${index + 1}`}
								className={`slide z-4 bg-center xl:bg-left`}
								// style={
								// 	hasWebP
								// 		? {backgroundImage: `url(${image.imageUrl})`}
								// 		: {backgroundImage: `url(${image.fallbackImageUrl})`}
								// }
								// 								style={{
								// 									backgroundImage: `url(https://pixboost.com/api/2/img/https://stayokay-hostel-kisii.netlify.app/${image.imageUrl}/resize?size=${slider.current.offsetHeight}&auth=NTc2MjM4MDcz
								// )`
								style={{
									backgroundImage: `url(https://pixboost.com/api/2/img/https://stayokay-hostel-kisii.netlify.app/${image.imageUrl}/resize?size=200&auth=NTc2MjM4MDcz
)`,
								}}>
								<div className="absolute inset-0 flex items-center pt-26 pb-10 bg-dark-10"></div>
								<h3 className="slide-text bottom-0 text-center sm:text-right xl:bottom-[15%]">
									{slideText}
								</h3>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
});
