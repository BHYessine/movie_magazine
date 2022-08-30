import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MovieList from "./Components/MovieList";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./Components/MovieDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
