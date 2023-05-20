import React, { useReducer, useState } from "react";
import TodoWrapper from "./TodoWrapper";
import { TodoStyle } from "./styles/TodoStyle";
import { Header } from "./Header";
import { AddTodoStyle } from "./styles/AddTodoStyle";
import { Modal } from "./Modal";

//TS_TYPE
type State = {
  task: string[];
  messageVerification: boolean;
  inputVerification: boolean;
  inputHaveNumberVerification: boolean;
  message: string;
};

type Action = {
  type: string | boolean;
  payload: any;
};

type NewTask = {
  id: number;
  name: string;
};

//FUNCTION_TODO
export const Todo = () => {
  //STRING_VARIABLES
  const addTask = "add task";
  const inputPlaceholder = "Select what you want do today";
  const inputMessage = "you don't write any task.";

  //NOTIFICATION_VARIABLES
  const closeNotification = "close_notification";
  const inputIsEmpty = "input_is_empty";
  const inputIsNotEmpty = "input_is_not_empty"
  const inputIsAdd = "input_is_add";
  const inputHaveNumber = "input_have_number";
  const inputNotHaveNumber = "input_not_haver_number";

  //REDUCER
  const reducer = (state: State, action: Action) => {
    const newTask = [...state.task, action.payload];

    switch (action.type) {
      case addTask:
        return {
          ...state,
          task: newTask,
          message: addTask,
        };
      case closeNotification:
        return {
          ...state,
          messageVerification: false,
        };
      case inputIsEmpty:
        return {
          ...state,
          inputVerification: true,
        };
      case inputIsNotEmpty:
        return {
          ...state,
          inputVerification: false,
        };
      case inputIsAdd:
        return {
          ...state,
          messageVerification: true, //must be true
        };
      case inputHaveNumber:
        return {
          ...state,
          inputHaveNumberVerification: true,
        };
      case inputNotHaveNumber: 
        return {
          ...state,
          inputHaveNumberVerification: false,
        };

      default:
        return state;
    }
  };

  //REDUCER_STATE
  const defaultState = {
    task: [],
    messageVerification: false,
    inputVerification: false,
    inputHaveNumberVerification: false,
    message: "",
  };

  //HOOKS
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [value, setValue] = useState<string>("");

  //FORM_SUBMIT_ACTION
  const formSubmit = (e: any) => {
    e.preventDefault();
    if (value && !state.inputHaveNumberVerification) {
      const newTask: NewTask = { id: new Date().getTime(), name: value };
      dispatch({ type: addTask, payload: newTask });
      dispatch({ type: inputIsAdd, payload: undefined });
      dispatch({ type: inputIsNotEmpty, payload: undefined });
      dispatch({ type: inputNotHaveNumber, payload: undefined });
      setValue("");
    } else if (!value) {
      dispatch({ type: inputIsEmpty, payload: undefined });
    }
  };

  //INPUT_LISTENER
  const inputListener = (e: any) => {
    setValue(e.target.value);
    if (/\d/.test(e.target.value)) {
      dispatch({ type: inputHaveNumber, payload: undefined });
    } else {
      dispatch({ type: inputNotHaveNumber, payload: undefined });
    }
  };

  const closeMessage = () => {
    dispatch({ type: closeNotification, payload: undefined });
  };

  //APP
  return (
    <>
      {state.messageVerification && (
        <Modal message={state.message} closeMessage={closeMessage} />
      )}
      <TodoStyle onSubmit={formSubmit}>
        <Header />
        <AddTodoStyle>
          {state.inputHaveNumberVerification && <p>Inside Input can't be number</p>} 
          {state.inputVerification && <p>{inputMessage}</p>}
          <input
            type="text"
            value={value}
            placeholder={inputPlaceholder}
            onChange={inputListener}
          />
          <button>{addTask}</button>
        </AddTodoStyle>
        <TodoWrapper task={state.task} />
      </TodoStyle>
    </>
  );
};
