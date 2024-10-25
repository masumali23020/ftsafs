import React, { useContext } from "react";
import Header from "../components/Header";
import SIdebar from "../components/Sidebar";
import Done from "../components/projects/Done";
import OnProgres from "../components/projects/OnProgres";
import Revised from "../components/projects/Revised";
import SubHeader from "../components/projects/SubHeader";
import Todo from "../components/projects/Todo";
import { ProjectContext } from "../context";

const Home = () => {
  const {state} = useContext(ProjectContext)
  console.log(state.projects, "state");
  
  // deside what to render
  const projects = state.projects;

  const groupedProjects = projects.reduce((acc, project) => {
    // Check if the category already exists in the accumulator
    const existingGroup = acc.find(
      (group) => group.category === project.category
    );

    if (existingGroup) {
      // If it exists, push the project to the existing group
      existingGroup.tasks.push(project);
    } else {
      // If it doesn't exist, create a new group
      acc.push({ category: project.category, tasks: [project] });
    }

    return acc;
  }, []);


  // decide what to render 

  // let conten;
  const filterTodo = groupedProjects.find(item => item.category === "To-Do")
  const filterOnProgress = groupedProjects.find(item => item.category === "OnProgress")
  const filterDone = groupedProjects.find(item => item.category === "Done")
  const filterRevised = groupedProjects.find(item => item.category === "Revised")

  console.log(filterTodo, "dsafs")
  

  return (
    <div class="flex h-screen">
      <SIdebar />

      <main class="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <div class="mx-auto max-w-7xl p-6">
          <SubHeader />
          <div class="-mx-2 mb-6 flex flex-wrap">
           <Todo tasks={filterTodo} />
           <OnProgres onProgresTask={filterOnProgress} />
           <Done doneTask={filterDone} />
           <Revised reviseTasks={filterRevised} />
          </div>
          
          
        </div>
      </main>
    </div>
  );
};

export default Home;
