import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ProjectContext } from "../../context";
import AddModal from "../AddModal";

const SubHeader = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const { dispatch } = useContext(ProjectContext);

  const handelAdd = () => {
    setShowAddModal(true);
  };
  const handelColse = () => {
    setShowAddModal(false);
  };

  const handelSve = (task) => {
    console.log(task);
    if (
      !task.taskName ||
      !task.description ||
      !task.DueDate ||
      !task.category
    ) {
      toast.error("All fields are required!");
      setShowAddModal(true);
    } else {
      dispatch({
        type: "ADD_PROJECT",
        payload: task,
      });
      toast.success("succesful");
      setShowAddModal(false);
    }
  };
  return (
    <>
      {" "}
      {showAddModal && <AddModal onClose={handelColse} onSve={handelSve} />}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>

        <div className="flex space-x-2">
          <button
            className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
            onClick={handelAdd}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="mr-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              <path d="M15 12h-6" />
              <path d="M12 9v6" />
            </svg>
            Add
          </button>
        </div>
      </div>{" "}
    </>
  );
};

export default SubHeader;
