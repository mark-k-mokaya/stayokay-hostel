import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar} from './components';
import {Home, Terms} from './views';

const links = [
	{label: 'About StayOkay', path: '/about'},
	{label: 'Why Choose Us?', path: '/features'},
	{label: 'Rooms & Rates', path: '/rooms'},
	{label: 'Gallery', path: '/gallery'},
	{label: 'Reviews', path: '/reviews'},
	{label: 'Contact Us', path: '/contact'},
	{label: 'Book Now', path: '/book'},
];

function App() {
	return (
		<BrowserRouter>
			<Navbar links={links} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Home />} />
				<Route path="/terms" element={<Terms />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
