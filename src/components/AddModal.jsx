import React, { useState } from "react";

const AddModal = ({onClose, onSve}) => {

  const [task, setTask] = useState({
    id: crypto.randomUUID(),
    taskName: "",
    description:"",
    category: "",
    DueDate: ""
  })

  const handelChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setTask({
      ...task,
      [name]: value
    })

  }

  // console.log(task);
  
 
  
  
  return (
    <div
    className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm"
  >
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto  bg-gray-900 rounded-md "
    >
      <h2 className="mb-6 text-2xl font-bold text-green-400">Create Task</h2>
      <htmlForm>
        <div className="mb-4">
          <label
            htmlFor="taskName"
            className="mb-1 block text-sm font-medium text-gray-300"
          >
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            required
            value={task.taskName}
            onChange={handelChange}
            className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-medium text-gray-300"
          >
            description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
              required
            value={task.description}
            onChange={handelChange}
            className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="DueDate"
            className="mb-1 block text-sm font-medium text-gray-300"
          >
            Due Date
          </label>
          <input
            type="date"
            id="DueDate"
            name="DueDate"
            required
            value={task.DueDate}
            onChange={handelChange}
            className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="mb-1 block text-sm font-medium text-gray-300"
          >
            category
          </label>
          <select
            id="category"
            name="category"
            value={task.category}
            onChange={handelChange}
            required
            className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="se">selected</option>
            <option value="To-Do">To-Do</option>
            <option value="OnProgress">On-Progress</option>
            <option value="Done">Done</option>
            <option value="Revised">Revised</option>
          </select>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            onClick={()=>onSve(task)}
          >
            Create Task
          </button>
        </div>
      </htmlForm>
      </div>
    </div>
  );
};

export default AddModal;
