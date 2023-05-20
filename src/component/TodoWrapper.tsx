import React from 'react'
import { TodoWrapperStyle } from './styles/TodoWrapperStyle'
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

type myTodosProps = {
  task: any;
};

const TodoWrapper = ({ task }: myTodosProps) => {

  return (
    <TodoWrapperStyle>
      {task.length === 0 && <h2>you dont have task</h2>}
      {task.map((item: any, key: number) => {
        return (
          <article key={key}>
            <p>{`${key + 1}. ${item.name}`}</p>
            <div>
              <button>
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