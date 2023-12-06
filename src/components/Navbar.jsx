import {useContext, useState} from 'react';
import MobileMenu from './MobileMenu';
import {Link, useNavigate} from 'react-router-dom';
import {ReactComponent as StayOkayLogo} from '../assets/img/Logo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import ScrollContext from '../context/scroll';

export const Navbar = ({links}) => {
	const navigate = useNavigate();
	const [showMenu, setShowMenu] = useState(false);
	const {scrollTo, setCurrentPath, currentPath} = useContext(ScrollContext);

	const hideMenu = () => {
		setShowMenu(false);
	};

	const handleNavigate = async (path) => {
		const foundLink = links.find((link) => link.path === path);
		const foundCurrentLink = links.find((link) => link.path === currentPath);
		if (
			(foundCurrentLink || currentPath === '/') &&
			(foundLink || path === '/') &&
			currentPath !== path
		) {
			await setCurrentPath(() => path);
			navigate(path);
			scrollTo(path);
		} else if (
			(foundCurrentLink || currentPath === '/') &&
			(foundLink || path === '/')
		) {
			scrollTo(path);
		} else {
			await setCurrentPath(() => path);
			navigate(path);
		}
	};

	return (
		<nav className="flex fixed justify-between w-full h-26 pr-2 bg-light shadow-md sm:px-8 lg:px-15 z-40">
			{/* Logo */}
			<Link onClick={() => handleNavigate('/')}>
				<StayOkayLogo className="w-full h-full" />
			</Link>

			{/* Links */}
			<div
				id="navlinks"
				className="
			hidden items-center justify-evenly space-x-6 leading-6 font-semibold text-base text-maroonSecondary xl:flex">
				{links.map((link) =>
					link.path !== '/book' ? (
						<Link
							key={link.path}
							onClick={() => handleNavigate(link.path)}
							className="hover:text-maroonPrimary">
							{link.label}
						</Link>
					) : (
						<button
							key={link.path}
							as={Link}
							onClick={() => handleNavigate(link.path)}
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
					hideMenu={hideMenu}
					handleNavigate={handleNavigate}
				/>
			)}
		</nav>
	);
};
