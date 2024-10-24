import { useReducer, useState } from "react";
import "./App.css";
import { MovieContext, ThemeContext } from "./context";
import Home from "./page/Home";
import { cartReducer, initilaStalte } from "./reducer/CartReducer";

function App() {
 
  const [them, setThem] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initilaStalte)
  return (
    <>
      <MovieContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={{ them, setThem }}>
          <Home />
        </ThemeContext.Provider>
      </MovieContext.Provider>
    </>
  );
}

export default App;
