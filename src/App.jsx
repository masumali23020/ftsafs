import { useState } from "react";
import "./App.css";
import { MovieContext, ThemeContext } from "./context";
import Home from "./page/Home";

function App() {
  const [cardData, setCartData] = useState([]);
  const [them, setThem] = useState(true);
  return (
    <>
      <MovieContext.Provider value={{ cardData, setCartData }}>
        <ThemeContext.Provider value={{ them, setThem }}>
          <Home />
        </ThemeContext.Provider>
      </MovieContext.Provider>
    </>
  );
}

export default App;
