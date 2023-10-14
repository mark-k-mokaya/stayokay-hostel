import {Link} from 'react-router-dom';

const MobileMenu = ({hideMenu, links}) => {
	const handleClick = () => {
		hideMenu();
	};

	const scrollTo = (id) => () => {
		const section = document.querySelector(id);
		section ? section.scrollIntoView() : window.scrollTo({top: 0, left: 0});
		handleClick();
	};

	return (
		<div
			id="menu"
			className="absolute left-0 top-0 h-screen w-screen z-50 xl:hidden">
			{/* Background */}
			<div
				id="menu-bg"
				className="w-full h-full  bg-dark-75"
				onClick={() => {
					handleClick();
				}}></div>

			{/* Menu */}
			<div className="py-32 absolute right-0 top-0 z-60 h-full w-full md:w-1/2 bg-white">
				<div
					id="navlinks"
					className="flex flex-col items-center text-xl space-y-8 leading-4">
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
								key={link.id}
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
