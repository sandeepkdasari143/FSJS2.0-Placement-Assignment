import React from "react";
import { v4 as uuidv4 } from "uuid";
import TaskManagerReducer, { initialTaskManagerState } from "./TaskManager.reducer";
import {
  ADD_TASK,
  NEW_TASK_INPUT_CHANGE,
  SET_TASKS,
} from "./TaskManager.actions";
import TaskForm from "./TaskForm";
import TaskManagerHeader from "./components/TaskManagerHeader";

const TaskManager = () => {
  const [state, dispatch] = React.useReducer(
    TaskManagerReducer,
    initialTaskManagerState
  );

  // console.log({...state.newTask});
  // console.log(state.tasks);

  //Every time, the page is reloaded, the tasks stored in the local Storage get fetched and we dispatch an action to set the tasks inside the reducer with the payload "tasks"
  React.useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks);
      dispatch({
        type: SET_TASKS,
        tasks,
      });
      // console.log(state.tasks);
    }
  }, []);

  //Every Time we add a new task, state.tasks will be updated, so this useEffect will be called to update the localStorage with new tasks.
  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  const handleTaskInputsChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: NEW_TASK_INPUT_CHANGE,
      payload: {
        field: name,
        value: value,
      },
    });
  };

  const addTask = (event) => {
    event.preventDefault();

    if (state.newTask.taskTitle !== "" && state.newTask.taskDescription !== "") {
      const newTaskObject = {
        id: uuidv4(),
        taskTitle: state.newTask.taskTitle,
        taskDescription: state.newTask.taskDescription,
        done: false,
        timestamp: `${new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}, ${new Date().toLocaleTimeString()}`,
      };

      dispatch({
        type: ADD_TASK,
        newTaskObject: newTaskObject,
      });

      state.newTask = {...state.newTask,
        taskTitle: "",
        taskDescription: ""
      };

      return;
    }
    return;
  };

  return (
    <main className="relative min-h-[92vh] flex flex-col basis-[85%] bg-[rgb(245,245,251)] dark:bg-[rgb(20,20,31)]">
      <section className="w-[100%] dark:bg-[rgb(27,27,39)] bg-pink-100 h-[50%] flex flex-col gap-5 items-center justify-center">
        <TaskManagerHeader />
        {/* Task Form */}
        <TaskForm
          addTask={addTask}
          handleTaskInputsChange={handleTaskInputsChange}
          {...state.newTask}
        />
      </section>

      <section className="w-[100%] h-[70%] dark:text-white text-black">
        {/* Tasks Listing */}
        <div>
          {state.tasks.map((task) => {
            return <article key={task.id}>{task.taskTitle}</article>;
          })}
        </div>
      </section>
    </main>
  );
};

export default TaskManager;
