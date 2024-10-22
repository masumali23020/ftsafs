import React from "react";
import MoveCard from "./MoveCard";

const MovieList = () => {
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        <MoveCard />
        <MoveCard />
        <MoveCard />
        <MoveCard />
      </div>
    </div>
  );
};

export default MovieList;
