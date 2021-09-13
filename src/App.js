import React, { useEffect, useState } from "react";
import "./styles.css";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieListHeader from "./components/MovieListHeader";
import SearchBox from "./components/SearchBox";
import AddFavorite from "./components/AddFavorite";
import RemoveFavorite from "./components/RemoveFavorite";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchData = async () => {
    const api = "https://jsonplaceholder.typicode.com/users/";
    const response = await fetch(api);
    const resJson = await response.json();
    console.log("movies", resJson);
    setMovies(resJson);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addFavoriteMovie = (movie) => {
    const newFavoriteMovieList = [...favorite, movie];
    setFavorite(newFavoriteMovieList);
    console.log("Add Favorite Movie List:", newFavoriteMovieList);
    saveToLocalStorage(newFavoriteMovieList);
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteMovieList = favorite.filter((x) => x.id !== movie.id);
    setFavorite(newFavoriteMovieList);
    console.log("Remove Favorite Movie List:", newFavoriteMovieList);
    saveToLocalStorage(newFavoriteMovieList);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favorite-movie", JSON.stringify(items));
  };

  useEffect(() => {
    const movieFavorite = JSON.parse(
      localStorage.getItem("favorite-movie") || "0"
    );
    setFavorite([...movieFavorite]);
  }, []);

  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="header-div">
          <MovieListHeader header="Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
      <div className="row">
        <div className="movieList-div">
          <MovieList
            movies={movies}
            favoriteComp={AddFavorite}
            handleFavoriteClick={addFavoriteMovie}
          />
        </div>
      </div>
      {/* Favorite */}
      <div className="row">
        <div className="header-div">
          <MovieListHeader header="Favorites" />
        </div>
      </div>
      <div className="row">
        <div className="movieList-div">
          <MovieList
            movies={favorite}
            favoriteComp={RemoveFavorite}
            handleFavoriteClick={removeFavoriteMovie}
          />
        </div>
      </div>
    </div>
  );
}
