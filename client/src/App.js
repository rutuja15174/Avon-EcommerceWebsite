/** @format */

import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Component/NavBar/Navbar';
import NavGrid from './Component/NavBar/NavGrid';

function App() {
	return (
		<div>
			<Navbar />
			<NavGrid />
			<Home />
		</div>
	);
}

export default App;
