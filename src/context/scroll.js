import {createContext, useRef, useState} from 'react';

const ScrollContext = createContext();
const ScrollProvider = ({children}) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);
	const [sectionRefs, setSectionRefs] = useState({
		about: useRef(),
		features: useRef(),
		rooms: useRef(),
		gallery: useRef(),
		reviews: useRef(),
		contact: useRef(),
		book: useRef(),
	});

	const scrollTo = (path) => {
		const ref = path ? sectionRefs[path.substring(1)] : null;
		ref
			? ref.current.scrollIntoView({behavior: 'smooth'})
			: window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	};

	return (
		<ScrollContext.Provider
			value={{
				sectionRefs,
				setSectionRefs,
				currentPath,
				setCurrentPath,
				scrollTo,
			}}>
			{children}
		</ScrollContext.Provider>
	);
};
		
export {ScrollProvider};
export default ScrollContext;
