/* eslint-disable react/prop-types */
import { useState } from "react";
import MovieList from "./MovieList";
import WatchList from "./WatchList";
import Summary from "./summry";
import Button from "./button";

function Mainapp({ movies, watched }) {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  return (
    <main className="main">
      <div className="box">
        <Button isOpen={isOpen1} setIsOpen={setIsOpen1}></Button>
        {isOpen1 && <MovieList movies={movies}></MovieList>}
      </div>

      <div className="box">
        <Button isOpen={isOpen2} setIsOpen={setIsOpen2}></Button>
        {isOpen2 && (
          <>
            <Summary watched={watched}></Summary>
            <WatchList watched={watched}></WatchList>
          </>
        )}
      </div>
    </main>
  );
}
export default Mainapp;
