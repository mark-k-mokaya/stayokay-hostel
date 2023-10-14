import {Link} from 'react-router-dom';

const MobileMenu = ({setShowMenu, links, scrollTo}) => {
	const handleClose = () => {
		setShowMenu(false);
	};

	return (
		<div id="menu" className="absolute left-0 top-0 h-screen w-screen z-50">
			{/* Background */}
			<div
				id="menu-bg"
				className="w-full h-full  bg-dark-75"
				onClick={() => {
					handleClose();
				}}></div>

			{/* Menu */}
			<div className="absolute right-0 top-0 z-60 h-full w-full md:w-1/2 bg-white">
				<div
					id="navlinks"
					className="flex flex-col items-center mt-12 md:mt-24 text-xl space-y-8 leading-4">
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
			</div>
		</div>
	);
};

export default MobileMenu;
