import React, { useState } from 'react';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { Router } from './components/router';

const App = () => {
	const [dark, setDark] = useState(false);
	return (
		<div className={dark? 'dark': ''}>
			<div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 black min-h-screen'>
				<Navbar setDark={setDark} dark={dark} />
				<Router />
				<Footer />
			</div>
		</div>
	);
}

export default App;