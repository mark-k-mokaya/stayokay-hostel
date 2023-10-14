export const FormInput = ({name, label, type}) => {
	return (
		<div className="form-input">
			<label for={name} className="text-xl text-maroonPrimary">{label}</label>
			<input type={type} id={name} name={name} className="h-12 py-0 px-4 rounded-[3px] border-[1.25px] border-dark-10 bg-light outline-none"/>
		</div>
	);
};
