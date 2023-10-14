import {useState} from 'react';
import MobileMenu from './MobileMenu';
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
	{name: 'Book Now', path: '/book', id: '#book'},
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
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className="flex fixed justify-between w-full h-26 pr-2 bg-light shadow-md sm:px-8 lg:px-15 z-40">
			{/* Logo */}
			<Link to="/" onClick={scrollTo()}>
				<StayOkayLogo className="" />
			</Link>

			{/* Links */}
			<div
				id="navlinks"
				className="
			hidden items-center justify-evenly space-x-6 leading-6 font-semibold text-base text-maroonSecondary xl:flex">
				{links.map((link) =>
					link.id != '#book' ? (
						<Link
							key={link.id}
							to="/"
							onClick={scrollTo(link.id)}
							className="hover:text-maroonPrimary">
							{link.name}
						</Link>
					) : (
						<button
							as={Link}
							to="/"
							onClick={scrollTo(link.id)}
							className="w-40 h-12 py-3 px-4 rounded-[3px] bg-maroonPrimary text-white font-bold">
							BOOK NOW
						</button>
					)
				)}
			</div>

			{/* Menu Button */}
			<div id="menu-btn" className="block xl:hidden my-auto">
				<button
					className="flex items-center justify-center p-5 space-x-3 group"
					onClick={() => {
						setShowMenu(true);
					}}>
					<FontAwesomeIcon
						icon={faBars}
						className="h-7 w-7 text-maroonPrimary group-hover:text-maroonPrimary"
					/>
				</button>
			</div>

			{/* Mobile Menu */}
			{showMenu && (
				<MobileMenu
					links={links}
					setShowMenu={setShowMenu}
					scrollTo={scrollTo}
				/>
			)}
		</nav>
	);
};
