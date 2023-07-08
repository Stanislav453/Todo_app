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

type Action =
  | {
      type: string | boolean | number;
      payload?: any;
    }
  | { type: "isRewriteActive"; payload: boolean };

type NewTask = {
  id: number;
  name: string;
  isRewriteActive: boolean;
};


//FUNCTION_TODO
export const Todo = () => {
  //STRING_VARIABLES
  const addTask = "add task";
  const inputPlaceholder = "Select what you want do today.";
  const inputMessage = "You do not write any task.";
  const insideInputCantBeNumber = "Inside Input can not be number.";

  //NOTIFICATION_VARIABLES
  const closeNotification = "close_notification";
  const inputIsEmpty = "input_is_empty";
  const inputIsNotEmpty = "input_is_not_empty";
  const inputIsAdd = "input_is_add";
  const inputHaveNumber = "input_have_number";
  const inputNotHaveNumber = "input_not_haver_number";
  const removeTask = "remove_task";

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
          messageVerification: true,
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
      case removeTask:
        return {
          ...state,
          task: state.task.filter((oneTask: NewTask | any) => {
            return oneTask.id !== action.payload;
          }),
        };
      default:
        return state;
    }
  };

  //REDUCER_STATE
  const defaultState = {
    task: [],
    newTask: [],
    messageVerification: false,
    inputVerification: false,
    inputHaveNumberVerification: false,
    message: "",
  };

  //HOOKS
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [value, setValue] = useState<string>("");

  //FORM_SUBMIT_ACTION
  const formSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (value && !state.inputHaveNumberVerification) {
      const newTask: NewTask = {
        id: new Date().getTime(),
        name: value,
        isRewriteActive: false,
      };
      dispatch({ type: addTask, payload: newTask });
      dispatch({ type: inputIsAdd });
      dispatch({ type: inputIsNotEmpty });
      dispatch({ type: inputNotHaveNumber });
      setValue("");
    } else if (!value) {
      dispatch({ type: inputIsEmpty });
    }
  };

  //INPUT_LISTENER
  const inputListener = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (/\d/.test(e.target.value)) {
      dispatch({ type: inputHaveNumber });
    } else {
      dispatch({ type: inputNotHaveNumber });
    }
  };

  const closeMessage = () => {
    dispatch({ type: closeNotification });
  };

  const removeTaskHandler = (id: number) => {
    dispatch({ type: removeTask, payload: id });
  };

  //APP
  return (
    <>
      <TodoStyle onSubmit={formSubmit}>
        <Header
          messageVerification={state.messageVerification}
          closeMessage={closeMessage}
        />
        <AddTodoStyle>
          {state.inputHaveNumberVerification && (
            <p>{insideInputCantBeNumber}</p>
          )}
          {state.inputVerification && state.task.length === 0 && (
            <p>{inputMessage}</p>
          )}
          <input
            type='text'
            value={value}
            placeholder={inputPlaceholder}
            onChange={inputListener}
          />
          <button type='submit' onClick={() => formSubmit()}>
            {addTask}
          </button>
        </AddTodoStyle>
        <TodoWrapper task={state.task} removeTaskHandler={removeTaskHandler} />
      </TodoStyle>
    </>
  );
};
