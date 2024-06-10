import {Link} from 'react-router-dom';
import CloseIcon from '../assets/img/close-icon.png';

const MobileMenu = ({hideMenu, links, handleNavigate}) => {
	const onNavigate = (path) => {
		handleNavigate(path);
		hideMenu();
	};

	return (
		<div
			id="menu"
			className="absolute left-0 top-0 h-screen w-screen z-50 xl:hidden">
			{/* Background */}
			<div
				id="menu-bg"
				className="w-full h-full  bg-dark-75"
				onClick={() => hideMenu()}></div>

			{/* Menu */}
			<div className="py-32 absolute right-0 top-0 z-60 h-full w-full md:w-[500px] bg-white">
				<div
					className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 bg-light text-maroonPrimary border border-dark-25 cursor-pointer"
					onClick={hideMenu}>
					<img src={CloseIcon} width={32} alt="Close" />
				</div>
				<div
					id="navlinks"
					className="flex flex-col items-center text-xl space-y-8 leading-4 font-semibold text-maroonSecondary">
					{links.map((link) =>
						link.path !== '/book' ? (
							<Link
								key={link.path}
								to={link.path}
								onClick={() => onNavigate(link.path)}
								className="hover:text-maroonPrimary">
								{link.label}
							</Link>
						) : (
							<button
								key={link.path}
								to={link.path}
								as={Link}
								onClick={() => onNavigate(link.path)}
								className="w-40 h-12 py-3 px-4 rounded-[3px] bg-maroonPrimary text-white font-bold">
								BOOK NOW
							</button>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
