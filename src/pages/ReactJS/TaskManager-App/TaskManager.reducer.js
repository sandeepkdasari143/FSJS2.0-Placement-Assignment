import {
  SET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_DONE_TASK,
  NEW_TASK_INPUT_CHANGE,
} from "./TaskManager.actions";

export const initialTaskManagerState = {
  tasks: [],
  newTask: {
    taskTitle: "",
    taskDescription:""
  },
};

const TaskManagerReducer = (state, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.newTaskObject],
      };

    case DELETE_TASK:
      return state.tasks.filter((task) => task.id !== action.deleteTaskID);

    case TOGGLE_DONE_TASK:
      state.tasks.filter((task) => {
        if (task.id === action.toggleDoneTaskID) {
          task.done = !task.done;
        }
      });
      return state;

    case NEW_TASK_INPUT_CHANGE:
      return {
        ...state,
        newTask: {
          ...state.newTask,
          [action.payload.field]: action.payload.value,
        }
      };
  }
};

export default TaskManagerReducer;
