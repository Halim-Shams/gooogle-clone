import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchPage from './Pages/SearchPage';
import Home from './Pages/Home';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/search' element={<SearchPage />} />
					<Route index element={<Home />} />
					<Route path='*' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
