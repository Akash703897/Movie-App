
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './page/home/home'; 
import Movie from './components/movieDetail/movie';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="Movie/:id" element={ <Movie />}></Route>
          <Route path="Movie/:type"element={<h1>Movie list page</h1>}></Route>
          <Route path="/*" element={<h1>popular Movies</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

