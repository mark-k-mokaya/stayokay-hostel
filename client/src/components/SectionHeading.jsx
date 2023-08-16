export const SectionHeading = ({main, sub}) => {
	return (
		<div className="text-center">
			<h5 className="text-maroonSecondary">{sub}</h5>
			<h2 className="text-maroonPrimary">{main}</h2>
		</div>
	);
};
