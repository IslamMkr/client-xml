import { 
	BrowserRouter as Router, 
	Routes, 
  	Route
} from 'react-router-dom'

import Accueil from './pages/Accueil/Accueil';
import Articles from './pages/Articles/Articles';
import Aide from './pages/Aide/Aide';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path='/' element={<Accueil />} />
					<Route path='articles' element={<Articles />} />
					<Route path='aide' element={<Aide />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
