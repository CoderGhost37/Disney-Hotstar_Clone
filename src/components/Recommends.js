import React from "react";
import "./Recommends.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";

const Recommends = () => {
  const movies = useSelector(selectRecommend);

  return (
    <div className="recommends">
      <h4>Recommended for You</h4>
      <div className="recommends__content">
        {movies &&
          movies.map((movie, key) => (
            <div className="recommends__content-wrap" key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recommends;
