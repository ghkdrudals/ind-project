import './App.css';
import { useState,useEffect, use } from 'react';

function App() {
  const [loading,setLoading]=useState(true);
  const [movies,setMovies]=useState([]);
  const getmovies=async() => {
    const response= await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
    const json = await response.json()
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(()=>{
    getmovies();
  },[])
  console.log(movies)
  return (
    <div className="App">
      {loading ? <h1>loaidng...</h1> :movies.map(movie=><div key={movie.id}>
        <h2>{movie.title}</h2>
        <p>{movie.summary}</p>
        <ul>
          <li></li>
        </ul>
        </div>)}
    </div>
  );
}

export default App;
