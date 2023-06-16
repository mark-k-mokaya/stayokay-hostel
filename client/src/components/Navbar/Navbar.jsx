import {Link} from 'react-router-dom';
import {ReactComponent as StayOkayLogo} from '../../assets/Logo.svg';
import './Navbar.scss';

const links = [
	{name: 'About StayOkay', path: '#home'},
	{name: 'Why Choose Us?', path: '#about'},
	{name: 'Rooms & Rates', path: '#rooms-and-rates'},
	{name: 'Gallery', path: '#gallery'},
	{name: 'Reviews', path: '#reviews'},
	{name: 'Contact Us', path: '#contact'},
];

export const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/">
				<StayOkayLogo />
			</Link>
			<div className="navlinks">
				{links.map((link) => (
					<Link key={link.path} to={link.path}>
						{link.name}
					</Link>
				))}
				<Link key={'#book'} to="#book">
					<button>BOOK NOW</button>
				</Link>
			</div>
		</div>
	);
};
