import "./App.css";

import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProjectContext } from "./context";
import Home from "./pages/Home";
import { ProjectReducr, inttialProject } from "./reducer/ProjectReducer";

function App() {
  const [state, dispatch] = useReducer(ProjectReducr,inttialProject);

  return (
    <>
      <ProjectContext.Provider value={{ state, dispatch }}>
        <Home />
        <ToastContainer />
      </ProjectContext.Provider>
    </>
  );
}

export default App;
