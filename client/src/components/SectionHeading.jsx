export const SectionHeading = ({main, sub}) => {
	return (
		<div className="text-center w-full flex flex-col items-center">
			<h5 className="text-maroonSecondary uppercase">{sub}</h5>
			<h2 className="text-maroonPrimary uppercase">{main}</h2>
		</div>
	);
};
