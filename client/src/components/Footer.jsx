export const Footer = () => {
	return (
		<div className="pattern-divider h-[180px] relative flex items-center">
			<div className="absolute w-full h-full bg-maroonSecondary bg-opacity-[0.15]"></div>
			<div className="z-10 p-3 h-[60px] w-full bg-maroonSecondary text-light text-opacity-90 flex items-center justify-center text-base relative">
				<p>
					&copy; {new Date().getFullYear()} StayOkay Hostels Kisii. All Rights
					Reserved.
				</p>
			</div>
		</div>
	);
};
