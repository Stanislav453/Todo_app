import React from "react";
import { TodoWrapperStyle } from "./styles/TodoWrapperStyle";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { RewriteTask } from "./styles/RewriteTask";
import { TodoButton } from "./styles/TodoButton";

type myTodosProps = {
  task: string[];
  removeTaskHandler: (id: number) => void;
  isRewriteActive: boolean;
  isRewriteActiveHandler: () => void;
};

//STRING_VARIABLES
const changeText = "Change text";
const youDoNotHaveAnyTask = "You do not have any task";

const TodoWrapper = ({
  task,
  removeTaskHandler,
  isRewriteActive,
  isRewriteActiveHandler,
}: myTodosProps) => {
  return (
    <TodoWrapperStyle>
      {task.length === 0 && <h2>{youDoNotHaveAnyTask}</h2>}
      {task.map((item: any, key: number) => {
        return (
          <article key={item.id}>
            <header>
              <h3>{`${key + 1}. ${item.name}`}</h3>
              <TodoButton>
                <button
                  onClick={() => {
                    removeTaskHandler(item.id);
                  }}
                >
                  <BsFillTrashFill />
                </button>
                <button onClick={isRewriteActiveHandler}>
                  <BsFillPencilFill />
                </button>
              </TodoButton>
            </header>
            {item.isRewriteActive && (
              <RewriteTask>
                <input
                  type="text"
                  placeholder={item.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    item.id === item.id
                      ? (item.name = e.target.value)
                      : item.name
                  }
                />
                <button>{changeText}</button>
              </RewriteTask>
            )}
          </article>
        );
      })}
    </TodoWrapperStyle>
  );
};

export default TodoWrapper;
