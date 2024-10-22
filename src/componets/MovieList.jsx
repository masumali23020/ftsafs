import React from "react";
import { getAllMovies } from "../data/movies";
import MoveCard from "./MoveCard";

const MovieList = () => {
    const movies = getAllMovies()
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie)=> <MoveCard key={movie.id} movie={movie} />)}
        
        
      </div>
    </div>
  );
};

export default MovieList;
