import {
	Hero,
	About,
	Features,
	Rooms,
	Gallery,
	Reviews,
	Book,
	Contact,
} from '../views';
import {useContext, useEffect} from 'react';
import ScrollContext from '../context/scroll';
import {Divider, Footer} from '../components';

export const Home = () => {
	const {sectionRefs, currentPath, scrollTo} = useContext(ScrollContext);

	useEffect(() => {
		scrollTo(currentPath);
	}, [currentPath, scrollTo]);

	return (
		<main className="overflow-x-hidden">
			<Hero className="overflow-hidden" />
			<About ref={sectionRefs.about} className="overflow-hidden" />
			<Divider />
			<Features
				ref={sectionRefs.features}
				className="overflow-hidden"
			/>
			<Divider />
			<Rooms ref={sectionRefs.rooms} className="overflow-hidden" />
			<Divider />
			<Gallery
				ref={sectionRefs.gallery}
				className="overflow-hidden"
			/>
			<Divider />
			<Reviews ref={sectionRefs.reviews} className="" />
			<Divider />
			<Book ref={sectionRefs.book} className="" />
			<Divider />
			<Contact ref={sectionRefs.contact} className="" />
			<Footer />
		</main>
	);
};
