export const Feature = ({icon, label, description}) => {
	return (
		<div className="flex flex-col w-[200px] mb-5 flex-initial text-center items-center justify-start whitespace-pre-line">
			<img src={icon} className="w-24 h-24" alt={label} />
			<p className="font-medium text-dark-90">{label}</p>
			<p className="text-xs text-dark-90">{description}</p>
		</div>
	);
};

export default Feature;
