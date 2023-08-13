import {useEffect} from 'react';
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

const Home = (props) => {
	useEffect(() => {
		if (props.scrollTo) {
			console.log(props.scrollTo);
			const section = document.querySelector(props.scrollTo);
			section && section.scrollIntoView();
		} else {
			window.scrollTo({top: 0, left: 0});
		}
	});

	return (
		<main className='overflow-x-hidden'>
			<Hero />
			<About />
			<Features />
			<Rooms />
			<Gallery />
			<Reviews />
			<Book />
			<Contact />
		</main>
	);
};

export default Home;
