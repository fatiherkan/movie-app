import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../../components/Genres/Genres";
import SingleContent from "../../components/SingleContent/SingleContentcopy";
import useGenre from "../../hooks/useGenre";
import "react-alice-carousel/lib/alice-carousel.css";
import "./imdb.css"

const IMDB = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [imdb, setImdb] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://imdb-api.com/en/API/Top250Movies/k_2lfr5yvp`
    );
    setImdb(data.items);
   
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
  }, [genreforURL, page]);

  return (
    <div>
      <span className="pageTitle">Discover Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      
      <div className="trending">
        {imdb &&
          imdb.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.image}
              title={c.fullTitle || c.name}
              date={c.year || c.release_date}
              media_type="movie"
              imDbRating={c.imDbRating}
            />
          ))}
      </div>
      
    </div>
  );
};

export default IMDB;
