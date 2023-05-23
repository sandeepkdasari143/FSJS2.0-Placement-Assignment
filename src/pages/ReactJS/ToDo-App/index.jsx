import React from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDoAppReducer, { initialToDoAppState } from "./ToDoApp.reducer";
import { ADD_TODO, NEW_TODO_INPUT_CHANGE, SET_TODOS } from "./ToDoApp.actions";

const ToDo = () => {
  
  const [state, dispatch] = React.useReducer(
    ToDoAppReducer,
    initialToDoAppState
  );


  // console.log(state.newTodo);
  // console.log(state.todos);

  React.useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const todos = JSON.parse(storedTodos);

      dispatch({
        type: SET_TODOS,
        todos
      })
      // console.log(state.todos);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos])

  const handleToDoInputFieldChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: NEW_TODO_INPUT_CHANGE,
      payload: {
        field: name,
        value: value,
      },
    });
  };

  const addToDo = (event) => {
    event.preventDefault();

    if (state.newTodo !== "") {
      
      const newToDoObject = {
        id: uuidv4(),
        todoText: state.newTodo,
        done: false,
        timestamp: `${new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}, ${new Date().toLocaleTimeString()}`,
      };


      dispatch({
        type: ADD_TODO,
        newToDoObject: newToDoObject,
      });
      
      state.newTodo = "";
      return;
    }
    return;
  };

  return (
    <main className="relative min-h-[92vh] flex flex-col basis-[85%] bg-[rgb(245,245,251)] dark:bg-[rgb(20,20,31)]">
      <section className="w-[100%] dark:bg-[rgb(27,27,39)] bg-pink-100 h-[30%] flex items-center justify-center">
        {/* Todo Form */}
        <ToDoForm
          addToDo={addToDo}
          handleToDoInputFieldChange={handleToDoInputFieldChange}
          newTodo={state.newTodo}
        />
      </section>

      <section className="w-[100%] h-[70%] dark:text-white text-black">
        {/* Todo Listing */}
        <div>
          {
            state.todos.map((todo) => {
              return <article key={todo.id}>{todo.todoText}</article>;
            })}
        </div>
      </section>
    </main>
  );
};

export default ToDo;
