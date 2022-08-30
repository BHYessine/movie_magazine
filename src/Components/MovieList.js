import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { filterList } from "../Redux/actions";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    search: "",
    sort: "",
  });
  const Movies = useSelector((state) => state.movies.result);

  const handleSort = (e) => {
    setFilter({ ...filter, sort: e.target.value });
  };

  const handleSearch = (e) => {
    setFilter({ ...filter, search: e.target.value });
  };

  useEffect(() => {
    dispatch(filterList(filter));
  }, [filter, dispatch]);

  return (
    <div className="container">
      <div className="home">
        <nav>
          <div className="web-title">MOVIE MAGAZINE</div>
          <div className="filter">
            <Form.Select name="sort" value={filter.sort} onChange={handleSort}>
              <option>Select type of sorted</option>
              <option value="increasing">Increasing Rating</option>
              <option value="descending">Descending Rating</option>
              <option value="title">Title A-Z </option>
            </Form.Select>

            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search Movie..."
                type="text"
                name="search"
                value={filter.search}
                onChange={handleSearch}
              />
            </InputGroup>
          </div>
        </nav>
        <div className="movie-list">
          {Movies.length > 0 ? (
            Movies.map((movie, i) => (
              <MovieCard
                key={i}
                Src={movie.Src}
                Title={movie.Title}
                Description={movie.Description}
                Rating={movie.Rating}
              />
            ))
          ) : (
            <div className="empty-list">No result !!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
