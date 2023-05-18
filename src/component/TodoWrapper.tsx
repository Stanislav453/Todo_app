import React from 'react'
import { TodoWrapperStyle } from './styles/TodoWrapperStyle'
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

type task = {
  task: any
}

const TodoWrapper = (task: task) => {
  return (
    <TodoWrapperStyle>
      <article>
        <p>Any lorem isum text width any rolem</p>
        <div>
          <button>
            <BsFillTrashFill />
          </button>
          <button>
            <BsFillPencilFill />
          </button>
        </div>
      </article>
      {/* <article>{ task.task }</article> */}
      {/* {task.map((item: any, key: number) => {
        return (
          <article>
            <p>{ item}</p>
        </article>
      )
    } ) } */}

    </TodoWrapperStyle>
  );
}

export default TodoWrapper