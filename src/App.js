import "./styles.css";
import { useEffect, useState } from "react";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//api key 8cc04f01
const API_URL = "http://www/omdbapi.com?apikey=8cc04f01";
export default function App() {
  [movies, setMovies] = useState([]);
  [searchTerm, setSearchTerm] = useState("");
  // const movieSample = {
  //   Title: "The Amazing Spiderman",
  //   Year: "2012",
  //   imdbID: "tt123456",
  //   Type: "Movie",
  //   Poster: "N/A",
  // };
  // // useEffect(() => {
  // //   setMovies([movieSample]);
  // // }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = response.json;
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  return (
    <div className="app">
      <h1>MovieApp</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {/* change it to > here when api works*/}
      {movies?.length > 0 ? (
        <div className="container">
          {/* <MovieCard movieSample={movieSample} /> */}
          {movies.map((movie) => (
            <MovieCard movieSample={movie} />
          ))}
        </div>
      ) : (
        <div className="container">
          <h3>No movies found.</h3>
        </div>
      )}
    </div>
  );
}
