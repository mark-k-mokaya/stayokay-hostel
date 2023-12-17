export const Footer = () => {
	return (
		<div className="pattern-divider h-[180px] relative flex items-center">
			<div className="absolute w-full h-full bg-maroonSecondary bg-opacity-[0.15]"></div>
			<div className="z-10 p-5 md:p-3 min-h-[60px] w-full bg-maroonSecondary text-light text-opacity-90 flex flex-col items-center justify-center text-base text-center relative">
				<p>
					&copy; {new Date().getFullYear()} StayOkay Hostels Kisii.{' '}
					<br className="block sm:hidden" />
					All Rights Reserved. Read our{' '}
					<a href="/terms" className="underline">
						Terms & Conditions
					</a>
					.
				</p>
				<p>
					Powered by{' '}
					<a
						href="https://mark-mokaya.super.site"
						target="_blank"
						rel="noreferrer"
						className="underline">
						Mark Mokaya
					</a>
					.
				</p>
			</div>
		</div>
	);
};
