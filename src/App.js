import { 
	BrowserRouter as Router, 
	Routes, 
  	Route
} from 'react-router-dom'

import Accueil from './pages/Accueil/Accueil';
import ArticlesHtml from './pages/Articles/ArticlesHtml';
import ArticlesXml from './pages/Articles/ArticlesXml';
import Aide from './pages/Aide/Aide';
import Article from './pages/Article/Article';
import Delete from './pages/delete/Delete';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path='/' element={<Accueil />} />
					<Route path='articles/html' element={<ArticlesHtml />} />
					<Route path='articles/xml' element={<ArticlesXml />} />
					<Route path='aide' element={<Aide />} />
					<Route path='article/:guid' element={<Article />} />
					<Route path='article/delete/:guid' element={<Delete />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
