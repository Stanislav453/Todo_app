import React, { useReducer, useState } from "react";
import TodoWrapper from "./TodoWrapper";
import { TodoStyle } from "./styles/TodoStyle";
import { Header } from "./Header";
import { AddTodoStyle } from "./styles/AddTodoStyle";
import { Modal } from "./Modal";

//PRISIEL SOM NA TO AKO OZNACIT KONKTERNE POLE KTORE SA MA ZMENIT ALE ESTE NEVIEM AKO HO ZMENIT

//TS_TYPE
type State = {
  task: string[];
  messageVerification: boolean;
  inputVerification: boolean;
  inputHaveNumberVerification: boolean;
  message: string;
  newTask: any;
};

type Action = {
  type: string | boolean | number;
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
  const inputIsNotEmpty = "input_is_not_empty";
  const inputIsAdd = "input_is_add";
  const inputHaveNumber = "input_have_number";
  const inputNotHaveNumber = "input_not_haver_number";
  const removeTask = "remove_task";
  const changeText = "change_text";

  //REDUCER
  const reducer = (state: State, action: Action) => {
    const newTask = [...state.task, action.payload];
    const changeOneTask = [
      ...state.task,
      state.task.map((oneTask: any) => {
        return oneTask.id !== action.payload ? "ahoj" : "nejde to";
      }),
    ];

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
          task: state.task.filter((oneTask: any) => {
            return oneTask.id !== action.payload;
          }),
        };
      case changeText:
        return {
          ...state,
          task: changeOneTask,
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
  const [reWrite, setReWrite] = useState<string>("");

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

  const removeTaskHandler = (id: number) => {
    dispatch({ type: removeTask, payload: id });
  };

  const reWriteTask = (e: any) => {
    e.preventDefault();
    setReWrite(e.target.value);
  };

  const changeTask = (event: any, id: number) => {
    event.preventDefault();
    if (id === id) {
      dispatch({ type: changeText, payload: { reWrite, id } });
    }
    // dispatch({ type: changeText, payload: { reWrite, id } });
    // console.log(id);
  };

  console.log(reWrite);

  //APP
  return (
    <>
      {state.messageVerification && (
        <Modal message={state.message} closeMessage={closeMessage} />
      )}
      <TodoStyle onSubmit={formSubmit}>
        <Header />
        <AddTodoStyle>
          {state.inputHaveNumberVerification && (
            <p>Inside Input can't be number</p>
          )}
          {state.inputVerification && <p>{inputMessage}</p>}
          <input
            type="text"
            value={value}
            placeholder={inputPlaceholder}
            onChange={inputListener}
          />
          <button>{addTask}</button>
        </AddTodoStyle>
        <TodoWrapper
          task={state.task}
          removeTaskHandler={removeTaskHandler}
          reWriteTask={reWriteTask}
          changeTask={changeTask}
        />
      </TodoStyle>
    </>
  );
};
