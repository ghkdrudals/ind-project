//end
import { Link } from "react-router-dom";
function Movie({id,medium_cover_image,title,summary,genres,loading,movies}) {
    return (
        <div className="App">
          {loading ? <h1>loaidng...</h1> :movies.map((movie)=><div key={movie.id}>
          <img src={medium_cover_image} alt={movie.title} />
            <h2>
              <Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            <ul>
              {genres.map((g) => (<li key={g}>{g}</li>))}
            </ul>
            </div>)}
        </div>
      );
}

Movie.propTypes = {
  id:PropTypes.number.isRequired,
  medium_cover_image:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;