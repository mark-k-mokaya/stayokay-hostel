import {Link} from 'react-router-dom';
import {ReactComponent as StayOkayLogo} from '../assets/Logo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

const links = [
	{name: 'About StayOkay', path: '/about', id: '#about'},
	{name: 'Why Choose Us?', path: '/features', id: '#features'},
	{name: 'Rooms & Rates', path: '/rooms', id: '#rooms'},
	{name: 'Gallery', path: '/gallery', id: '#gallery'},
	{name: 'Reviews', path: '/reviews', id: '#reviews'},
	{name: 'Contact Us', path: '/contact', id: '#contact'},
	// {name: 'Terms', path: '/terms-and-conditions'},
];

const scrollTo = (id) => () => {
	const section = document.querySelector(id);
	section ? section.scrollIntoView() : window.scrollTo({top: 0, left: 0});
};


// Update URL on scroll
// window.addEventListener('scroll', function () {
// 	const footer = document.getElementById('about');

// 	const checkIsVisible = (element) => {
// 		const rect = element.getBoundingClientRect();
// 		if (rect.bottom <= window.innerHeight) {
// 			console.log('I see you!');
// 		}
// 	};

// 	checkIsVisible(footer);
// });

export const Navbar = () => {
	return (
		<nav className="flex fixed justify-between w-full h-26 px-0 bg-light shadow-md sm:px-8 lg:px-15 z-40">
			{/* Logo */}
			<Link to="/" onClick={scrollTo()}>
				<StayOkayLogo className="" />
			</Link>

			{/* Links */}
			<div
				id="navlinks"
				className="
			hidden items-center justify-evenly space-x-6 leading-4 font-semibold text-maroonSecondary xl:flex">
				{links.map((link) => (
					<Link
						key={link.id}
						to={link.path}
						onClick={scrollTo(link.id)}
						className="hover:text-maroonPrimary">
						{link.name}
					</Link>
				))}

				<button
					as={Link}
					to="/book"
					onClick={scrollTo('#book')}
					className="w-40 h-12 py-3 px-4 rounded-[3px] bg-maroonPrimary text-white font-bold">
					BOOK NOW
				</button>
			</div>

			{/* Menu Button */}
			<div id="menu-btn" className="block xl:hidden my-auto">
				<button
					className="flex items-center justify-center p-5 space-x-3 group"
					onClick={toggleMenu}>
					<FontAwesomeIcon
						icon={faBars}
						className="h-7 w-7 text-maroonPrimary group-hover:text-maroonPrimary"
					/>
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				id="menu"
				className="hidden absolute left-0 top-0 h-screen w-screen z-50">
				{/* Background */}
				<div
					id="menu-bg"
					className="w-full h-full  bg-black bg-opacity-80"></div>

				{/* Menu */}
				<div className="absolute right-0 top-0 z-60 h-full w-8/12 md:w-5/12 bg-white">
					<div
						id="navlinks"
						className="flex flex-col items-center mt-12 md:mt-24 text-xl space-y-8 leading-4">
						{links.map((link) => (
							<Link
								key={link.path}
								to="/"
								onClick={() => {
									toggleMenu();
								}}>
								{link.name}
							</Link>
						))}
						<Link
							key={'#book'}
							to="/"
							onClick={() => {
								toggleMenu();
							}}>
							<button>BOOK NOW</button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

const toggleMenu = () => {
	const menu = document.querySelector('#menu');
	const menuBtn = document.querySelector('#menu-btn');
	const menuBg = document.querySelector('#menu-bg');
	const links = document.getElementsByTagName('a');
	console.log(links);

	menuBtn.addEventListener('click', () => {
		menu.classList.contains('hidden')
			? menu.classList.toggle('hidden')
			: menu.classList.add('hidden');
	});

	menuBg.addEventListener('click', () => {
		menu.classList.add('hidden');
	});
};
