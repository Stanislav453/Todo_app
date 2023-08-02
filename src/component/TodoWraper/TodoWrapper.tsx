import React, { useState } from "react";
import { TodoWrapperStyle } from "./TodoWrapperStyle";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { RewriteTask } from "../styles/RewriteTask";
import { TodoButton } from "../styles/TodoButton";

type myTodosProps = {
  task: string[];
  removeTaskHandler: (id: number) => void;
};

//STRING_VARIABLES
const changeText = "Change text";
const youDoNotHaveAnyTask = "You do not have any task";

const TodoWrapper = ({ task, removeTaskHandler }: myTodosProps) => {
  //HOOKS
  const [number, setNumber] = useState<number>(0);
  const [reWriteValue, setReWriteValue] = useState<string>("");

  return (
    <TodoWrapperStyle>
      {task.length === 0 && <h2>{youDoNotHaveAnyTask}</h2>}
      {task.map((item: any, key: number) => {
        const reWriteTask = () => {
          setNumber(0);
          return (item.name = reWriteValue);
        };
        return (
          <article key={item.id}>
            <header>
              <h3>{`${key + 1}. ${item.name}`}</h3>
              <TodoButton>
                <button
                  type='button'
                  onClick={() => {
                    removeTaskHandler(item.id);
                  }}
                >
                  <BsFillTrashFill />
                </button>
                {item.id === number ? (
                  <button
                    type='button'
                    onClick={() => {
                      setNumber(0);
                    }}
                  >
                    <AiFillCloseCircle />
                  </button>
                ) : (
                  <button
                    type='button'
                    onClick={() => {
                      setNumber(item.id);
                    }}
                  >
                    <BsFillPencilFill />
                  </button>
                )}
              </TodoButton>
            </header>
            {item.id === number && (
              <RewriteTask>
                <input
                  type='text'
                  placeholder={item.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setReWriteValue(e.target.value)
                  }
                />
                <button type='button' onClick={() => reWriteTask()}>
                  {changeText}
                </button>
              </RewriteTask>
            )}
          </article>
        );
      })}
    </TodoWrapperStyle>
  );
};

export default TodoWrapper;
