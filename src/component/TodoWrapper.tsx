import React from 'react'
import { TodoWrapperStyle } from './styles/TodoWrapperStyle'
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

type myTodosProps = {
  task: any;
  removeTaskHandler: any;
  reWriteTask: any;
  changeTask: any
};

const TodoWrapper = ({
  task,
  removeTaskHandler,
  reWriteTask,
  changeTask,
}: myTodosProps) => {
  return (
    <TodoWrapperStyle>
      {task.length === 0 && <h2>you dont have task</h2>}
      {task.map((item: any, key: number) => {
        return (
          <article key={item.id}>
            <header>
              <h3>{`${key + 1}. ${item.name}`}</h3>
              <div>
                <input
                  type="text"
                  placeholder={item.name}
                  // value={item.name}
                  onChange={reWriteTask}
                />
                <button onClick={(e) => changeTask(e, item.id)}>Change text</button>
              </div>
            </header>
            <div>
              <button
                onClick={() => {
                  removeTaskHandler(item.id);
                }}
              >
                <BsFillTrashFill />
              </button>
              <button>
                <BsFillPencilFill />
              </button>
            </div>
          </article>
        );
      })}
    </TodoWrapperStyle>
  );
};

export default TodoWrapper