import {SectionHeading, ReviewCard} from '../components';

export const Reviews = () => {
	return (
		<section id="reviews">
			<div className="section-container">
				<SectionHeading
					sub="HEAR WHAT OTHERS HAVE TO SAY"
					main="REVIEWS & TESTIMONIALS"
				/>
				<div className="section-content w-full">
					<div className="review-container">
						<ReviewCard
							review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque"
							author="John Doe"
						/>
						<ReviewCard
							review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque"
							author="John Doe"
						/>
						<ReviewCard
							review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque"
							author="John Doe"
						/>
						<ReviewCard
							review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque"
							author="John Doe"
						/>
						<ReviewCard
							review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque"
							author="John Doe"
						/>
					</div>
					{/* TODO: Pagination */}
				</div>
			</div>
		</section>
	);
};
