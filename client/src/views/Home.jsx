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
import {Divider, Footer} from '../components';

const Home = (props) => {
	// useEffect(() => {
	// 	if (props.scrollTo) {
	// 		console.log(props.scrollTo);
	// 		const section = document.querySelector(props.scrollTo);
	// 		section && section.scrollIntoView();
	// 	} else {
	// 		window.scrollTo({top: 0, left: 0});
	// 	}
	// });

	return (
		<main className="overflow-x-hidden">
			<Hero />
			<About />
			<Divider />
			<Features />
			<Divider />
			<Rooms />
			<Divider />
			<Gallery />
			<Divider />
			<Reviews />
			<Divider />
			<Book />
			<Divider />
			<Contact />
			<Footer/>
		</main>
	);
};

export default Home;
