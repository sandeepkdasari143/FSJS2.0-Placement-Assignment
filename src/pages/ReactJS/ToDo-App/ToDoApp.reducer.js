import { ADD_TODO, DELETE_TODO, NEW_TODO_INPUT_CHANGE, SET_TODOS, TOGGLE_DONE_TODO } from "./ToDoApp.actions";

export const initialToDoAppState = {
    todos: [],
    newTodo: "",
};

const ToDoAppReducer = (state, action) => {
    switch (action.type) {
        case SET_TODOS:
        return {
            ...state,
            todos: action.todos,
        };

        case ADD_TODO:
        return {
            ...state,
            todos: [...state.todos, action.newToDoObject],
        };

        case DELETE_TODO:
        return state.todos.filter((todo) => todo.id !== action.deleteToDoID);

        case TOGGLE_DONE_TODO:
        state.todos.filter((todo) => {
            if (todo.id === action.toggleDoneToDoID) {
            todo.done = !todo.done;
            }
        });
        return state;

        case NEW_TODO_INPUT_CHANGE:
        return {
            ...state,
            [action.payload.field]: action.payload.value,
        };
    }
};

export default ToDoAppReducer;