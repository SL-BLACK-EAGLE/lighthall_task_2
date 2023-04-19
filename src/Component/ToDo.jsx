import EditTask from "./EditTask";

export default function ToDo({ task, index, taskList, setTaskList }) {
    
  return (
    <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg shadow-lg rounded-lg hover:bg-green-200">
      <div className="w-full flex flex-row justify-between">
        <p className="font-semibold text-xl ">{task.projectName}</p>
        <EditTask task={task} index={index} taskList={taskList} setTasklist={setTaskList}  />
      </div>
      <p className="text-lg py-4">{task.taskDescription}</p>
      <div className="w-full flex justify-center">
        <button className="bg-red-500 text-white text-sm uppercase font-semibold py-1.5 px-3 rounded-lg mt-6 mb-1">
          Delete
        </button>
      </div>
    </div>
  );
}
