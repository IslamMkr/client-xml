import { 
	BrowserRouter as Router, 
	Routes, 
  	Route
} from 'react-router-dom'

import Accueil from './pages/Accueil/Accueil';
import ArticlesHtml from './pages/Articles/ArticlesHtml';
import ArticlesXml from './pages/Articles/ArticlesXml';
import ArticlesJson from './pages/Articles/ArticlesJson';
import Aide from './pages/Aide/Aide';
import Article from './pages/Article/Article';
import Delete from './pages/delete/Delete';
import ArticleXml from './pages/ArticleXml/ArticleXml';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path='/' element={<Accueil />} />
					<Route path='articles/html' element={<ArticlesHtml />} />
					<Route path='articles/xml' element={<ArticlesXml />} />
					<Route path='articles' element={<ArticlesJson />} />
					<Route path='aide' element={<Aide />} />
					<Route path='articles/html/:guid' element={<Article />} />
					<Route path='articles/delete/:guid' element={<Delete />} />
					<Route path='articles/xml/:guid' element={<ArticleXml />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
