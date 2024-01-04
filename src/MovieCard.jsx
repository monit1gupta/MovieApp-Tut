export default function MovieCard({ movieSample }) {
  return (
    <div className="movie">
      <div>
        <p>{movieSample.Year}</p>
      </div>
      <div>
        <img
          src={
            movieSample.Poster == "N/A"
              ? "https://via.placeholder.com/400"
              : movieSample.Poster
          }
          alt="movie poster"
        />
      </div>
      <div>
        <span>{movieSample.Type}</span>
        <h3>{movieSample.Title}</h3>
      </div>
    </div>
  );
}
