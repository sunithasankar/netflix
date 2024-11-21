import movie1 from "../assets/images/movie1.jpeg";
import movie2 from "../assets/images/movie2.jpeg";
import movie3 from "../assets/images/movie3.jpeg";
import movie4 from "../assets/images/movie4.jpeg";
import movie5 from "../assets/images/movie5.jpeg";
import movie6 from "../assets/images/movie6.jpeg";

function RecentlyAdded() {
  const movies = [movie4, movie5, movie6,movie1, movie2, movie3,];
  return (
    <>
      <h3>New Releases</h3>
      <div className="tvshow-container d-flex">
        {movies.map((movie, index) => (
          <ul key={index}>
            <li>
              <img src={movie} alt="img" />
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default RecentlyAdded;
