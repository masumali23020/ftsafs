import { getAllProjects } from "../data";

const projects = getAllProjects()


const inttialProject = {
  projects: projects,
  searchTerm: [],
};
const ProjectReducr = (state, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      {
        return {
          ...state,
          projects: [...state.projects, action.payload],
        };
      }

      break;
    case "Remove_Project":
      return {
        ...state,
        projects: state.projects.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case "EDITE_PROJECT":
      return {
        ...state,
        projects: state.projects.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
      break;

    case "Filter_project":
      return {
        ...state,
        searchTerm: action.payload,
      };

    default:
      return state;
  }
};

export { inttialProject, ProjectReducr };

