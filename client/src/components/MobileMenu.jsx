import {Link} from 'react-router-dom';

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
					id="navlinks"
					className="flex flex-col items-center text-xl space-y-8 leading-4 font-semibold text-maroonSecondary">
					{links.map((link) =>
						link.path !== '/book' ? (
							<Link
								key={link.path}
								onClick={() => onNavigate(link.path)}
								className="hover:text-maroonPrimary">
								{link.label}
							</Link>
						) : (
							<button
								key={link.path}
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
