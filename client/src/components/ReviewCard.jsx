export const ReviewCard = ({review, author}) => {
	return (
		<div className="review-card">
			<p className="text-xl">{review}</p>
			<p className="text-maroonPrimary capitalize">~ {author}</p>
		</div>
	);
};

