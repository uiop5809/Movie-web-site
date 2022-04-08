import styles from "./MovieDetail.module.css";

function MovieDetail({
  title,
  year,
  medium_cover_image,
  id,
  genres,
  description_full,
}) {
  return (
    <div className={styles.inner}>
      <div className={styles.align}>
        <span className={styles.title}>{title} </span>
        <span className={styles.year}>{year}</span>
      </div>
      <img src={medium_cover_image} alt={id} />
      <div className={styles.summary}>{description_full}</div>
      <ul>{genres && genres.map((genre) => <li key={genre}>{genre}</li>)}</ul>
    </div>
  );
}

export default MovieDetail;
