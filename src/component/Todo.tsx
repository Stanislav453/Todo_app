import React, { useReducer, useState } from "react";
import TodoWrapper from "./TodoWrapper";
import { TodoStyle } from "./styles/TodoStyle";
import { Header } from "./Header";
import { AddTodoStyle } from "./styles/AddTodoStyle";

//TS_TYPE
type State = {
  task: string[];
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
  const insideInputCantBeNumber = "Inside Input can not be number.";

  //NOTIFICATION_VARIABLES
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
    inputVerification: false,
    inputHaveNumberVerification: false,
    message: "",
  };

  //HOOKS
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [value, setValue] = useState<string>("");
  const [messageVerification, setMessageVerification] = useState<boolean>(false);
  const [inputHaveNumber, setInputHaveNumber] = useState<boolean>(false);

  //FORM_SUBMIT_ACTION
  const formSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (value && !inputHaveNumber) {
      const newTask: NewTask = {
        id: new Date().getTime(),
        name: value,
        isRewriteActive: false,
      };
      dispatch({ type: addTask, payload: newTask });
      setMessageVerification(true);
      // dispatch({ type: inputIsNotEmpty });
      setValue("");
    }
  };

  //INPUT_LISTENER
  const inputListener = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (/\d/.test(e.target.value)) {
      setInputHaveNumber(true);
    } else {
      setInputHaveNumber(false);
    }
  };

  const removeTaskHandler = (id: number) => {
    dispatch({ type: removeTask, payload: id });
  };

  //APP
  return (
    <>
      <TodoStyle onSubmit={formSubmit}>
        <Header
          messageVerification={messageVerification}
          setMessageVerification={setMessageVerification}
        />
        <AddTodoStyle>
          {inputHaveNumber && <p>{insideInputCantBeNumber}</p>}
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
