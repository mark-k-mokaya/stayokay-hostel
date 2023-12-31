export const FormInput = ({
	name,
	label,
	type,
	error,
	options,
	className,
	...rest
}) => {
	return (
		<div className="form-input flex-1">
			<label htmlFor={name} className="text-xl text-maroonPrimary">
				{label}
			</label>

			{type !== 'select' ? (
				<input
					type={type}
					id={name}
					name={name}
					placeholder=""
					className={`
						w-full h-12 py-0 px-4 rounded-[3px] border bg-light outline-none ${
							error ? 'border-error ' : 'border-dark-25 '
						} ${className}
					`}
					{...rest}
				/>
			) : (
				<select
					id={name}
					name={name}
					placeholder=""
					className={`
						w-full h-12 py-0 px-4 rounded-[3px] border bg-light outline-none ${
							error ? 'border-error ' : 'border-dark-25 '
						} ${className}
					`}
					{...rest}>
					<option></option>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			)}
			<p className="text-error text-xs">{error}</p>
		</div>
	);
};
