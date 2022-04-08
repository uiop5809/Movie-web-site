import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "./../components/MovieDetail";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []); // 최초에만 실행

  return (
    <MovieDetail
      key={movie.id}
      id={movie.id}
      title={movie.title}
      genres={movie.genres}
      year={movie.year}
      description_full={movie.description_full}
      medium_cover_image={movie.medium_cover_image}
    ></MovieDetail>
  );
}

export default Detail;
