import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

export const LoadingSpinner = () => {
	return (
		<div className="w-10 h-10 absolute flex justify-center items-center bg-light rounded ">
			<FontAwesomeIcon
				icon={faSpinner}
				className="text-maroonPrimary p-2 rounded animate-spin"
			/>
		</div>
	);
};
