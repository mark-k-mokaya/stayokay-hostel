import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {RoomsProvider} from './context/rooms';
import {GalleryProvider} from './context/gallery';
import {ScrollProvider} from './context/scroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ScrollProvider>
			<GalleryProvider>
				<RoomsProvider>
					<App />
				</RoomsProvider>
			</GalleryProvider>
		</ScrollProvider>
	</React.StrictMode>
);
reportWebVitals();
