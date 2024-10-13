import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";


export default function TaskBoard() {
    const defaultTask = {
        id: crypto.randomUUID(),
        tittle: "Learn react",
        description:
          "I want to learn react such than i can treat ii like my slave and make it do whatever i want to be do ",
        tags: ["wev", "react", "js"],
        priority: "High",
        isFavarite: true
      };
 
  const [tasks, setTask] = useState([defaultTask]);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)

  const handelAddTask = (newTask) => {
    setTask([...tasks, newTask])
    setShowAddTaskModal(false)
   

  }



  return (
    <section className="mb-20" id="tasks">
   {showAddTaskModal && < AddTaskModal onSave={handelAddTask} />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={()=>setShowAddTaskModal(!showAddTaskModal)} />
          (<TaskList tasks={tasks} />)
        </div>
      </div>
    </section>
  );
}
