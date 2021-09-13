import React from "react";

const MovieList = (props) => {
  const FavoriteComp = props.favoriteComp;
  // const [match, setMatch] = useState([]);
  // const [getFav, setGetFav] = useState(localStorage.getItem("favObject"));
  // const [favorites, setFavorites] = useState([])

  // useEffect(() => {
  //   fetchData();
  //   setGetFav(getFav);
  // }, [getFav]);

  // async function fetchData() {
  //   const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e9a9af89");
  //   const match = await response.json();
  //   setMatch(match);
  // }

  // const addToFavorite = (item, key) => {
  //   if (key) {
  //     console.log("click", item);
  //     setFavorites(item);
  //     // console.log("click", item);
  //     localStorage.setItem("favObject", JSON.stringify(favorites));
  //   }
  // };

  return (
    <>
      {props.movies &&
        props.movies.map((movie, key) => (
          <div key={movie.id} className="img-card text-center">
            <p>
              Name: <strong>{movie.name}</strong>
            </p>
            <p>
              UserName: <strong>{movie.username}</strong>
            </p>
            <div onClick={() => props.handleFavoriteClick(movie)}>
              <FavoriteComp />
            </div>
          </div>
        ))}
    </>
  );
};
export default MovieList;
