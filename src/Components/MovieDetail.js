import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsStarFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import "./MovieDetail.css";

function MovieDetail() {
  const Movie = useSelector((state) => state.movies.Movie);

  return (
    <div className="movie-container">
      <div className="movie">
        <Link to="/" className="closeBtn">
          <BsArrowLeft />
        </Link>

        <div className="movie-detail">
          <h1> {Movie[0].Title} </h1>
          <div className="video">
            <ReactPlayer
              url={Movie[0].Link}
              width={
                window.matchMedia("(min-width: 1024px)").matches
                  ? "75%"
                  : "100%"
              }
              height="100%"
              className="video-player"
            />
          </div>
          <h2>Description:</h2>
          <p>{Movie[0].Description}</p>
          <p className="rating">
            Rating:
            {[...Array(Movie[0].Rating)].map((e, i) => (
              <BsStarFill key={i} />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
