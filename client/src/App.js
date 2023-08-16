import {Routes, Route} from 'react-router-dom';
import {Navbar} from './components';
import Home from './views/Home';

function App() {
	const links = [
		{path: '/'},
		{path: '/about', id: '#about'},
		{path: '/features', id: '#features'},
		{path: '/rooms', id: '#rooms'},
		{path: '/gallery', id: '#gallery'},
		{path: '/reviews', id: '#reviews'},
		{path: '/contact', id: '#contact'},
		{path: '/book', id: '#book'},
		// {path: '/terms-and-conditions'},
	];

	return (
		<>
			<Navbar />
			<Routes>
				{links.map((link, id) => (
					<Route
						key={id}
						path={link.path}
						element={<Home scrollTo={link.id} />}
					/>
				))}

				{/* Routes to terms and conditions and admin screen to check reviews.*/}
			</Routes>
		</>
	);
}

export default App;
