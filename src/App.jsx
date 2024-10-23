import { useState } from "react";
import "./App.css";
import { Footer } from "./componets/Footer";
import Header from "./componets/Header";
import MovieList from "./componets/MovieList";
import Sideber from "./componets/Sideber";
import { MovieContext } from "./context";

function App() {
  const [cardData, setCartData] = useState([])
  return (
    <>
    <MovieContext.Provider value={{cardData,setCartData}} >
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sideber />
          <MovieList />
        </div>
      </main>
      <Footer />
      </MovieContext.Provider>
    </>
  );
}

export default App;
