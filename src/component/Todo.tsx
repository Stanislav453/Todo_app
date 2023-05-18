import React, { useReducer, useState } from "react";
import TodoWrapper from "./TodoWrapper";
import { TodoStyle } from "./styles/TodoStyle";
import { Header } from "./Header";
import { AddTodoStyle } from "./styles/AddTodoStyle";

type State = {
  task: string[],
  messageVerification: boolean,
  message: string
}

type Action = {
  type: string,
  payload: any
}

type NewTask = {
  id: number,
  name: string
}



export const Todo = () => {
  //REDUCER_VARIABLES
    const addTask = "add_task";

  const reducer = (state: State, action: Action) => {

    if (action.type === addTask) {
      const newTask = [ ...state.task, action.payload ]
      return {
        ...state,
        task: newTask
      };
      
    }

    return state;
  };

  const defaultState = {
    task: [""],
    messageVerification: false,
    message: "",
  };


  const [state, dispatch] = useReducer(reducer, defaultState);
  const [ value, setValue ] = useState<string>("")

  const inputPlaceholder = "Select what you want do today";
  const buttonText = "add task";

  console.log( state.task);

  const formSubmit = (e: any) => {
    e.preventDefault();
    if (value) {
      const newTask: NewTask = { id: new Date().getTime(), name: value };
      dispatch({ type: addTask, payload: newTask });
    }
  };

  const newArray = Object.values(state.task)

  console.log( typeof state.task);

  return (
    <>
      {/* {showNotification && console.log("hello")} */}
      <TodoStyle onSubmit={formSubmit}>
        <Header />
        <AddTodoStyle>
          <input
            type="text"
            placeholder={inputPlaceholder}
            onChange={(e) => setValue(e.target.value)}
          />
          <button>{buttonText}</button>
        </AddTodoStyle>
        <TodoWrapper task={state.task} />
      </TodoStyle>
    </>
  );
};
