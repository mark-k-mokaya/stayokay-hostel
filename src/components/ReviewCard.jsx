export const ReviewCard = ({review, author}) => {
	return (
		<div className="review-card">
			<p className="text-xl">{review}</p>
			<p className="text-maroonPrimary capitalize border-t border-dark-10 pt-2">~ {author}</p>
		</div>
	);
};

