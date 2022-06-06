import './App.css';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import MovieList from './components/MovieList';
function App() {

  return (
  <div className="App">
    <div className='Navbar'>
      <Navbar />
    </div>
    <div className= 'MovieList'>
      <MovieList />
    </div>
    <div className='Movie'>
      <Movie />
    </div>
      
  </div>
  );
}

export default App;
