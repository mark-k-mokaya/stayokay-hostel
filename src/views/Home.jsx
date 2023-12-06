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
import {useContext, useEffect, useCallback} from 'react';
import ScrollContext from '../context/scroll';
import {Divider, Footer} from '../components';

export const Home = () => {
	const {sectionRefs, currentPath, setCurrentPath, scrollTo} =
		useContext(ScrollContext);

	const updatePath = useCallback(() => {
		setCurrentPath(() => window.location.pathname);
	}, [setCurrentPath]);

	useEffect(() => {
		const handler = () => {
			updatePath();
		};
		window.addEventListener('popstate', handler);

		return () => {
			window.removeEventListener('popstate', handler);
		};
	}, [updatePath]);

	useEffect(() => {
		scrollTo(currentPath);
	}, [currentPath, scrollTo]);

	return (
		<main className="overflow-x-hidden">
			<Hero />
			<About ref={sectionRefs.about} />
			<Divider />
			<Features ref={sectionRefs.features} />
			<Divider />
			<Rooms ref={sectionRefs.rooms} />
			<Divider />
			<Gallery ref={sectionRefs.gallery} />
			<Divider />
			<Reviews ref={sectionRefs.reviews} />
			<Divider />
			<Book ref={sectionRefs.book} />
			<Divider />
			<Contact ref={sectionRefs.contact} />
			<Footer />
		</main>
	);
};
