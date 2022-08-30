import React, { useState } from "react";
import { movieList } from "./data";
import MovieCard from "./MovieCard";

const Filter = (props) => {
  let List = movieList;
  const [title, setTitle] = useState("");
  let [searchMovie, setSearchMovie] = useState(movieList);
  const filterTitle = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = List.filter((movie) => {
        return movie.Title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setSearchMovie(results);
    } else {
      setSearchMovie(movieList);
    }
    setTitle(keyword);
  };
  const [rate, setRate] = useState(movieList);
  const filterRate = (e) => {
    const number = e.target.value;
    if (number !== "") {
      const results = List.filter((movie) => {
        return movie.Rating.toLowerCase().startsWith(number.toLowerCase());
      });
      setSearchMovie(results);
    } else {
      setSearchMovie(movieList);
    }
    setRate(number);
  };

  const handleClick = () => {
    let newTitle = prompt("Please enter Movie Title:");
    let newDescription = prompt("Please enter Movie Description:");
    let newSrc = prompt("Please enter Link of Poster:");
    let newRate = prompt("Please enter Movie Rate:");
    let newLink = prompt("Please enter Link of Trailer:");
    var results = [
      ...searchMovie,
      {
        Title: newTitle,
        Description: newDescription,
        Src: newSrc,
        Rating: newRate,
        Link: newLink,
      },
    ];
    setSearchMovie(results);
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="filteredList">
        <div className="inputSearch">
          <label>Choose Filter:</label>
          <input
            type="checkbox"
            onChange={handleCheck}
            checked={!isChecked}
            id="titleCheck"
          />
          <label>Title</label>
          <input
            type="checkbox"
            onChange={handleCheck}
            checked={isChecked}
            id="rateCheck"
          />
          <label>Rate</label>
          <input
            type="search"
            placeholder="Enter Movies Title"
            onChange={filterTitle}
            value={title}
            className="titleSearch"
          />
          <input
            type="number"
            placeholder="Enter Movies Rating"
            onChange={filterRate}
            value={rate}
            className="rateSearch"
          />
        </div>
        <div className="searchList">
          {searchMovie && searchMovie.length > 0 ? (
            searchMovie.map((movie) => (
              <div>
                <MovieCard
                  Src={movie.Src}
                  Title={movie.Title}
                  Description={movie.Description}
                  Rating={movie.Rating}
                />
              </div>
            ))
          ) : (
            <h1>No results found!</h1>
          )}
          <div className="newCard">
            <button onClick={handleClick}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
